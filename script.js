/*EJERCICIO 1

let nombre = 'Santiago';
let edad = 18;
let ciudad = "Gigante";

console.log ("Hola yo soy",nombre,"tengo",edad,"y vivo en",ciudad);

// Crea una variable precio y asignale un valor decimal,luego, 
//crea una variable llamada cantidad y asignale un valor entero.
//Muestra el tipo de dato de cada variable en la consola

let precio = 0.25;
let cantidad = 4;

//imprime en la consola
console.log('El tipo de dato de la variable precio es', typeof precio, 'y el tipo de dato de la variable cantidad es', typeof cantidad);

//imprime en el navegador
document.write('El tipo de dato de la variable precio es', typeof precio, 'y el tipo de dato de la variable cantidad es', typeof cantidad);

//imprime en una alerta
alert ('El tipo de dato de la variable precio es', typeof precio, 'y el tipo de dato de la variable cantidad es', typeof cantidad);*/



//ACTIVIDAD EJERCICIOS EN JAVASCRIPT

//ACTIVIDAD 1

    // Obtener el formulario
    const formulario1 = document.getElementById("Form1");

     // Obtener el párrafo donde se mostrará el resultado
     const valorPagar = document.getElementById("valorFinal");

    formulario1.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Capturar los valores de los campos
        const valorProducto = document.getElementById("valorProducto").value;

        //Calcular precio final con el descuento
        let valorFinal = valorProducto * 0.75;
        
        // Mostrar los datos en consola (puedes procesarlos como quieras)
        console.log("valor del producto:", valorProducto);
        console.log("valor final:", valorFinal);

         // Mostrar el resultado en la página
         valorPagar.textContent = `Total a pagar: $${valorFinal.toFixed(2)}`;
    });



//ACTIVIDAD 2

     // Obtener el formulario
     const formulario2 = document.getElementById("Form2");

     // Obtener el párrafo donde se mostrará el resultado
     const ganancias = document.getElementById("ganancias");

     formulario2.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Capturar los valores de los campos
        const Inversion = document.getElementById("capitalInvertir").value;
        const Meses = document.getElementById("mesesInteres").value;

        //Calcular precio las ganancias
        let Ganancias = (Inversion * 0.02)*Meses;
        
        // Mostrar los datos en consola (puedes procesarlos como quieras)
        console.log("inversion:", Inversion);
        console.log("meses:", Meses);
        console.log("ganacia:", Ganancias);

         // Mostrar el resultado en la página
         ganancias.textContent = `Ganancias: $${Ganancias.toFixed(2)}`;
    });


//ACTIVIDAD 3

     // Obtener el formulario
     const formulario3 = document.getElementById("Form3");

     // Obtener el párrafo donde se mostrará el resultado
     const notaFinal = document.getElementById("notaFinal");

     formulario3.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Capturar los valores de los campos
        const nota1 = parseFloat(document.getElementById("nota1").value);
        const nota2 = parseFloat(document.getElementById("nota2").value);
        const nota3 = parseFloat(document.getElementById("nota3").value);
        const examenFinal = parseFloat(document.getElementById("examenFinal").value);
        const trabajoFinal = parseFloat(document.getElementById("trabajoFinal").value);

        // Cálculo del promedio de los parciales (55%)
        let promedioParciales = (nota1 + nota2 + nota3) / 3;

        // Cálculo de la calificación final
        let calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);

         // Mostrar el resultado en la página
         notaFinal.textContent = `Calificación: ${calificacionFinal.toFixed(1)}`;
    });
     


//ACTIVIDAD 4

// Obtener el formulario
const formulario4 = document.getElementById("Form4");

// Obtener el párrafo donde se mostrará el resultado
const valorVenta = document.getElementById("valorVenta");

formulario4.addEventListener("submit", function (event){
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Capturar los valores de los campos
    const valorOriginal = parseFloat(document.getElementById("valorOriginal").value);

    // Calcular el precio de venta
    let precioVenta = valorOriginal + (valorOriginal*0.3);

    // Mostrar el resultado en la página
    valorVenta.textContent = `Precio de venta: $${precioVenta.toFixed(2)}`;
    
});


