let nome =window.document.getElementById('nome')
let email = document.querySelector('#email')
let senha = document.querySelector('#senha')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txt1 = document.querySelector('#txtNome')
    if(nome.value.length < 3){
       txt1.innerHTML = 'Nome inválido!'
       txt1.style.color = 'red'
    }
    else{
        txt1.innerHTML = 'Nome válido!'
        txt1.style.color = "green"
    }
}

function validaEmail(){
    let txt2 = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txt2.innerHTML = 'E-mail inválido'
        txt2.style.color = 'red'
    }
    else{
        txt2.innerHTML = 'E-mail válido'
        txt2.style.color = 'green'
    }
}

function validaSenha(){
    let txt2 = document.querySelector('#txtSenha')
    if(senha.value.length<8){
        txt2.innerHTML = 'Senha inválida'
        txt2.style.color = 'red'
    }
    else{
        txt2.innerHTML = 'Senha válida'
        txt2.style.color = 'green'
    }
}