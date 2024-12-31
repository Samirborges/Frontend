var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12){
    console.log('Nessa hora se dá "Bom dia".')
} else if (hora <= 18){
    console.log('Nessa hora se dá "Boa tarde"')
} else{
    console.log('Nessa hora se dá boa noite.')
}
