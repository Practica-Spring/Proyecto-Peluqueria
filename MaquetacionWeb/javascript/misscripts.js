
let cantTareas = 1;

document.addEventListener('DOMContentLoaded', (event) => {
  // cargar los tooltips de Bootstrap
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  // crear tareas de prueba:
  const tarea1 = {
    id: 1,
    descripcion: 'Estudiar Programación'
  };

  const tarea2 = {
    id: 2,
    descripcion: 'Estudiar JavaScript',
  };

  cargarTareas(tarea1);
  cargarTareas(tarea2);
}
)

const nuevaTarea = () => {
  document.getElementById('descripcion').value = '';
  let tareaModal = new bootstrap.Modal(document.getElementById('tareaModal'), {});
  tareaModal.show();

}

/**
 * Saves a task by retrieving the description from an HTML element and calling the `cargarTareas` function with a new task.
 *
 * @param {string} descripcion - The description of the task.
 * @return {undefined} - This function does not return anything.
 */
const guardarTarea = () => {
  let descripcion = document.getElementById('descripcion').value;
  cargarTareas(newTarea(cantTareas, descripcion));
}

/**
 * Creates an object representing a task.
 *
 * @param {number} id - The unique identifier of the task.
 * @param {string} descripcion - The description of the task.
 * @return {object} - An object representing the task with the given id and description.
 */
const newTarea = (id, descripcion) => {
  return {
    id: id,
    descripcion: descripcion
  }
}

const cargarTareas = (tarea) => {

  // Crea un array tareas:
  const tareas = [];

  // Carga las tareas del localStorage:
  tareas.push(tarea);

  // Renderizar una fila por cada tarea en el array...
  tareas.map((item) => {

    // Bindings que almacenarán los elementos html de las listas:
    const ul = document.getElementsByTagName('ul')[0];
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const btnDel = document.createElement('button');
    const btnEdit = document.createElement('button');
    const icoEdi = document.createElement('i');
    const icoDel = document.createElement('i');

    // añadir los estilos y las propiedades:
    li.classList.add('list-group-item');

    // checkbox
    checkbox.type = 'checkbox';
    checkbox.className = 'form-check-input me-2';

    // boton de editar
    btnEdit.className = 'btn btn-sm btn-warning float-end';
    btnEdit.setAttribute('data-bs-toggle', 'tooltip');
    btnEdit.setAttribute('data-bs-placement', 'left');
    btnEdit.setAttribute('title', 'Editar');
    icoEdi.className = 'fa-solid fa-pen-to-square fa-flip';

    btnEdit.appendChild(icoEdi);

    // boton de borrar
    btnDel.className = 'btn btn-sm btn-danger float-end ms-2';
    btnDel.setAttribute('data-bs-toggle', 'tooltip');
    btnDel.setAttribute('data-bs-placement', 'top');
    btnDel.setAttribute('title', 'Borrar');
    icoDel.className = 'fa-solid fa-trash-can fa-bounce';

    btnDel.appendChild(icoDel);

    // contenido de la lista
    li.appendChild(checkbox);
    li.appendChild(btnDel);
    li.appendChild(btnEdit);
    // Usar Template Strings para concatenar
    // equivale a:
    // li.appendChild(document.createTextNode("${item.id}" + " - " + "${item.descripcion}"));
    li.appendChild(document.createTextNode(`${item.id} - ${item.descripcion}`));
    ul.appendChild(li);

    cantTareas++;

  });
}
