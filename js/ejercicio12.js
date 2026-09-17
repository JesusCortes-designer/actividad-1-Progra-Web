function convertir() {
    var campoPesos = document.getElementById("pesos");
    var resultado = document.getElementById("mensaje");

    if (!campoPesos.reportValidity()) {
        return;
    }  
    var dineroPesos = campoPesos.value;
    var dolares = dineroPesos*18.18;
    resultado.value = dolares.toFixed(2) + " Dolares";
}