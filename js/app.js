// Se guardan referencias a los 3 elementos del HTML que se van a usar
// repetidamente, para no tener que buscarlos de nuevo cada vez
const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

// Esta función se va a ejecutar cada vez que el usuario presione "Agregar"
function agregarElemento() {
    //recordatorio const no se el puede cambiar el valor, es una constante
    const texto = input.value.trim();

    if (texto !== '') {

        // Se crea un <li> nuevo, que todavía no existe en la página
        // (existe solo en memoria hasta que se agregue con appendChild)
        const li = document.createElement('li');

        // classList.add() le pone varias clases de Bootstrap a la vez:
        // list-group-item da el estilo de fila de lista, y las de
        // flexbox alinean el texto a la izquierda y el botón a la derecha
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        // Se crea un nodo de texto puro con lo que escribió el usuario,
        // y se mete dentro del li como su contenido visible
        const textoNodo = document.createTextNode(texto);
        li.appendChild(textoNodo);

        // Se crea el botón de eliminar y se le da estilo con clases de Bootstrap
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-sm', 'btn-danger');

        // CLOSURE: esta función "recuerda" a cuál li específico pertenece,
        // por eso cada botón elimina SOLO su propia tarea, no todas
        botonEliminar.addEventListener('click', function () {
            li.remove(); // borra este <li> completo de la página
        });

        // Se ensambla todo: primero el botón dentro del li,
        // luego el li completo dentro de la lista visible
        li.appendChild(botonEliminar);
        lista.appendChild(li);

        // Se limpia el input para que el usuario pueda seguir escribiendo
        input.value = '';

    } else {
        // Si el campo estaba vacío, no se crea nada, solo se avisa
        alert('Escribe algo para agregar a la lista.');
    }
}

// Esta línea es la que realmente CONECTA el botón con la función de arriba:
// sin esto, agregarElemento() existiría pero nunca se ejecutaría
botonAgregar.addEventListener('click', agregarElemento);