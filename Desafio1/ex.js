function carregar(){
var msg= window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML= `Agora são ${hora} horas.`
if(hora<12 ){
    img.src = 'Imagens/Manha.png'
    document.body.style.background = '#FFB347'
   }
   else if(hora>=12 && hora<18 ){
       img.src = 'Imagens/Tarde.png'
       document.body.style.background = '#F5DEB3'
   }
   else{
       img.src = 'Imagens/Noite.png'
       document.body.style.background = '#0B1E36"'
   }
}