var posicoes = [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0]
var jogadas = 0
var placarPlayer1 = 0
var placarPlayer2 = 0
var rodadas = 0
var delay = 200
function jogar(campo)
{
    var img = document.getElementById(campo)
    var div = document.getElementById(campo + 10)
    jogadas++
    if(jogadas % 2 == 0)//jogada P1
    {
        posicoes[campo] = 1
        img.src = "imagens/x.png"
        img.removeAttribute("hidden")
        div.removeAttribute("onclick")
        verificarPlayer1()
    }
    else//jogada P2
    {
        posicoes[campo] = -1
        img.src = "imagens/circulo.png"
        img.removeAttribute("hidden")
        div.removeAttribute("onclick")
        verificarPlayer2()
    }
}

/*VERIFICAR VITÓRIA DO PLAYER1*/

function verificarPlayer1()
{
    // horizontal
    if (posicoes[0] + posicoes[1] + posicoes[2] == 3)
    {
        setTimeout(vitoriaPlayer,delay)
    }
    else if (posicoes[3] + posicoes[4] + posicoes[5] == 3)
    {
        setTimeout(vitoriaPlayer,delay)
    }
    else if (posicoes[6] + posicoes[7] + posicoes[8] == 3)
    {
        setTimeout(vitoriaPlayer,delay)
    }

    //vertical
    else if (posicoes[0] + posicoes[3] + posicoes[6] == 3)
    {
        setTimeout(vitoriaPlayer,delay)
    }
    else if (posicoes[1] + posicoes[4] + posicoes[7] == 3)
    {
        setTimeout(vitoriaPlayer,delay)
    }
    else if (posicoes[2] + posicoes[5] + posicoes[8] == 3)
    {
        setTimeout(vitoriaPlayer,delay)
    }

    //diagonal
    else if (posicoes[0] + posicoes[4] + posicoes[8] == 3)
    {
        setTimeout(vitoriaPlayer,delay)
    }
    else if (posicoes[6] + posicoes[4] + posicoes[2] == 3)
    {
        setTimeout(vitoriaPlayer,delay)
    }
    //sem vitoria
    else 
    {
        if(jogadas == 9)
        {
            setTimeout(empate,delay)
        }
    }
}

/*VERIFICAR VITÓRIA DA IA*/
function verificarPlayer2()
{
    // horizontal
    if (posicoes[0] + posicoes[1] + posicoes[2] == -3)
    {
        setTimeout(vitoriaIA, delay)
    }
    else if (posicoes[3] + posicoes[4] + posicoes[5] == -3)
    {
        setTimeout(vitoriaIA, delay)
    }
    else if (posicoes[6] + posicoes[7] + posicoes[8] == -3)
    {
        setTimeout(vitoriaIA, delay)
    }

    //vertical
    else if (posicoes[0] + posicoes[3] + posicoes[6] == -3)
    {
        setTimeout(vitoriaIA, delay)
    }
    else if (posicoes[1] + posicoes[4] + posicoes[7] == -3)
    {
        setTimeout(vitoriaIA, delay)
    }
    else if (posicoes[2] + posicoes[5] + posicoes[8] == -3)
    {
        setTimeout(vitoriaIA, delay)
    }

    //diagonal
    else if (posicoes[0] + posicoes[4] + posicoes[8] == -3)
    {
        setTimeout(vitoriaIA, delay)
    }
    else if (posicoes[6] + posicoes[4] + posicoes[2] == -3)
    {
        setTimeout(vitoriaIA, delay)
    }
    //sem vitoria
    else 
    {
        if(jogadas == 9)
        {
            setTimeout(empate,delay)
        }
    }
}

//vitória player
function vitoriaPlayer()
{
    placarPlayer1 ++
    document.getElementById('placarPlayer1').innerHTML = placarPlayer1
    resetRodada()
    rodadas ++
    document.getElementById('rodadas').innerHTML = `Rodadas: ${rodadas}`
}

//vitória IA
function vitoriaIA()
{
    placarPlayer2++
    document.getElementById('placarPlayer2').innerHTML = placarPlayer2
    resetRodada()
    rodadas ++
    document.getElementById('rodadas').innerHTML = `Rodadas: ${rodadas}`
}

//empate
function empate()
{
    window.alert('Deu Velha!')
    resetRodada()
    rodadas++
    document.getElementById('rodadas').innerHTML = `Rodadas: ${rodadas}`
}

//reset rodada
function resetRodada()
{
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