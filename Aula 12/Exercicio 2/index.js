function inverterDividir (listaDeNumeros) {
   let todosOsNumeros = listaDeNumeros
   let primeiroNumero = todosOsNumeros[0]
   let ultimoNumero = todosOsNumeros[ todosOsNumeros.length - 1]
primeiroNumero = primeiroNumero /2
ultimoNumero = ultimoNumero / 2

let novosNumeros =  [ ultimoNumero, primeiroNumero ]
return novosNumeros 

}

console.log(inverterDividir([1, 2, 3, 4, 5 ]))
console.log(inverterDividir([1, 5]))
console.log(inverterDividir([1, 5 ]))
console.log(inverterDividir([10, 200]))



let minhaLista = [1, 2, 3, 4, 5, ]
inverterDividir(minhaLista)