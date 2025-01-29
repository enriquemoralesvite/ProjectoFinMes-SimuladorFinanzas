let ingresos = 0;
let egresos = 0;

// Configuración inicial del gráfico
const ctx = document.getElementById('graficoFinanzas').getContext('2d');
const graficoFinanzas = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Ingresos', 'Egresos'],
        datasets: [{
            label: 'Finanzas',
            data: [ingresos, egresos],
            backgroundColor: ['#4caf50', '#f44336'],
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
    }
});

function agregarMovimientos() {
    // Obtener los valores de los campos de entrada
    let descripcion = document.getElementById('descripcion').value;
    let monto = parseFloat(document.getElementById('monto').value);
    let tipo = document.getElementById('tipo').value;

    // Validar que los campos no estén vacíos
    if (descripcion === "" || isNaN(monto)) {
        alert("Por favor, complete todos los campos");
        return;
    }

    // Actualizar los totales según el tipo
    if (tipo === "entrada") {
        ingresos += monto;
    } else if (tipo === "salida") {
        egresos += monto;
    }

    // Actualizar gráfico
    graficoFinanzas.data.datasets[0].data = [ingresos, egresos];
    graficoFinanzas.update();

    // Obtener la fecha actual
    let fecha = new Date().toLocaleDateString();

    // Crear una nueva fila tr
    let nuevaFila = document.createElement("tr");

    // Crear y agregar celdas td a la fila
    let celdaDescripcion = document.createElement("td");
    celdaDescripcion.textContent = descripcion;
    nuevaFila.appendChild(celdaDescripcion);

    let celdaMonto = document.createElement("td");
    celdaMonto.textContent = `S/. ${monto.toFixed(2)}`;
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
    botonEliminar.onclick = function () {
        // Restar del total antes de eliminar
        if (tipo === "entrada") {
            ingresos -= monto;
        } else if (tipo === "salida") {
            egresos -= monto;
        }
        graficoFinanzas.data.datasets[0].data = [ingresos, egresos];
        graficoFinanzas.update();

        nuevaFila.remove();
    };
    celdaAccion.appendChild(botonEliminar);
    nuevaFila.appendChild(celdaAccion);

    // Agregar la nueva fila a la tabla
    document.getElementById("tablaMovimientos").appendChild(nuevaFila);

    // Limpiar los campos del formulario
    document.getElementById("formularioFinanzas").reset();
}
