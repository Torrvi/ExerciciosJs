let num = document.getElementById('fnum')
let tab = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n))!=-1){
        return true
    }else{
        return false
    }
    }


function adicionar(){
    if(isNumero(num.value)&& !inLista(num.value, valores)){

}else{
    window.alert('Valor inválido ou já encontrado na lista.')

}
}


/*if(num.value.length == 0){
    window.alert(`Por favor, digite um número`)*/