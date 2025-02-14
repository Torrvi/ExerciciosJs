function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.getElementById('foto')
    if(fano.value.length == 0 || Number(fano.value)> ano){
        window.alert(`Verifique os dado e tente novamente`)
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano- Number(fano.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade <18){
                img.src = 'Imagens/Hnovo.png'

            }else if (idade <55){
                img.src = 'Imagens/Hadulto.png'
            }else{(idade>55)
                img.src = 'Imagens/Hidoso.png'
            }
        } else{
            genero = 'Mulher'
            if(idade <18){
                img.src = 'Imagens/Mnova.png'
            }else if (idade <55){
                img.src = 'Imagens/Madulta.png'
            }else{(idade>55)
                img.src = 'Imagens/Midosa.png'
            }
        }
        res.innerHTML = `<p>Você é ${genero} e tem ${idade} anos</p>`
    }   
}