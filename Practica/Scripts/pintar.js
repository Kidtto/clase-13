'use strict';
const cardsEstudiantes = document.querySelector("cardsEstudiantes");
const estudiante= [];
const pintarcard =(tipo) =>{
    tipo = tipo.toUpperCase();
    const fragmento = document.createDocumentFragment();
    const templateestudiante = document.querySelector("#templateEstudiante").content;
    if ( tipo === "ESTUDIANTE"){
        for(let i of estudiante){
        }
    }

}
const agregarEstudiante = (name,lastName,avg)=>{
    let persona = {
        nombre: name,
        apellido: lastName,
        promedio: avg
    };
    Estudiante.push(persona);
}