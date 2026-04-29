window.onload = function() {
  const usuario = localStorage.getItem('usuarioActual');
  if (!usuario) {
    window.location.href = 'index.html';
    return;
  }
  document.getElementById('nombreUsuario').textContent = usuario;
};

function cerrarSesion() {
  localStorage.removeItem('usuarioActual');
  window.location.href = 'index.html';
}

