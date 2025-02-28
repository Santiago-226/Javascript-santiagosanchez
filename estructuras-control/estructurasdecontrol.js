/*
//ESTRUCTURAS DE CONTROL

//EJEMPLO IF: DECLARAR DOS VARIABLES "NOMBRE" Y "EDAD", SI EDAD ES MENOR QUE 18 MOSTRAR ERES MENOR DE EDAD Y SI EDAD ES MAYOR O IGUAL A 18 MOSTRAR ERES MENOR DE EDAD.

let nombre = prompt("INGRESA TU NOMBRE");
let edad = parseInt(prompt("INGRESA TU EDAD"));

if (edad <= 18){
    alert (`${nombre}, ERES JOVEN`)
}else if(edad <= 40){
    alert (`${nombre}, ERES UN ADULTO`)
}else if(edad <= 60){
    alert (`${nombre}, ERES UN MADURO`)
}else if(edad >= 61){
    alert (`${nombre}, ERES UN ANCIANO`)
};


//EJEMPLO WHILE: DECLARAR UNA VARIABLE NUMERICA QUE MUESTRE LA CUENTA REGRESIVA A LLEGAR A CERO

let cuentaAtras = parseInt(prompt("INGRESE UN NUMERO"));

while (cuentaAtras > 0){
    alert(cuentaAtras);
    cuentaAtras = cuentaAtras --
    
      // si la cuenta atrás es 5, salimos del bucle
  if (cuentaAtras === 5) {
    break // <---- salimos del bucle
  }  
};

const NUMERO_REVISIONES = 3
let cuentaAtras = 10

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás
  alert(cuentaAtras)

  // creamos una variable para contar las revisiones realizadas
  // y la inicializamos a cero
  let revisionesRealizadas = 0

  // hasta que no hayamos realizado las 3 revisiones...
  while (revisionesRealizadas < NUMERO_REVISIONES) {
    // y sumamos 1 a las revisiones realizadas
    revisionesRealizadas = revisionesRealizadas + 1
    alert(revisionesRealizadas + ' revisiones realizadas...')
  }

  // ahora podemos restar 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
}

let drinkCoffee = 0

while (drinkCoffee < 10) {
  drinkCoffee = drinkCoffee + 1
  
  if (drinkCoffee === 8) { break }
  if (drinkCoffee === 5) { continue }

  alert('Café')
} 

// TABLAS DE MULTIPLICAR

let numIngresado = prompt("INGRESE UN NUMERO");

for (let number = 1; number <= 10; number++) {
    
    console.log(numIngresado, '*', number, "=", numIngresado*number);

}


//IMPRIME EN CONSOLA 

let passwordCorrecta = "1234";
let usuario = prompt("ingrese su nombre");
let passwordIngresada = prompt("ingrese su contraseña");

if (passwordIngresada === passwordCorrecta){
  console.log(usuario, "HAS INICIADO CORRECTAMENTE");
}else{
  console.log(usuario, "ERROR! CONTRSEÑA INCORRECTA");
}


//SWITCH - CASE

//Ejemplo 1: Realizar un programa que determine que dia de la semana es utilizando la funcion prompt

const dia = new Date().getDay();

// segun el dia de la semana, mostramos un mensaje diferente
switch (dia) {
  case 0:
    console.log("¡Hoy es domingo! 😴")
    break
  case 1:
    console.log("¡Nooo, es lunes! 😢")
    break
  case 2:
    console.log("¡Hoy es martes! 🥵")
    break
  case 3:
    console.log("¡Hoy es miércoles! 🤓")
    break
  case 4:
    console.log("¡Hoy es jueves! 😮")
    break
  case 5:
    console.log("¡Hoy es viernes! 👻")
    break
  case 6:
    console.log("¡Hoy es sábado! 🤩")
    break
  default:
    console.log("No coincide con nigún día❗")
    break
}


*/

//Ejercicios - Estructuras de control en JavaScript

// ACTIVIDAD 2
let nota1 = parseFloat(prompt("INGRESE LA PRIMERA NOTA"));
let nota2 = parseFloat(prompt("INGRESE LA SEGUNDA NOTA"));
let nota3 = parseFloat(prompt("INGRESE LA TERCERA NOTA"));

let notaPromedio= (nota1 + nota2 + nota3)/3;

if(notaPromedio >= 6){
  alert("APROBASTE EL CURSO")
}else{
  alert("REPROBASTE EL CURSO")
}

