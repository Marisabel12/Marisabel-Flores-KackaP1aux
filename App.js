import logo from './logo.svg';
import './App.css';

function App() {
 // 1. Realiza un script que pida la edad y si es mayor de 18 años indica que ya puede conducir
    var edad = 34;
    if (edad>18) {
      console.log("puede conducir");
    }else{
      console.log("no puede conducir")
    }

   //2. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un
  // «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
   /* var suma = 0;
    do{
      var numero= "hola";
      if(Number==numero){
        numero= Number;
        suma = suma+numero;
      }else{
        if(numero!= undefined){
          alert(numero + "no es un numero");
        }
      }
      }
    while(numero!= undefined);
    console.log(suma);  */

    //3. Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.
  /* var nombre1 = prompt("Nombre 1:");
    var edad1 = Number(prompt("Edad 1:"));
    var nombre2 = prompt("Nombre 2:");
    var edad2 = Number(prompt("Edad 2:"));
    var nombre3 = prompt("Nombre 3:");
    var edad3 = Number(prompt("Edad 3:"));
    var maximo = Math.max(edad1, edad2, edad3);

    if (maximo == edad1) {
        console.log("El mayor es: " + nombre1);
    }
    if (maximo == edad2) {
      console.log("El mayor es: " + nombre2);
    }
    if (maximo == edad3) {
      console.log("El mayor es: " + nombre3);
    }  */

    // 4. Genera 3 números aleatorios entre 1 y 99 pero que no se repita ninguno.
    var i = 0;
    var num;
    var uno = 0;
    var dos = 0;
    var tres = 0;
    do {
        num = Math.floor((Math.random() * 99) + 1);
        if ((num != uno) && (num != dos) && (num != 3)) {
            console.log(num + "<br>");
            i++;
            if (i == 1) {
                uno = num;
            }
            if (i == 2) {
                dos = num;
            }
            if (i == 3) {
                tres = num;
            }
        }
    } while (i < 3);
// 5. Realiza un script que cuente el número de vocales que tiene un texto.
/*var cadena = prompt("Introduce una cadena de texto:");
var numchar = cadena.length;    //Devuelve la longitud del string.
cadena = cadena.toUpperCase();  //Devuelve el string en mayúsculas.
var car;
var contador = 0;
var i;
for (i = 0; i < numchar; i++) {
    car = cadena.charAt(i);    //recupera el caracter i del string.
    if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
        contador++;
    }
}
console.log("Número de Vocales: " + contador + ".");*/

// 6. Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la
//cadena que se encuentra entre los paréntesis. Ejemplo: Si escribimoe el texto “Hola (que) tal” se mostrará
//“que”. Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo “(“pero no el signo “)” mostrará
//desde el primer paréntesis hasta el final.
     /*var cadena = prompt("Introduce un Texto que contenga paréntesis:");
    var numchar = cadena.length;
    var j;
    var car;
    var salida = "";
    var copiar = false;
        
	for (j = 0; j < numchar; j++) {
		car = cadena.charAt(j);    
		if (car == ")") {
            copiar = false;
        }
        if (copiar) {
            salida = salida + car;
        }
        if (car == "(") {
                copiar = true;
        }
    }
    console.log(salida);*/
// 7. Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá
//    mostrar “lat euq aloh”.
/*var cadena = prompt("Introduce un Texto:");
var numchar = cadena.length;
var j;
var car;
var salida = "";
for (j = 0; j < numchar; j++) {
    car = cadena.charAt(j);    //recupera el caracter i del string.
    salida = car + salida;
}
console.log(salida);*/

// 8. Realiza un script que muestre la serie de fibonacci hasta un número entre 1 y 100 pedido por teclado.
/*var numero = Number(prompt("Introduce un número entre 1 y 100"));
    if((numero >= 1) && (numero <= 100)) {
        var x = 0;
        var y = 1;
        var z;
        console.log(x + "<br>");
        for (i = 0; i < (numero-1); i++) {
            z = x + y;
            console.log(z + "<br>");
            y = x;
            x = z;
        }
    }
    else {
        alert("Número erróneo");
    }*/
  // 9.. Realiza un juego de Piedra Papel Tijera contra el Pc.
    //10. Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. Si no recibe el iva,
    //aplicará el 21 por ciento por defecto.
    /*function masIva(precio, iva){
      iva = iva || 21
      var coniva = (precio + precio*iva/100);
      return coniva;
    }
    var precio = Number(prompt("Introduce un precio"));
    var iva = Number(prompt("Introduce el iva"));
    if(iva > 0){
      var resultado = masIva(precio, iva);
    }
    else{
      var resultado = masIva(precio);
    }
    console.log("Precio sin iva: " + precio);
    console.log("<br>Precio más Iva: " + resultado);*/
//11. Crea una función validar() para validar la entrada de datos de un formulario
//a. Para evitar que se envíe un formulario varias veces conviene deshabilitar el botón de envío tras enviarlo
//una vez. Escribe un script para gestionar el envío del formulario:
       //b. Deshabilita el botón "Enviar"
       //c. Cambia el mensaje que muestra el botón de "Enviar" a "Enviando…"
       //d. Cuando se haya enviado genera una página nueva indicando que se ha enviado correctamente y
//muestra la información que se ha enviado



//12 .Realiza un script que muestre un reloj en pantalla con fecha y hora y que se actualice cada segundo. Función
//setTimeout().
/*function mueveReloj(){
  momentoActual = new Date()
  hora = momentoActual.getHours()
  minuto = momentoActual.getMinutes()
  segundo = momentoActual.getSeconds()

  horaImprimible = hora + " : " + minuto + " : " + segundo

  document.form_reloj.reloj.value = horaImprimible

  setTimeout("mueveReloj()",1000)
}
<body onload="mueveReloj()" >
<form name="form_reloj">
<input type="text" name="reloj" size="10" />
</form>
</body>*/

//13. Programa una función que dada una fecha valida determine cuantos años han pasado hasta el día de hoy
  }

export default App;
