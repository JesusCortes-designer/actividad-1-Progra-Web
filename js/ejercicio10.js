function convertir() {
    var campoCelsius = document.getElementById("celsius");
    var resultado = document.getElementById("mensaje");

    if (!campoCelsius.reportValidity()) { //reportValidity() verifica que cumpla con las reglas, en este caso con required y pattern, para que coincida con el formato
        return;
    }
    var gradosCelcius = campoCelsius.value;
    var fahrenheit = (gradosCelcius * 9/5) + 32;
    resultado.value = fahrenheit.toFixed(1) + "°F";
}