/*3


//ACTIVIDAD 4
let num1 = parseInt(prompt("INGRESE EL PRIMER NUMERO"));
let num2 = parseInt(prompt("INGRESE EL SEGUNDO NUMERO"));

if (num1 > num2){
  alert(num2 + " --> "+ num1)
}else if(num1 < num2){
  alert(num1 + " --> "+ num2);
}else if (num1 === num2){
  alert("Los dos numeros ingresados son iguales ❗")
}


//ACTIVIDAD 6
let numElegido= parseInt(prompt("INGRESE UN NUMERO ENTRE 1 y 7"));

switch(numElegido){
  case 1:
    alert("TE HA TOCADO EL DIA LUNES")
    break

  case 2:
    alert("TE HA TOCADO EL DIA MARTES")
    break

  case 3:
    alert("TE HA TOCADO EL DIA MIERCOLES")
    break
  
  case 4: 
    alert("TE HA TOCADO EL DIA JUEVES")
    break

  case 5:
    alert("TE HA TOCADO EL DIA VIERNES")
    break

  case 6:
    alert("TE HA TOCADO EL DIA SABADO")
    break

  case 7: 
    alert("TE HA TOCADO EL DIA DOMINGO")
    break

  default:
    alert("ERROR❗ESCRIBIO UN NUMERO FUERA DEL RANGO. ESCRIBA UN NÚMERO ENTRE 1 Y 7")
    break
}

//ACTIVIDAD 8
let horasTrabajadas= parseInt(prompt("INGRESA LA CANTIDAD DE HORAS TRABAJADAS"));

if(horasTrabajadas <=40){
  let salarioSemanal = horasTrabajadas * 16000;
  alert("ESTA SEMANA GANASTE $" + salarioSemanal)
}else{
  let salarioSemanal = horasTrabajadas * 20000;
  alert("ESTA SEMANA GANASTE $" + salarioSemanal)
}


//ACTIVIDAD 10
let cantidadCamisas = parseInt(prompt("¿CUANTAS CAMISAS COMPRASTE"));
let valorTotal = 0;

for(i= 0; i < cantidadCamisas; i++){
  let valorPrenda = parseInt(prompt("INGRESA EL VALOR DE LA PRENDA "+ (i+1)));
  if(!isNaN(valorPrenda)){
    valorTotal += valorPrenda;
  }
}

if(cantidadCamisas >= 3){
  let valorPagar = valorTotal * 0.8;
  console.log("El valor a pagar es: $" + valorPagar)
}else if(cantidadCamisas<3){
  let valorPagar = valorTotal * 0.9;
  console.log("El valor a pagar es: $" + valorPagar)
}

//ACTIVIDAD 12 
//YA SE HABIA HECHO


//ACTIVIDAD 14
const peso = parseFloat(prompt("INGRESE SU PESO KILOGRAMOS"));
const estatura = parseFloat(prompt("INGRESE SU ESTATURA EN METROS"));

let indice = peso / (estatura**2)

switch(true){
  case(indice < 18.5):
  alert("ESTAS BAJO DE PESO")
  break

  case (indice >= 18.5 && indice < 25):
    alert("ESTAS EN UN PESO NORMAL")
  break

  case (indice >= 25):
    alert("ESTAS EN SOBREPESO")
  break
}

//ACTIVIDAD 16
let notafinal = parseFloat(prompt("INGRESA TU NOTA FINAL"));

if(notafinal >= 1 && notafinal <= 3.3){
  alert("TUVISTE UN DESEMPEÑO BAJO")
}else if(notafinal >= 3.4 && notafinal <= 3.8 ){
  alert("TUVISTE UN DESEMPEÑO BASICO")
}else if(notafinal >= 3.9 && notafinal <= 4.4){
  alert("TUVISTE UN DESEMPEÑO ALTO")
}else if(notafinal >= 4.5 && notafinal <= 5.0){
  alert("TUVISTE UN DESEMPEÑO SUPERIOR")
}else{
  alert("ERROR ❗ INGRESE UNA NOTA VALIDA")
}



//ACTIVIDAD 18
let numbreIngesado = parseInt(prompt("INGRE UN NUMERO"));

if(numbreIngesado < 10){
  alert("EL NUMERO INGRESADO ES MENOR QUE 10")
}else if (numbreIngesado >= 10 && numbreIngesado <= 20){
  alert("EL NUMERO INGRESADO ESTA ENTRE 10 Y 20")
}else{
  alert("EL NUMERO ES MAYOR QUE 20")



//ACTIVIDAD 20
let nombre = prompt("INGRESA TU NOMBRE");
let edad = parseInt(prompt("INGRESA TU EDAD"));
let esMasculino = confirm("¿Eres hombre? (Aceptar = Sí, Cancelar = No)");
let genero = esMasculino ? "Masculino" : "Femenino";

if (edad >= 18 && genero === "Masculino"){
  alert("ERES APTO PARA PRESTAR EL SERVICIO MILITAR")
}else{
  alert("NO ERES APTO PARA PRESTAR EL SERVICIO MILITAR")
}}
*/

