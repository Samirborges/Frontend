var idade = 67
if (idade <16){
    console.log(`Com ${idade} anos, não pode votar`)
} else if (idade <18 || idade >= 65){
        console.log(`Com ${idade} anos, o voto é opcional`)
} else{
        console.log(`Com ${idade} anos, o voto é obrigatório`)
}

