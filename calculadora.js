const numeros = document.querySelectorAll (".numero");
const operadores = document.querySelectorAll ("#operator");
const dobleColumna = document.getElementsByClassName ("col-2");
const divAnterior= document.getElementById ("valor_anterior");
const divActual = document.getElementById ("valor_actual");
const display = new Display(divActual, divAnterior);

numeros.forEach(boton => {
  boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML) )
});

Array.from(operadores).forEach(boton => {
  boton.addEventListener ("click", () => display.computar(boton.value) )
});

