function mudarTexto() {
    document.getElementById("demo").innerHTML = "Texto alterado!";
}

function myalert(){
    alert("voce clicou nesse botão")
}
function tocaSomTheweeknd(){
    document.querySelector('#som_tecla_theweeknd').play();
}
document.querySelector('.tecla_theweeknd').onclick = tocaSomTheweeknd;
