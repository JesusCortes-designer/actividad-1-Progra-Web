function calcular() {
    var campoNumeros = document.getElementById("numeros");
    var numeroMayor = document.getElementById("numeroMayor");
    var numeroMenor = document.getElementById("numeroMenor");
    var promedio = document.getElementById("promedio");

    if (!campoNumeros.reportValidity()) {
        return;
    }  
    let cadena=campoNumeros.value;
    let arreglo= cadena.split(",");
    let numeros=arreglo.map(Number);

    let Rmaximo=Math.max(...numeros);
    let Rminimo=Math.min(...numeros);
    let suma = numeros.reduce((acc,valor) => acc + valor,0 );
    let Rpromedio = suma/numeros.length;

    numeroMayor.value = "El numero Mayor es " + Rmaximo;
    numeroMenor.value = "El numero menor es " +Rminimo;
    promedio.value = "El promedio es " + Rpromedio;
}