//ACTIVIDAD 5

// Obtener el formulario
const formulario5 = document.getElementById("Form5");

// Obtener el párrafo donde se mostrará el resultado
const valorCarrera = document.getElementById("valorCarrera");

formulario5.addEventListener("submit",function(event){
    event.preventDefault();// Evitar el envío del formulario por defecto

    //Captura los valores de los campos
    const distancia = parseFloat(document.getElementById("distancia").value);
    const tiempo = parseFloat(document.getElementById("tiempo").value);

    //Calcular el valor de la carrera
    let precioCarrera = (distancia * 15000) + (tiempo * 2000);

    // Mostrar el resultado en la página
    valorCarrera.textContent = `Valor de la carrera: $${precioCarrera}`;
})


//ACTIVIDAD 6

// Obtener el formulario
const formulario6 = document.getElementById("Form6");

// Obtener el párrafo donde se mostrará el resultado
const resultadoCuadrados = document.getElementById("resultadoCuadrados");

formulario6.addEventListener("submit", function (event){
    event.preventDefault();// Evitar el envío del formulario por defecto

    // Capturar los valores de los campos y convertirlos a número
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const numero3 = parseFloat(document.getElementById("numero3").value);

    //Calcular los cuadrados
    let numeros = [numero1,numero2,numero3];
    let cuadrados = numeros.map(num => num ** 2);


    // Mostrar los resultados en la página
    resultadoCuadrados.textContent = `${cuadrados.join(" -- ")}`
})


//ACTIVIDAD 7

//Obtener el formulario
const formulario7 = document.getElementById("Form7");

//Obtener los parrafos donde se van a mostrar los resulados
const Ginecologia = document.getElementById("Ginecologia");
const Traumatologia = document.getElementById("Traumatologia");
const Pediatria = document.getElementById("Pediatria");

formulario7.addEventListener("submit", function (event){
    event.preventDefault();

    //Capturar el campo
    const montoPresupuestal = parseFloat(document.getElementById("montoPresupuestal").value);

    //Calcular monto para cada especialidad
    let montoGinecologia = montoPresupuestal * 0.4;
    let montoTraumatologia = montoPresupuestal * 0.3;
    let montoPediatria = montoPresupuestal * 0.3;

    // Mostrar los resultados en la página
    Ginecologia.textContent = `Presupuesto Ginecología: $${montoGinecologia.toFixed(1)}`;
    Traumatologia.textContent = `Presupuesto Traumatología: $${montoTraumatologia.toFixed(1)}`;
    Pediatria.textContent = `Presupuesto Pediatría: $${montoPediatria.toFixed(1)}`;

});


//ACTIVIDAD 9

//Obtener el formulario
const formulario9 = document.getElementById("Form9");

//Obtener los span donde va a ir el porcentaje
const porcentaje1 = document.getElementById("porcentaje1");
const porcentaje2 = document.getElementById("porcentaje2");
const porcentaje3 = document.getElementById("porcentaje3");

formulario9.addEventListener("submit", function(event){
    event.preventDefault();

    //Capturar los datos de los formulario
    const montoInversion1 = parseFloat(document.getElementById("inversor1").value);
    const montoInversion2 = parseFloat(document.getElementById("inversor2").value);
    const montoInversion3 = parseFloat(document.getElementById("inversor3").value);

    //Calcular monto total de inversion y los porcentajes de cada inversor
    let totalInversion = montoInversion1 + montoInversion2 + montoInversion3;

    let porcentajeInversor1 = (montoInversion1 * 100)/totalInversion;
    let porcentajeInversor2 = (montoInversion2 * 100)/totalInversion;
    let porcentajeInversor3 = (montoInversion3 * 100)/totalInversion;

    // Mostrar los resultados en la página
    porcentaje1.textContent= `==> ${porcentajeInversor1.toFixed(2)}%`;
    porcentaje2.textContent= `==> ${porcentajeInversor2.toFixed(2)}%`;
    porcentaje3.textContent= `==> ${porcentajeInversor3.toFixed(2)}%`;
});




