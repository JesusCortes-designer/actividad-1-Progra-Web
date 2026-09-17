function convertir() {
    var campoKilometros = document.getElementById("kilometros");
    var resultado = document.getElementById("mensaje");

    if (!campoKilometros.reportValidity()) {
        return;
    }  
    var distanciaKilometros = campoKilometros.value;
    var millas = distanciaKilometros*0.621371;
    resultado.value = millas.toFixed(5) + " Millas";
}