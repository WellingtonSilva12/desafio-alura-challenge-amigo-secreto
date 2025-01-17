//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let friendsList = []


function addFriend() {
    const inputField = document.getElementById('friend')
    const nameValidation = /^[a-zA-ZÀ-ÿ ]+$/;


    if(inputField.value.trim() !== '' && nameValidation.test(inputField.value)) {
        friendsList.push(inputField.value)

        console.log('nome adicionado com sucesso!')
        console.log(friendsList)

        updateList()
    } else {
        alert('Por favor, insira um nome válido.')
    }
}

function updateList(){
    const ul = document.getElementById('friendList')
    ul.innerHTML = ''
    friendsList.forEach(name => {
        const li = document.createElement('li')
        li.textContent = name
        ul.appendChild(li)
    })
}