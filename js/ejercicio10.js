function convertir() {
    var gradosCelcius = document.getElementById("celsius").value;
    var resultado = document.getElementById("mensaje");
    var fahrenheit = (gradosCelcius * 9/5) + 32;
    resultado.value = fahrenheit.toFixed(1) + "°F";
}