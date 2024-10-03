let valorActual = "";
let valorAnterior = "";
let operacionActual = "";
let resultado = 0;


let display = document.getElementById("display");
let botones = document.querySelectorAll(".numero");
let buttonSuma = document.getElementById("buttonSuma");
let buttonRestar = document.getElementById("buttonRestar");
let buttonMultiplicar = document.getElementById("buttonMultiplicar");
let buttonDividir = document.getElementById("buttonDividir");
let ac = document.getElementById("ac");
let borrar = document.getElementById("borrar");
let porcentaje = document.getElementById("porcentaje");
let igual = document.getElementById("igual");
let punto = document.getElementById("punto");


botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    
    if (operacionActual === "") {
      valorActual += boton.innerText; // Concatenar números
    } else {
      
      valorActual += boton.innerText;
    }
    display.value = valorActual; 
  });
});


function seleccionarOperacion(operacion) {
  if (valorActual === "") return;
  if (valorAnterior !== "") {
    calcular(); 
  }
  operacionActual = operacion;
  valorAnterior = valorActual;
  valorActual = "";
}

function calcular() {
  let numAnterior = parseFloat(valorAnterior);
  let numActual = parseFloat(valorActual);

  if (isNaN(numAnterior) || isNaN(numActual)) return;
  
  switch (operacionActual) {
    case "+":
      resultado = numAnterior + numActual;
      break;
    case "-":
      resultado = numAnterior - numActual;
      break;
    case "*":
      resultado = numAnterior * numActual;
      break;
    case "/":
      resultado = numAnterior / numActual;
      break;
    default:
      return;
  }
  console.log(numAnterior + "" + numActual);
  display.value = resultado;
  valorAnterior = resultado; 
  operacionActual = "";
  valorActual = "";
}


buttonSuma.addEventListener("click", () => seleccionarOperacion("+"));
buttonRestar.addEventListener("click", () => seleccionarOperacion("-"));
buttonMultiplicar.addEventListener("click", () => seleccionarOperacion("*"));
buttonDividir.addEventListener("click", () => seleccionarOperacion("/"));


igual.addEventListener("click", () => {
  calcular();
});


ac.addEventListener("click", () => {
  valorActual = "";
  valorAnterior = "";
  operacionActual = "";
  display.value = "";
});


borrar.addEventListener("click", () => {
  valorActual = valorActual.slice(0, -1); 
  display.value = valorActual;
});

// Botón de porcentaje
porcentaje.addEventListener("click", () => {
  if (valorActual !== "") {
    valorActual = (parseFloat(valorActual) / 100).toString();
    display.value = valorActual;
  }
});

// Botón para el punto decimal
punto.addEventListener("click", () => {
  if (!valorActual.includes(".")) {
    valorActual += ".";
    display.value = valorActual;
  }
});
