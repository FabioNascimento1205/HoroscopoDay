var dia = document.getElementById('dia')
var mes = document.querySelector('input#mes')
var res = document.querySelector('div#res')
var botao = document.getElementById('btn')
//var foto = document.getElementById('foto')
var prev = document.getElementById('prev')

botao.addEventListener('click', checar)

function checar(){
    var d = (dia.value)
    var m = (mes.value)

    if(dia.value.length == 0 && mes.value == ''){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(d >=21 && m == 'março' || d <20 && m == 'abril'){
            res.innerHTML = "Você é de Aries!"
            foto.appendChild(img)
            img.setAttribute('src', './img/aries.png')
            prev.innerHTML = 'Você pode sentir a necessidade de olhar para dentro e entender o que de fato faz mais sentido para você.'
        }else if(d >=20 && m == 'abril' || d <21 && m == 'maio'){
            res.innerHTML = "Você é de Touro!"
            foto.appendChild(img)
            img.setAttribute('src', './img/touro.png')
            prev.innerHTML = '2022 pode ser um ano de muito crescimento, boas amizades e boa sorte. As coisas podem se desenrolar de forma positiva sem que você precise interferir de forma muito direta.'
        }else if(d >=20 && m == 'maio' || d <21 && m == 'junho'){
            res.innerHTML = "Você é de Gêmeos!"
            foto.appendChild(img)
            img.setAttribute('src', './img/gemeos.png')
            prev.innerHTML = '2022 é um ano para resolver mal-entendidos, buscar reconciliações e fazer jus às suas melhores qualidades. Pode ser um ano de muita aclamação e boa receptividade nos seus projetos, parcerias e objetivos.'
        }else if(d >=21 && m == 'junho' || d <21 && m == 'julho'){
            res.innerHTML = "Você é de Cancer!"
            foto.appendChild(img)
            img.setAttribute('src', './img/cancer.png')
            prev.innerHTML = '2022 é puro ouro, bebê!! Esse é um ano para expandir sua mente e ampliar sua visão de mundo para além do que você já conhece até o momento.'
        }else if(d >=21 && m == 'julho' || d <24 && m == 'agosto'){
            res.innerHTML = "Você é de Leão!"
            foto.appendChild(img)
            img.setAttribute('src', './img/leao.png')
            prev.innerHTML = '2022 vem todo trabalhado nos trânsitos de Júpiter em Peixes, a novidade do ano, e de Saturno em Aquário, um trânsito mais lento que se repete desde 2021.'
        }else if(d >=24 && m == 'agosto' || d <24 && m == 'setembro'){
            res.innerHTML = "Você é de Virgem!"
            foto.appendChild(img)
            img.setAttribute('src', './img/virgem.png')
            prev.innerHTML = 'Do ponto de vista virginiano, o trânsito de Júpiter em Peixes faz com que 2022 seja o ano do amor e das uniões. '
        }else if(d >=24 && m == 'setembro' || d <24 && m == 'outubro'){
            res.innerHTML = "Você é de Libra!"
            foto.appendChild(img)
            img.setAttribute('src', './img/libra.png')
            prev.innerHTML = '2022 é um ano para resolver incômodos de longo prazo que podem estar sugando sua energia e bloqueando seu caminho.'
        }else if(d >=24 && m == 'outubro' || d <23 && m == 'novembro'){
            res.innerHTML = "Você é de Escorpião!"
            foto.appendChild(img)
            img.setAttribute('src', './img/escorpiao.png')
            prev.innerHTML = '2022 é marcado pelo trânsito do benéfico Júpiter em Peixes, o que do ponto de vista escorpiano pode ser bem maravilhoso.'
        }else if(d >=23 && m == 'novembro' || d <23 && m == 'dezembro'){
            res.innerHTML = "Você é de Sargitário!"
            foto.appendChild(img)
            img.setAttribute('src', './img/sargitario.png')
            prev.innerHTML = '2022 vem para ser um ano intenso de muitas realizações e crescimento pessoal. '
        }else if(d >=23 && m == 'dezembro' || d <21 && m == 'janeiro'){
            res.innerHTML = "Você é de Capricórnio!"
            foto.appendChild(img)
            img.setAttribute('src', './img/capricornio.png')
            prev.innerHTML = '2022 pode ser um ano muito construtivo. As coisas tendem a render: ideias, conversas, aprendizados, novos cursos, novas habilidades e relações mais íntimas que envolvam família, parentes, vizinhança ou amigos mais próximos.'
        }else if(d >=21 && m == 'janeiro' || d <20 && m == 'fevereiro'){
            res.innerHTML = "Você é de Aquário!"
            foto.appendChild(img)
            img.setAttribute('src', './img/aquario.png')
            prev.innerHTML = 'Depois de um ano de muito crescimento pessoal e autoconsciência, 2022 vem para tratar de assuntos mais pragmáticos e para desenvolver tudo o que foi iniciado no último ano. '
        }else if(d >=20 && m == 'fevereiro' || d <21 && m == 'março'){
            res.innerHTML = "Você é de Peixes!"
            foto.appendChild(img)
            img.setAttribute('src', './img/peixe.png')
            prev.innerHTML = 'Virou o ano, virou Júpiter em Peixes, 2022 é todo seu !!! O ano das piscianes que por vários caminhos, vias e correntes se deixam levar pela vida e de uma forma meio mágica sempre acabam por estar no lugar certo e na hora certa.'
        }

        
    }
}