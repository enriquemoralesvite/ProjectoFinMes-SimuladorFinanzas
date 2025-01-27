function agregarMovimientos() {

    // Obtener los valores de los campos de entrada
    let descripcion = document.getElementById('descripcion').value;
    let monto = document.getElementById('monto').value;
    let tipo = document.getElementById('tipo').value;
  
    // Validar que los campos no estén vacíos
    if (descripcion === "" || monto === "") {
        alert("Por favor, complete todos los campos");
        return;
    }
  
    // Obtener la fecha actual
    let fecha = new Date().toLocaleDateString();
  
    // Crear una nueva fila tr
    let nuevaFila = document.createElement("tr");
  
    // Crear y agregar celdas td a la fila
    let celdaDescripcion = document.createElement("td");
    celdaDescripcion.textContent = descripcion;
    nuevaFila.appendChild(celdaDescripcion);
  
    let celdaMonto = document.createElement("td");
    celdaMonto.textContent = `S/. ${monto}`;
    nuevaFila.appendChild(celdaMonto);
  
    let celdaFecha = document.createElement("td");
    celdaFecha.textContent = fecha;
    nuevaFila.appendChild(celdaFecha);
  
    let celdaTipo = document.createElement("td");
    celdaTipo.textContent = tipo;
    nuevaFila.appendChild(celdaTipo);
  
    let celdaAccion = document.createElement("td");
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() {
        nuevaFila.remove();
    };
    celdaAccion.appendChild(botonEliminar);
    nuevaFila.appendChild(celdaAccion);
  
    // Agregar la nueva fila a la tabla
    document.getElementById("tablaMovimientos").appendChild(nuevaFila);
  
    // Limpiar los campos del formulario
    document.getElementById("formularioFinanzas").reset();
  }