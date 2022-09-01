
// Se muestra promt 5 veces que pide nombre y numero de respuestas correctas
for( let i=0; i<5; i++){
    let nombreEstudiantes= prompt("Escribe el nombre del estudiante");
    let nombreEstudiantesTotal= nombreEstudiantes;
    numeroRespuestasCorrectas= Number(prompt("Ingresa numero respuestas correctas de 1 a 10"));
    // comparar el numero de respuestas correctas y mostrar en pantalla quienes ganaron y quienes perdieron
    if(numeroRespuestasCorrectas < 6){
        document.write(`El estudiante ${nombreEstudiantesTotal}, perdio el examen. <br>`)
    }
    else{
    document.write(`El estudiante ${nombreEstudiantesTotal}, gano el examen. <br>`)
    }
}



