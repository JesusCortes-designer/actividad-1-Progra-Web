let estudiantes=[];

function añadirEstudiante(){
    var campoNombreAlumno=document.getElementById("nombre");
    var campoCalificacion=document.getElementById("calificacion");
    if(!campoCalificacion.reportValidity() || !campoNombreAlumno.reportValidity()){
        return;
    }

    let Dnombre=campoNombreAlumno.value;
    let Dcalificacion=Number(campoCalificacion.value);
    let estudiante={nombre: Dnombre, calificacion: Dcalificacion}
    estudiantes.push(estudiante);

    campoNombreAlumno.value = "";
    campoCalificacion.value = "";
}
function hacerCalculos(){
    var campoPromedio=document.getElementById("PromedioTotal");
    var campoCalificacionAlta=document.getElementById("calificacionAlta");
    var campoCalificacionBaja=document.getElementById("calificacionBaja");

    if (estudiantes.length === 0) {
        alert("Agrega al menos un estudiante antes de calcular");
        return;
    }

    let promedio = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0) / estudiantes.length;
    let alumnoConCalificacionMaxima =   Math.max(...estudiantes.map(e =>e.calificacion));
    let alumnoConCalificacionMinima = Math.min(...estudiantes.map(e =>e.calificacion));

    let estudianteAlto = estudiantes.find(e => e.calificacion === alumnoConCalificacionMaxima);
    let estudianteBajo = estudiantes.find(e => e.calificacion === alumnoConCalificacionMinima);

    campoPromedio.value=promedio.toFixed(2);
    campoCalificacionAlta.value=estudianteAlto.nombre;
    campoCalificacionBaja.value=estudianteBajo.nombre;
}