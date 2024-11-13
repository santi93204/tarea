// Función para cargar y mostrar los horarios desde un archivo JSON
function cargarJSON() {
    fetch('datos.json')
        .then(response => response.json()) // Parsear el archivo JSON
        .then(data => {
            let horarios = data.horarios;
            let lista = '<ul>';
            horarios.forEach(horario => {
                lista += `<li>${horario.clase} - ${horario.dia} - ${horario.hora}</li>`;
            });
            lista += '</ul>';
            document.getElementById('horarios').innerHTML = lista;
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
}

// Llamar a la función cuando la página se cargue
window.onload = cargarJSON;
