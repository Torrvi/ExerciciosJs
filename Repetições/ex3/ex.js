function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert(`Erro`)
    }
}