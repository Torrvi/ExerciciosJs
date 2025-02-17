let num = [5,8,4]
num[3] = 6
num.push(7)
num.sort()
console.log(`Nosso vetor é ${num}`)

let pos = num.indexOf(9)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
} else{
    console.log(`O valor 8 está na posição ${pos}`)
}
