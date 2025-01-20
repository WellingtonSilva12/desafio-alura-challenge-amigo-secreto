//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let friendsList = []


function addFriend() {
    const inputField = document.getElementById('friend');
    const nameValidation = /^[a-zA-ZÀ-ÿ ]+$/;

    if (inputField.value.trim() !== '' && nameValidation.test(inputField.value)) {
        const friendName = inputField.value.trim();

        if (!friendsList.includes(friendName)) {
            addNameFriendServer(friendName)
                .then(response => {
                    if (response.error) {
                        alert(response.error);
                    } else {
                        friendsList.push(friendName);
                        console.log('Nome adicionado com sucesso!');
                        updateList();
                        inputField.value = '';
                        // alert(response.message); 
                    }
                })
                .catch(error => {
                    console.error('Erro ao adicionar amigo no servidor:', error);
                    alert('Erro ao se comunicar com o servidor.');
                });
        } else {
            alert('Este nome já foi adicionado.');
        }
    } else {
        alert('Por favor, insira um nome válido.');
    }
}

async function addNameFriendServer(name) {
    const response = await fetch('http://localhost:3000/add-friend', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }), 
    });
    if (!response.ok) {
        return response.json().then(error => {
            throw new Error(error.error || 'Erro desconhecido no servidor');
        });
    }
    return await response.json();
}


document.getElementById('friend').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addFriend()
    }
})

function updateList() {
    const ul = document.getElementById('friendList')
    ul.innerHTML = ''

    friendsList.forEach(name => {
        const li = document.createElement('li')
        li.textContent = name
        ul.appendChild(li)
    })
}

function selectFriendRandom() {
    if (friendsList.length > 0) {
        const index = Math.floor(Math.random() * friendsList.length)
        const randomFriend = friendsList[index]

        friendsList.splice(index, 1);

        updateList();
        console.log(friendsList)
        alert(`Amigo selecionado: ${randomFriend}`)
    } else {
        alert('A lista de amigos está vazia.')
    }
}