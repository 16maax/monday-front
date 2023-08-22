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
          <option value="#00beff">Fondeo</option>
        </select>
      </td>
      <td>
      <input type="number" class="form-control cantidad-inversion" oninput="actualizarTotalInversion()">
      </td>
      <td>
      <input type="number" class="form-control cantidad-facturacion" oninput="actualizarTotalFacturacion()">
      </td>
      <td>
      <input type="number" class="form-control cantidad-propuesta" oninput="actualizarTotalPropuesta()">
      </td>
      <td>
        <button onclick="eliminarFila(this)" class="btn btn-danger btn-sm"><i class="bi bi-trash3"></i></button>
      </td>
    `;
  
    tbody.appendChild(nuevaFila);
  }
  
var agregarBtn = document.getElementById('agregarFilaBtn');
agregarBtn.addEventListener('click', agregarFila);
  
  
function estado(selectElement) {
  var selectedColor = selectElement.value;
  var cell = selectElement.parentElement;

  cell.style.backgroundColor = selectedColor;
}

function actualizarTotalInversion(){
    var totalInversion = 0;
    var cantidadInversion = document.querySelectorAll('.cantidad-inversion');

    cantidadInversion.forEach(function(caInput) {
        totalInversion += parseFloat(caInput.value || 0);
    });

    document.getElementById('totalInversion').textContent = totalInversion;
}

function actualizarTotalFacturacion() {
    var totalFacturacion = 0;
    var cantidadFacturacion = document.querySelectorAll('.cantidad-facturacion');

    cantidadFacturacion.forEach(function(canInput) {
        totalFacturacion += parseFloat(canInput.value || 0);
    });

    document.getElementById('totalFacturacion').textContent = totalFacturacion;
}

function actualizarTotalPropuesta() {
    var totalPropuesta = 0;
    var cantidadPropuesta = document.querySelectorAll('.cantidad-propuesta');

    cantidadPropuesta.forEach(function(cantiInput) {
        totalPropuesta += parseFloat(cantiInput.value || 0);
    });

    document.getElementById('totalPropuesta').textContent = totalPropuesta;
}