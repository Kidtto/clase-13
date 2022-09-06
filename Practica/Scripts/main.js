'use strict'
import{ validateString, validateAvarage } from"./valedate.js";
const btnAgregar = document.querySelector("#btn");
const btnMostra = document.querySelector("#btnMostrar");

// propiedad y con .addEventeListener
btnAgregar.addEventListener("click",() => {
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const promedio = document.querySelector("#promedio").value;
    const opcion = document.querySelector("#opcion").value;
     

    if(validateString(nombre)&&validateString(apellido) && opcion !="0"){
        if (!isNaN(parseFloat(promedio)) && (validateAvarage(promedio))){
            agregarEstudiante(nombre, apellido, promedio);
        }else{
            console.log("Error promedio");
        }
    }else{
        console.log("Error de datos");
    }
}); 