// En login.js

document.addEventListener('DOMContentLoaded', function() {
    const formularioLogin = document.getElementById('login-form');
  
    formularioLogin.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const entradaUsuario = document.getElementById('username');
      const entradaContraseña = document.getElementById('password');
  
      const usuario = entradaUsuario.value;
      const contraseña = entradaContraseña.value;
  
      // Validación básica
      if (usuario.trim() === '' || contraseña.trim() === '') {
        alert('Se requieren tanto el nombre de usuario como la contraseña.');
        return;
      }
  
      // Base de datos simulada de usuarios
      const usuarios = [
        { usuario: 'Maximiliano', contraseña: 'contraseña1' },
        { usuario: 'Jose Manuel', contraseña: 'contraseña2' },
        // Agrega más usuarios según sea necesario
      ];
  
      // Verificar si el nombre de usuario y la contraseña proporcionados coinciden con algún usuario en la base de datos
      const usuarioEncontrado = usuarios.find(user => user.usuario === usuario && user.contraseña === contraseña);
  
      if (usuarioEncontrado) {
        alert('Inicio de sesión exitoso.');
  
        // Guardar el nombre de usuario en el localStorage
        localStorage.setItem('nombreUsuario', usuario);
  
        // Redirigir al usuario a otra página después del inicio de sesión exitoso
        window.location.href = '../pages/menu.html';
      } else {
        alert('Nombre de usuario o contraseña incorrectos.');
      }
    });
  });
  