function validateFields (){
    const userValid = isUserValid();
    document.getElementById("btn-login").disabled = !userValid;

    const passwordValid = isPasswordValid();
    document.getElementById("btn-login").disabled =!userValid ||!passwordValid;

}
function isPasswordValid(){
    const senha = document.getElementById("senha").value;
    if (!senha){
        return false;
    }else if(senha=="meianoiteteconto"){
        return true;
    }else
    return false;
}
function isUserValid(){
    const user = document.getElementById("usuario").value;
    if(!user){
        return false;
    }else if(user=="Gabriel"){
        return true;
    }
    return false;
}

const botao = document.getElementById("btn-login")

function LogInCheck(){
    const botao = document.getElementById("btn-login")
    if(botao.onclick){
        console.log("Botao clicado")
    }else if (botao.onchange){
        console.log("botao mudou")
    }else{}
}