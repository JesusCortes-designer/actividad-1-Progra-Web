function calcular() {
    var campoEdad = document.getElementById("edad");
    var resultado = document.getElementById("mensaje");

    if (!campoEdad.reportValidity()) {
        return;
    }  
    var edad = campoEdad.value; 
    var mensajeMostrar;

    if(edad >= 18){
        mensajeMostrar= "Puedes votar";
    }
    else{
        mensajeMostrar= "No puedes votar";
    }

    resultado.value = mensajeMostrar;
}