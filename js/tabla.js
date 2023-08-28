//funcion para agregra una nueva columna en la tabla
function eliminarFila(button) {
  var fila = button.closest('tr'); // Obtener la fila más cercana al botón
  fila.remove(); // Eliminar la fila
}

function agregarFila() {
  var tabla = document.querySelector('.table');
  var tbody = tabla.querySelector('tbody');

  var nuevaFila = document.createElement('tr');
  nuevaFila.innerHTML = `
    <th scope="row">${tbody.children.length + 1}</th>
    <td contenteditable="true"></td>
    <td>
      <select style="background-color: transparent; border: none;" onchange="estado(this)" class="form-select" aria-label="Default select example">
        <option value="#ff6b00">En Proceso</option> 
        <option value="#ff0000">Estancado</option> 
        <option value="#1eff00">Listo</option> 
        <option value="#00beff">No Comenzado</option>
      </select>
    </td>
    <td>
      <select style="background-color: transparent; border: none;" onchange="prioridad(this)" class="form-select" aria-label="Default select example">
        <option value="#FF0000">Alta</option> 
        <option value="#FFFF00">Media</option> 
        <option value="#036dff">Baja</option> 
      </select>
    </td>
    <td contenteditable="true"></td>
    <td>
      <button onclick="eliminarFila(this)" class="btn btn-danger btn-sm"><i class="bi bi-trash3"></i></button>
    </td>
  `;

  tbody.appendChild(nuevaFila);
}

var agregarBtn = document.getElementById('agregarFilaBtn');
agregarBtn.addEventListener('click', agregarFila);


//funcion para cambiar el color segun la prioridad
function prioridad(selectElement) {
  var selectedColor = selectElement.value;
  var cell = selectElement.parentElement;

  cell.style.backgroundColor = selectedColor;
}

function estado(selectElement) {
  var selectedColor = selectElement.value;
  var cell = selectElement.parentElement;

  cell.style.backgroundColor = selectedColor;
}

document.addEventListener('DOMContentLoaded', function() {
  const tituloPrincipalElement = document.getElementById('titulo-principal');

  // Obtener el nombre de usuario del localStorage
  const nombreUsuario = localStorage.getItem('nombreUsuario');

  // Verificar si hay un nombre de usuario en el localStorage
  if (nombreUsuario) {
    // Mostrar el nombre de usuario en el título
    tituloPrincipalElement.textContent = `Actividades de ${nombreUsuario}`;
  } else {
    // Si no hay nombre de usuario en el localStorage
    tituloPrincipalElement.textContent = 'Actividades';
  }
});

