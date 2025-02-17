let valores = [5,8,4,7]
valores.sort()

for(let pos = 0; pos < valores.length; pos++){
console.log(`A posição ${pos} tem os valores ${valores[pos]}`)
} 

for(let pos in valores){
    console.log(`A posição ${pos} tem os valores ${valores[pos]}`)
}