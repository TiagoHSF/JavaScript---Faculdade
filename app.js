function teste(){
    console.log('oi')
}

function validaForm (){
    if(document.getElementById("nome").value.length < 3){
    alert('Por favor, preencha o campo nome');
    document.getElementById("nome").focus();
    return false
    }
    }