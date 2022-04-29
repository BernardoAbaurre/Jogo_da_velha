var posicoes = [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0]
var jogadas = 0
var placarPlayer = 0
var placarIA = 0
var rodadas = 0
function jogar(campo)
{
    var img = document.getElementById(campo)
    var div = document.getElementById(campo + 10)
    posicoes[campo] = 1
    img.src = "imagens/x.png"
    img.removeAttribute("hidden")
    div.removeAttribute("onclick")
    jogadas ++
    verificarPlayer()
}

// jogada da IA
function jogarIA()
{
    var campoIA = Math.floor(Math.random() * 9)
    var img = document.getElementById(campoIA)
    var div = document.getElementById(campoIA + 10)
    if (posicoes[campoIA] == 0)
    {
        posicoes[campoIA] = -1
        img.src = "imagens/circulo.png"
        img.removeAttribute("hidden")
        div.removeAttribute("onclick")
        jogadas ++
        verificarIA()
    }
    else{
        jogarIA()
    }
}

/*VERIFICAR VITÓRIA DO PLAYER*/

function verificarPlayer()
{
    // horizontal
    if (posicoes[0] + posicoes[1] + posicoes[2] == 3)
    {
        setTimeout(vitoriaPlayer, 100)
    }
    else if (posicoes[3] + posicoes[4] + posicoes[5] == 3)
    {
        setTimeout(vitoriaPlayer, 100)
    }
    else if (posicoes[6] + posicoes[7] + posicoes[8] == 3)
    {
        setTimeout(vitoriaPlayer, 100)
    }

    //vertical
    else if (posicoes[0] + posicoes[3] + posicoes[6] == 3)
    {
        setTimeout(vitoriaPlayer, 100)
    }
    else if (posicoes[1] + posicoes[4] + posicoes[7] == 3)
    {
        setTimeout(vitoriaPlayer, 100)
    }
    else if (posicoes[2] + posicoes[5] + posicoes[8] == 3)
    {
        setTimeout(vitoriaPlayer, 100)
    }

    //diagonal
    else if (posicoes[0] + posicoes[4] + posicoes[8] == 3)
    {
        setTimeout(vitoriaPlayer, 100)
    }
    else if (posicoes[6] + posicoes[4] + posicoes[2] == 3)
    {
        setTimeout(vitoriaPlayer, 100)
    }
    //sem vitoria
    else 
    {
        if(jogadas != 9)
        {
            jogarIA()
        }
        else
        {
            empate()
        }
    }
}

/*VERIFICAR VITÓRIA DA IA*/
function verificarIA()
{
    // horizontal
    if (posicoes[0] + posicoes[1] + posicoes[2] == -3)
    {
        setTimeout(vitoriaIA, 400)
    }
    else if (posicoes[3] + posicoes[4] + posicoes[5] == -3)
    {
        setTimeout(vitoriaIA, 400)
    }
    else if (posicoes[6] + posicoes[7] + posicoes[8] == -3)
    {
        setTimeout(vitoriaIA, 400)
    }

    //vertical
    else if (posicoes[0] + posicoes[3] + posicoes[6] == -3)
    {
        setTimeout(vitoriaIA, 400)
    }
    else if (posicoes[1] + posicoes[4] + posicoes[7] == -3)
    {
        setTimeout(vitoriaIA, 400)
    }
    else if (posicoes[2] + posicoes[5] + posicoes[8] == -3)
    {
        setTimeout(vitoriaIA, 400)
    }

    //diagonal
    else if (posicoes[0] + posicoes[4] + posicoes[8] == -3)
    {
        setTimeout(vitoriaIA, 400)
    }
    else if (posicoes[6] + posicoes[4] + posicoes[2] == -3)
    {
        setTimeout(vitoriaIA, 400)
    }
    //sem vitoria
    else 
    {
        if(jogadas == 9)
        {
            empate()
        }
    }
}

//vitória player
function vitoriaPlayer()
{
    placarPlayer ++
    document.getElementById('placarPlayer').innerHTML = placarPlayer
    resetRodada()
    rodadas ++
    document.getElementById('rodadas').innerHTML = `Rodadas: ${rodadas}`
}

//vitória IA
function vitoriaIA()
{
    placarIA ++
    document.getElementById('placarIA').innerHTML = placarIA
    resetRodada()
    rodadas ++
    document.getElementById('rodadas').innerHTML = `Rodadas: ${rodadas}`
}

//empate
function empate()
{
    window.alert('empate')
    resetRodada()
}

//reset rodada
function resetRodada()
{
    window
    posicoes = [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0]
    jogadas = 0
    var divSelect = document.querySelectorAll('.campo')
    for (var i = 0; i < divSelect.length ; i++)
    {
        var funcao = `jogar(${i})` 
        divSelect[i].setAttribute("onclick", funcao)
    }
    var imgSelect = document.querySelectorAll('.img')
    for (var a = 0; a < imgSelect.length ; a++)
    {
        imgSelect[a].setAttribute("hidden","")
    }
}

//reset total 
function reset()
{
    location.reload()
}