var nome = window.prompt('Digite o seu nome')
var idade = window.prompt('Digite a sua idade')
var number = window.prompt('Digite o primeiro número')
var number2 = window.prompt('Digite o segundo número: ')
var s = parseInt(number)
var d = parseInt(number2)
var result = s + d
proman = document.querySelector('#titulo')
proman.innerHTML = `Olá, ${nome}! <br>
A sua idade é ${idade}. E a soma dos dois números <br>
que você digitou é ${result}`