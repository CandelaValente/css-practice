document.addEventListener("DOMContentLoaded", () => {
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const errorNombre = document.getElementById("errorNombre");
    const errorEmail = document.getElementById("errorEmail");
    const btnEnviar = document.getElementById("btnEnviar");
   
    // Función para validar un campo genérico
    const validarCampo = (campo, errorElemento, condicion, mensajeError) => {
      if (condicion) {
        errorElemento.innerText = mensajeError; // Mostrar mensaje de error.
        return false; // Campo inválido.
      } else {
        errorElemento.innerText = ""; // Borrar mensaje de error.
        return true; // Campo válido.
      }
    };
   
    // Validar campo 1
    const validarNombre = () => {
      return validarCampo(
        nombre,
        errorNombre,
        nombre.value.trim() === "",
        "Campo 1 no puede estar vacío."
      );
    };
   
    // Validar campo 2
    const validarEmail = () => {
      return validarCampo(
        email,
        errorEmail,
        email.value.trim() === "",
        "Campo 2 no puede estar vacío."
      );
    };
   
    // Validar todo el formulario
    const validarFormulario = () => {
      const nombreValido = validarNombre(); // Valida campo 1.
      const emailValido = validarEmail(); // Valida campo 2.
   
      // Habilitar o deshabilitar el botón de envío
      btnEnviar.disabled = !(nombreValido && emailValido);
    };
   
    // Escuchar eventos de entrada en cada campo
    nombre.addEventListener("input", validarNombre); // Valida en tiempo real.
    email.addEventListener("input", validarEmail); // Valida en tiempo real.
   
    // Escuchar el evento de envío
    document.getElementById("miFormulario").addEventListener("submit", (e) => {
      e.preventDefault(); // Evitar el envío por defecto.
      if (!btnEnviar.disabled) {
        alert("Formulario enviado correctamente.");
      }
    });
  });