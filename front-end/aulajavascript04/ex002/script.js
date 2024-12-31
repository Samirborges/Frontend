var button = window.document.getElementById('button')
    button.addEventListener('click', analise)

    function analise(){
        var ano_nascimento_str = window.document.getElementById('ano_nascimento')
        var ano_nascimento = parseInt(ano_nascimento_str.value)
        
        var dataAtual = new Date()
        const anoAtual = dataAtual.getFullYear()
        if (ano_nascimento > anoAtual){
            window.confirm("Erro! O ano de nascimento ainda não chegou, tente novamente colocando um ano válido.")
            
        }
        else{

        var idade = parseInt(anoAtual - ano_nascimento)
        
        var sexo_html = window.document.getElementsByName('sexo')
        var sexo;

        var resposta = window.document.getElementById('resposta')
        for (var i = 0; i<= sexo_html.length; i++){
            if(sexo_html[i].checked){
                sexo = sexo_html[i].value
                break
            }
        }
        resposta.innerText = `Detectamos uma ${sexo} com ${idade} anos.`

        // Colocar a funcionalidade de ser imagens para o sexo específicado
        img = window.document.getElementById("imagem_idade")
        if (0 < idade >= 10){
            img.src = "fotos/1.jpg"
        }
        else if(idade <=17){
            img.src = "fotos/2.jpg"
        }
        else if(idade <= 24){
            img.src = "fotos/3.jpg" 
        }
        else if(idade <=35){
            img.src = "fotos/4.jpg"
        }
        else{
            img.src = "fotos/5.jpg"
        }

    }
    }