var arrayNumbers = []
function adicionaArray(){
    // Captando o valor do HMTL
    let numberHtml = document.getElementById('num')
    let number = Number.parseInt(numberHtml.value)

    let arrayHtml = document.querySelector('select#array') 

    // Verificando se o número está entre 1 e 100:
    
    if(1 <= number && number <= 100){
        arrayNumbers.push(number)

        // Adicionando o número no select
        let item = document.createElement('option')
        item.text = `Valor ${number} adicionado`
        arrayHtml.appendChild(item)

    } else{
        window.alert("O número não está entre 1 e 100.")
    }

    numberHtml.value = ''
    numberHtml.focus()

}

function respostaAnalisador(){
    if(arrayNumbers.length == 0){
        window.alert('Adicione um valor para finalizar')
    }else{

    let writeDiv = document.getElementById('resultadoArray')
    
    writeDiv.innerHTML = `<br> <label>Ao todo, temos ${arrayNumbers.length} números cadastrados.</label> <br>`

    const max = arrayNumbers.reduce((a, b) => Math.max(a, b), - Infinity)
    writeDiv.innerHTML += `<br> <label>O maior valor informado foi ${max}</label>. <br>`

    const min = arrayNumbers.reduce((a, b) => Math.min(a,b), Infinity)
    writeDiv.innerHTML += `<br> <label>O menor valor informado foi ${min}.</label> <br>`

    const soma = arrayNumbers.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    writeDiv.innerHTML += `<br> <label>Somando todos os valores, temos ${soma}</label> <br>`

    let media = mediaArray(soma)
    writeDiv.innerHTML += `<br> <label>A média dos valores digitados ${media}</label> <br>`
    }
}

function mediaArray(soma){
    return soma/arrayNumbers.length

}
