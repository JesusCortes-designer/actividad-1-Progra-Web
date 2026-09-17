

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

function calcularOperacion(operacion){
    var campoNumero1=document.getElementById("numero1");
    var campoNumero2=document.getElementById("numero2");
    var campoResultado = document.getElementById("resultado");

     if (campoNumero1.value.trim() === "" || campoNumero2.value.trim() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Campos vacíos',
            text: 'Debes llenar ambos campos antes de calcular.'
        });
        return;
    } 
    let numero1=Number(campoNumero1.value);
    let numero2=Number(campoNumero2.value);
     if (isNaN(numero1) || isNaN(numero2)) {
        Swal.fire({
            icon: 'error',
            title: 'Valor inválido',
            text: 'Ambos valores deben ser números válidos.'
        });
        return;
    }

    
    let resultado;
    switch(operacion){
        case "sumar":
            resultado= sumar(numero1,numero2);
            break;
        case "restar":
            resultado= restar(numero1,numero2);
            break;
        case "multiplicar":
            resultado= multiplicar(numero1,numero2);
            break;
        case "dividir":
            resultado= dividir(numero1,numero2);
            if (resultado === 'Error: División por cero') {
                Swal.fire({
                    icon: 'error',
                    title: 'División inválida',
                    text: 'No se puede dividir entre cero.'
                });
                campoResultado.value = "";
                return;
            }
            break;
        default:
            return;
    }

    campoResultado.value=resultado;
}