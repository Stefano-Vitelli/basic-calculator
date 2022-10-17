class Display 
{
  constructor (divAnterior, divActual) {
  this.divAnterior= divAnterior;
  this.divActual = divActual;
  this.tipoOperacion = undefined;
  this.calculador = new Calculadora ();  // estamos instanciando la new calculadora para que tenga las funciones disponibles
  this.valorAnterior = "";  // esto no es lo mismo que divAnterior, esto es el valor-numero que guardaremos.
  this.valorActual = ""; //esto no es lo mismo que divActual, esto es el valor-numero que guardaremos.
    this.signos =
      {
        sumar: "+",
        restar: "-",
        dividir: "/",
        multiplicar: "x"
      }
  }

  borrarNumeros () {
  this.valorActual = this.valorActual.toString().slice(0, -1);
  this.imprimirValores();
  }

  borrarTodo() {
  this.valorActual = "";
  this.valorAnterior = "";
  this.tipoOperacion= undefined;
  this.imprimirValores();
  }
     
  computar (tipo) {
  this.tipoOperacion !== "igual" && this.calcular();
  this.tipoOperacion = tipo;
  this.valorAnterior = this.valorActual || this.valorAnterior;
  this.valorActual = "";
  this.imprimirValores();
  }


  agregarNumero (numero) {
  if (numero === "." && this.valorActual.includes (".") ) return  //condicion para que no se muestre mas de un "." en la calculadora 
  this.valorActual = this.valorActual.toString() + numero.toString();
  this.imprimirValores();
  }


  imprimirValores() 
  {
  this.divActual.textContent = this.valorActual;
  this.divAnterior.textContent = `${this.valorAnterior} ${this.signos [this.tipoOperacion] || "" }`
  }

  calcular () {
  const valorAnterior = parseFloat (this.valorAnterior);
  const valorActual = parseFloat (this.valorActual);

  if ( isNaN(valorActual) || isNaN(valorAnterior)) 
  return this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
  }
}
