var nomeUser = "Teste";
var count = 0;

function validaForm (){
    if(document.getElementById("nome").value.length < 3){
        alert('Por favor, preencha o campo nome');
        document.getElementById("nome").focus();
    }
    if(document.getElementById("password").value.length === 0){
        alert('Por favor, preencha o campo senha');
        document.getElementById("password").focus();
    }
    if(document.getElementById("password").value == "123" && document.getElementById("nome").value == 'teste@teste.com'){
        contador();
        alert('Usuário Logado!');
        alert('Olá!' + nomeUser);
        alert('Logado pela ' + count + ' vez nesta seção');
    } else {
        alert('Usuário ou senha incorretos!');
    }
    return false;
}

function contador (){
    count++;
}