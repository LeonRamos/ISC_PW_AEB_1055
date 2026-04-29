// Usuario y contraseña válidos (puedes cambiar por valores reales o simular con variable)
const USUARIO_VALIDO = "demo";
const CONTRASENA_VALIDA = "1234";

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const usuario = document.getElementById('usuario').value.trim();
  const contrasena = document.getElementById('contrasena').value;
  const mensajeError = document.getElementById('mensajeError');

  if (usuario === USUARIO_VALIDO && contrasena === CONTRASENA_VALIDA) {
    // Almacenar usuario en localStorage para perfil.html
    localStorage.setItem('usuarioActual', usuario);
    window.location.href = 'perfil.html';
  } else {
    mensajeError.textContent = "Usuario o contraseña incorrectos";
  }
});
