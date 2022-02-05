var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = "";

function validarVitoria() {

    let vencedor = document.querySelector('.resultado');

    if (playerOpt == "papel") {

        if (inimigoOpt == "papel") {

            vencedor.innerHTML = "Tied Game!";
        } else if (inimigoOpt == "tesoura") {

            vencedor.innerHTML = "The Enemy Won!";
        } else if (inimigoOpt == "pedra") {

            vencedor.innerHTML = "You Won!";
        }


    }


    if (playerOpt == "tesoura") {

        if (inimigoOpt == "papel") {

            vencedor.innerHTML = "You Won!";
        } else if (inimigoOpt == "tesoura") {

            vencedor.innerHTML = "Tied Game!";
        } else if (inimigoOpt == "pedra") {

            vencedor.innerHTML = "The Enemy Won!";
        }


    }

    if (playerOpt == "pedra") {

        if (inimigoOpt == "papel") {

            vencedor.innerHTML = "The Enemy Won!";
        } else if (inimigoOpt == "tesoura") {

            vencedor.innerHTML = "You Won!";
        } else if (inimigoOpt == "pedra") {

            vencedor.innerHTML = "Tied Game!";

        }


    }



}

function resetInimigo() {
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for (var i = 0; i < enemyOptions.length; i++) {

        enemyOptions[i].childNodes[0].style.opacity = 0.3;

    }
}

function inimigoJogar() {
    let rand = Math.floor(Math.random() * 3);

    const enemyOptions = document.querySelectorAll('.enemy-options div');
    resetInimigo();
    for (var i = 0; i < enemyOptions.length; i++) {
        if (i == rand) {
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }

    }


    validarVitoria();




}

function resetOpacityPlayer() {
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.opacity = 0.3;
    }
}

for (var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', function(t) {
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        inimigoJogar();

        // alert(playerOpt);
    });
}