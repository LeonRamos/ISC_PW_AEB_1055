document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener referencias a los elementos del DOM
    const botonCargar = document.getElementById('cargarDatos');
    const contenedorDatos = document.getElementById('datos-api');
    
    // URL de la API de ejemplo para obtener usuarios
    const API_URL = 'https://jsonplaceholder.typicode.com/users';

    // 2. Función para realizar la llamada a la API
    async function cargarUsuarios() {
        contenedorDatos.innerHTML = '<p>Cargando datos...</p>'; // Mensaje de carga

        try {
            // Realizar la petición GET a la API usando fetch
            const respuesta = await fetch(API_URL);

            // Verificar si la respuesta fue exitosa (código 200-299)
            if (!respuesta.ok) {
                // Lanzar un error si la respuesta no es OK
                throw new Error(`Error en la petición: ${respuesta.status} ${respuesta.statusText}`);
            }

            // Convertir la respuesta a formato JSON
            const datosUsuarios = await respuesta.json();
            
            // 3. Mostrar los datos en el HTML
            mostrarUsuarios(datosUsuarios);

        } catch (error) {
            // Capturar y mostrar cualquier error ocurrido
            console.error('Hubo un problema con la operación fetch:', error);
            contenedorDatos.innerHTML = `<p style="color: red;">Error al cargar los usuarios: ${error.message}</p>`;
        }
    }

    // 4. Función para renderizar los usuarios en el contenedor
    function mostrarUsuarios(usuarios) {
        contenedorDatos.innerHTML = ''; // Limpiar el contenido anterior

        if (usuarios.length === 0) {
            contenedorDatos.innerHTML = '<p>No se encontraron usuarios.</p>';
            return;
        }

        // Crear una tarjeta (div) para cada usuario
        usuarios.forEach(usuario => {
            const card = document.createElement('div');
            card.classList.add('usuario-card');
            
            card.innerHTML = `
                <h3>${usuario.name}</h3>
                <p><strong>Usuario:</strong> ${usuario.username}</p>
                <p><strong>Email:</strong> ${usuario.email}</p>
                <p><strong>Ciudad:</strong> ${usuario.address.city}</p>
            `;
            
            contenedorDatos.appendChild(card);
        });
    }

    // 5. Asignar el evento click al botón
    botonCargar.addEventListener('click', cargarUsuarios);
});