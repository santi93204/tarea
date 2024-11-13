// Función para cargar y mostrar los horarios desde un archivo XML
function cargarXML() {
    fetch('datos.xml')
        .then(response => response.text()) // Obtener el contenido del archivo como texto
        .then(data => {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(data, 'text/xml');
            let horarios = xmlDoc.getElementsByTagName('horario');
            
            let lista = '<ul>';
            for (let i = 0; i < horarios.length; i++) {
                let clase = horarios[i].getElementsByTagName('clase')[0].textContent;
                let dia = horarios[i].getElementsByTagName('dia')[0].textContent;
                let hora = horarios[i].getElementsByTagName('hora')[0].textContent;
                lista += `<li>${clase} - ${dia} - ${hora}</li>`;
            }
            lista += '</ul>';
            document.getElementById('horarios').innerHTML = lista;
        })
        .catch(error => console.error('Error al cargar el XML:', error));
}

// Llamar a la función cuando la página se cargue
window.onload = cargarXML;
