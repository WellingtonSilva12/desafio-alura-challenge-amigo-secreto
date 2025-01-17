//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let friendsList = []


function addFriend() {
    const inputField = document.getElementById('friend')

    if(inputField) {
        friendsList.push(inputField)
    } else {
        alert('Por favor, insira um nome válido.')
    }
}