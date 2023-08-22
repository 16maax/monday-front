function eliminarFila(button) {
  var fila = button.closest('tr');
  fila.remove();
  actualizarTotalAnticipo();
  actualizarTotalPesos();
  actualizarTotalDolares(); // Actualizar el total de anticipo al eliminar una fila
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
        <option value="#ff0000">Vencida</option> 
        <option value="#1eff00">Pagada</option> 
        <option value="#00beff">Cancelada</option>
        <option value="#ca00ff">Material Comprado</option>
        <option value="#c5c5c5">Deudores Diversos</option>
      </select>
    </td>
    <td contenteditable="true"></td>
    <td>
    <input type="number" class="form-control cantidad-pesos" oninput="actualizarTotalPesos()">
    </td>
    <td>
    <input type="number" class="form-control cantidad-dolares" oninput="actualizarTotalDolares()">
    </td>
    <td contenteditable="true" class="calendar-cell"></td>
    <td contenteditable="true"></td>
    <td>
    <input type="number" class="form-control cantidad-anticipo" oninput="actualizarTotalAnticipo()">
    </td>
    <td>
      <button onclick="eliminarFila(this)" class="btn btn-danger btn-sm"><i class="bi bi-trash3"></i></button>
    </td>
  `;

  tbody.appendChild(nuevaFila);
}

function estado(selectElement) {
  var selectedColor = selectElement.value;
  var cell = selectElement.parentElement;
  cell.style.backgroundColor = selectedColor;
}

function actualizarTotalAnticipo() {
  var totalAnticipo = 0;
  var cantidadAnticipos = document.querySelectorAll('.cantidad-anticipo');
  
  cantidadAnticipos.forEach(function(cantidadInput) {
    totalAnticipo += parseFloat(cantidadInput.value || 0);
  });

  // Actualizar el valor en la página
  document.getElementById('totalAnticipo').textContent = totalAnticipo;
}

function actualizarTotalPesos() {
  var totalPesos = 0;
  var cantidadPesos = document.querySelectorAll('.cantidad-pesos');

  cantidadPesos.forEach(function(cantInput) {
    totalPesos += parseFloat(cantInput.value || 0);
  });
  document.getElementById('totalPesos').textContent = totalPesos;
}

function actualizarTotalDolares(){
  var totalDolares = 0;
  var cantidadDolares = document.querySelectorAll('.cantidad-dolares');

  cantidadDolares.forEach(function(cantiInput) {
    totalDolares += parseFloat(cantiInput.value || 0);
  });
  document.getElementById('totalDolares').textContent = totalDolares;
}

var agregarBtn = document.getElementById('agregarFilaBtn');
agregarBtn.addEventListener('click', agregarFila);

$(document).ready(function() {
  // Agrega el DatePicker a las celdas editables
  $('td[contenteditable="true"]').datepicker({
      dateFormat: 'yy-mm-dd' // Formato de fecha, puedes ajustarlo
  });
});
