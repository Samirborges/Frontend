var hora_str = window.prompt("Que horas você quer adicionar? [999] para hora atual")
var hora = Number.parseInt(hora_str)
// Escrever a hora na div.

window.confirm(hora)
if (hora == 999 || isNaN(hora)){
    var data = new Date()
    hora = data.getHours()
}

var hora_escrita = window.document.getElementById('hora')
var area = document.getElementById('container')
var body = document.body
var img = window.document.getElementById("img")
area.addEventListener('mouseenter', mudar)

function mudar(){
    hora_escrita.innerText = `Agora são ${hora} horas`
    if (hora > 5 && hora <= 11 ){
        // Bom diah
        img.src = '1.png'
        body.style.backgroundColor = '#B4DBF4'
    }

    else if (hora > 12 && hora < 17){
        // Boa tardeh
        img.src = '2.png'
        body.style.backgroundColor = '#EEC58B'
    }

    else if (hora >= 18 && hora <= 22){
        // Boa noiteh
        img.src = '3.png'
        body.style.backgroundColor = '#032145'
    } else{
        // Boa noiteh
        img.src = '4.png'
        body.style.backgroundColor = '#938382'
    }
    
}
