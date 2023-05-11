const pContador = document.querySelector ("#contador");

let contador = 0;

function aumentarNumero() {
    contador = contador + 1;
    pContador.innerHTML = contador;
}

function reiniciarNumero() {
    contador = 0;
    pContador.innerHTML = contador;
}

function reducirNumero() {
    contador = contador - 1;
    pContador.innerHTML = contador;
}