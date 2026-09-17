const manejarTareas = (() => {let tareas = [];

    const guardadas = localStorage.getItem("tareas");
    if (guardadas) {
        tareas = JSON.parse(guardadas);
    }

    function guardarEnStorage() {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    function agregar(texto) {
        tareas.push(texto);
        guardarEnStorage();
    }

    function eliminar(indice) {
        tareas.splice(indice, 1);
        guardarEnStorage();
    }

    function obtener() {
        return tareas;
    }

    return { agregar, eliminar, obtener };
})();

function renderizarTareas() {
    const lista = document.getElementById("listaTareas");
    const tareas = manejarTareas.obtener();
    lista.innerHTML = "";

    tareas.forEach((tarea, indice) => {
        const li = document.createElement("li");
        li.textContent = tarea;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.type = "button";
        btnEliminar.onclick = () => eliminarTarea(indice);

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

function agregarTarea() {
    const campoTarea = document.getElementById("nuevaTarea");
    const texto = campoTarea.value.trim();

    if (texto === "") {
        Swal.fire({ icon: 'warning', title: 'Campo vacío', text: 'Escribe una tarea antes de agregarla.' });
        return;
    }

    manejarTareas.agregar(texto);
    campoTarea.value = "";
    renderizarTareas();
}

function eliminarTarea(indice) {
    Swal.fire({
        title: '¿Eliminar esta tarea?',
        text: 'Esta acción no se puede deshacer.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            manejarTareas.eliminar(indice);
            renderizarTareas();
            Swal.fire({ icon: 'success', title: 'Tarea eliminada', timer: 1200, showConfirmButton: false });
        }
    });
}

renderizarTareas();