function calcular(event) {
    event.preventDefault();  
var n1 = document.querySelector("#nota1").value;
var n2 = document.querySelector("#nota2").value;
var n3 = document.querySelector("#nota3").value;
var n4 = document.querySelector("#nota4").value;
var n5 = document.querySelector("#nota5").value;

var respuesta = document.querySelector("#respuesta");

n1=parseInt(n1);
n2=parseInt(n2);
n3=parseInt(n3);
n4=parseInt(n4);
n5=parseInt(n5);

var suma = n1 + n2 + n3 + n4 + n5;
var cantidad = 5;
var promedio = suma / cantidad;
console.log(promedio)

if(promedio < 5){
    respuesta.innerHTML = `<h2>Promedio ` + promedio + `, BAJO, PERDISTE</h2>`;
}
if(promedio >= 5 && promedio < 7){
    respuesta.innerHTML = `<h2>Promedio ` + promedio + `, BASICO, PASASTE RASPANDO</h2>`;

}
if(promedio >= 7 && promedio < 8){
    respuesta.innerHTML = `<h2>Promedio ` + promedio + `, ALTO, PASASTE</h2>`;
}
if(promedio >= 8 && promedio < 10){
    respuesta.innerHTML = `<h2>Promedio ` + promedio + `, Superior, MUY BIEN</h2>`;
}
else if( isNaN(promedio) || promedio === " "){
    respuesta.innerHTML = `<h2>Ingresa las notas completas, rango de 01 - 10</h2>`;
}
}









// switch(promedio){

//     case promedio < 5:{
//         console.log("fds")
//         respuesta.innerHTML = `<h2>Promedio ` + promedio + `, BAJO, PERDISTE</h2>`;
//         break;
//     }
//     case promedio < 7:{
//         respuesta.innerHTML = `<h2>Promedio ` + promedio + `, BASICO, PASASTE RASPANDO</h2>`;
//         break;
//     }
//     case promedio < 9:{

//         respuesta.innerHTML = `<h2>Promedio ` + promedio + `, ALTO, PASASTE</h2>`;
//        break;
//     }
//     case promedio < 10:{

//         respuesta.innerHTML = `<h2>Promedio ` + promedio + `, Superior, MUY BIEN</h2>`;
//        break;
//     }
    
// }
