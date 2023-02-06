

//Declaración de una función

/*

 Declaramos todos los pasos que la función va a hacer para realizarse.
 Esta declaración es previa a la ejecución, por lo tanto, declararla no implica
 que se tenga que ejecutar a no ser que se llame de forma voluntaria

 */


 //Ejemplo multilinea
//  const Multiplicar = (parametro1, parametro2) => {

//     return parametro1 * parametro2;

//  };


// //Ejemplo en una línea
//  const Multiplicar = (parametro1, parametro2) => parametro1 * parametro2;




//  //Ejecución de la función

// let resultado = Multiplicar(3,5);

// console.log(resultado);


//FUNCIÓN QUE LLAMA A OTRA FUNCIÓN..........

//Declaro la función saludar
// const Saludar = (nombre) => console.log(`Hola ${nombre}`);

// //Declaro la función para pedir el nombre
// const PideNombre = () => {

//     let pedimos = prompt("Dime un nombre");

//     //Una vez tengo el nombre que me han dado por prompt, el siguiente paso es 
//     //llamar a una función denominada Saludar, dándole el nombre que recogí antes como argumento
//     Saludar(pedimos);
// };

// //Ejecuto la función que pide el nombre...ese es el primer paso
// PideNombre();

// let david = {

//     edad: 27,
//     ciudad: "Valencia",
//     hobbie: "Programar",
//     videoconsolas : ["Nintendo DS", "Nintendo 3DS", "Ps2", "Ps3", "Ps4"],
//     mascotas : {
//         mascota1 : "Vanitas",
//         mascota2 : "Onix"
//     }

// }

// console.log(david);

// //Repaso de For in...

// for(let elemento in david){
//     console.log(david[elemento]);
// }

//For in es la única herramienta que puede recorrer un objeto de JS.


/*

Crea una aplicación que nos pida un número por prompt y con un método se lo
pasamos por parámetro para que nos indique si es o no un número primo, debe
devolver true si es primo sino false. Un número primo es aquel solo puede dividirse
entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin
embargo, 17 si es primo.


*/

const Primo = (numero) => {

    for (let i = 2; i < numero; i++) {
  
      if (numero % i === 0) {
        return false;
      }
  
    }
  
    //Esto es un if en una línea, SÓLO devolveremos número si es distinto de uno.
    return numero !== 1;
}

let numeroPedido = parseInt(prompt("Dime un número"));
let numerosPrimos = [];

for (let numero = 2; numero < numeroPedido; numero++) {

  if(Primo(numero)) {
    //Si la ejecución de la funcion llamada Primo pasándole el número devuelve true, es que
    //ese número es primo, en ese caso, lo guardaremos en nuestro array de numeros primos.
    numerosPrimos.push(numero);
  }
  
}

console.log(numerosPrimos);




