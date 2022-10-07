function  cadastrar(){


var cadastro = []
let nome = document.getElementById("nome").value;
let telefone = document.getElementById("telefone").value;
let email = document.getElementById("email").value;
let senha = document.getElementById("senha").value;

let cadastrar = {
    dado1: nome,
    dado2 : telefone,
    dado3  :email,
    dado4 : senha,
}
cadastro.push(cadastrar)
console.log(cadastro)
 document.getElementById("nome").value = "";
 document.getElementById("telefone").value ="";
 document.getElementById("email").value="";
 document.getElementById("senha").value="";
 window.location.href ="home.html"
}
