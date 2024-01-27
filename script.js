import { barcelona, roma, paris, londres } from "./ciudades.js";
//obtener elementos del DOM

let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subTituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento =document.getElementById('precio')

//agregar evento click a cada enlace con forEach

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    //remover la clase "active" de todos los enlaces
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });
    //agregar la clase Active al enlace actual
    this.classList.add("active");
    //Obtener contenido correspondiente segun el enlace
    let contenido = obtenerContenido(this.textContent);
    tituloElemento.innerHTML = contenido.titulo
    subTituloElemento.innerHTML = contenido.subtitulo
    parrafoElemento.innerHTML = contenido.parrafo
    precioElemento.innerHTML= `Precio  ${contenido.precio} USD`
    
    

  })
  //agregar el activo al que corresponda

  //traer informacion del objeto correspondiente a la eleccion

  //mostrar el contenido en el DOM
});

//funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace) {
  let contenido = {
    'Barcelona': barcelona,
    'Roma': roma,
    'París': paris,
    'Londres': londres,
    'precio':precio
  };
  return contenido[enlace];
}
