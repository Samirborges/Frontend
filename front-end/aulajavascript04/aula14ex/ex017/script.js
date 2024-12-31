function tabuada(){
    var numberHtml = document.getElementById('number_tabuada')
    var number_tabuada = Number.parseInt(numberHtml.value)
    var write_tabuada = document.querySelector('select#seltab') 

    var verifyNumber = isNaN(number_tabuada)
    
    // Executar tabuada:
    write_tabuada.innerHTML = '<strong>TABUADA</strong>'

    if (verifyNumber == false){
        for(var i = 1; i <=10; i++){
            let item = document.createElement('option')
            item.text = `${number_tabuada} x ${i} = ${number_tabuada*i}`
            write_tabuada.appendChild(item)
        }
    } else{
        window.confirm('Por favor digite um número.')
    }   
}