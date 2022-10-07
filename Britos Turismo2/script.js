function logar(){
    
let usuario =document.getElementById("usuario").value
let senha = document.getElementById("senha").value
if(usuario == "admin"&& senha == "2200"){
                    window.location.href ="home.html"                   
}
else{
    alert("Usuário ou senha incorretos")
}
console.log(usuario)
}
 
