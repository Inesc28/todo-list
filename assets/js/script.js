const listaDeTareas = document.querySelector("#list-tareas");
const tareaInput = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#agregarTarea");
const cuentaTareas = document.querySelector("#cuenta-tareas");
const cuentaCompletadas = document.querySelector("#cuenta-completadas");
let contadorID = 4;

const tareas = [
  { id: 1, descripcion: "Limpiar la casa", completado: false },
  { id: 2, descripcion: "Cocinar almuerzo", completado: false },
  { id: 3, descripcion: "Lavar la ropa", completado: false },
];

btnAgregar.addEventListener("click", () => {
  const tarea = tareaInput.value.trim();
  if(tarea !== "") {
    tareas.push({ id: contadorID++, descripcion: tarea, completado: false });
    tareaInput.value = "";
    renderList(tareas);
  } else {
    alert("No ha ingresado ninguna tarea");
  }
});

function renderList(tareas) {
  let html = "";
  for (let tarea of tareas) {
    html += `<tr>
               <td>${tarea.id}</td>
               <td style="color: ${tarea.completado ? "green" : "black"};">${tarea.descripcion}</td>
               <td><button class="btn-borrar" onclick=borrar(${tarea.id})>❌</button></td>
               <td><button class="btn-completar" onclick=marcarCompletada(${tarea.id})>✔️</button></td>
             </tr>`;
  }
  listaDeTareas.innerHTML = html;
  cuentaTareas.textContent = `Total de tareas: ${tareas.length}`;
  cuentaCompletadas.textContent = `Tareas completadas: ${tareas.filter((t) => t.completado).length}`;
}

function marcarCompletada(id) {
  const tarea = tareas.find((t) => t.id === id);
  if (tarea) {
    tarea.completado = !tarea.completado;
    renderList(tareas);
  }
}

function borrar(id) {
  const index = tareas.findIndex((ele) => ele.id == id);
  tareas.splice(index, 1);
  renderList(tareas);
}
