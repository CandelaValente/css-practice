document.addEventListener("DOMContentLoaded", () => {
    // Obtener los elementos del formulario
  
    const formRegistro = document.getElementById("formRegistro");

    const nombre = document.getElementById("nombreRegistro");
    const apellido = document.getElementById("apellidoRegistro");
    const email = document.getElementById("emailRegistro");
    const password = document.getElementById("passwordRegistro");
    const password2 = document.getElementById("password2Registro");


    const errorNombre = document.getElementById("errorNombre");
    const errorApellido = document.getElementById("errorApellido");
    const errorEmail = document.getElementById("errorEmail");
   
    const errorPassword = document.getElementById("errorPassword");
    const errorPassword2 = document.getElementById("errorPassword2");

    const errores = {
        nombre: "El nombre no puede estar vacío.",
        apellido: "El apellido no puede estar vacío.",
        email: "El email debe ser válido (incluye '@' y '.').",
        mensaje: "Debes ingresar tu mensaje.",
        password: "Debes ingresar una contraseña",
        password2: "Las contraseñas no coinciden",
    };

    // Validar un solo campo
    function validarCampo(campo, errorId, condicion, mensaje) {
        const error = document.getElementById(errorId);
        if (condicion) {
            error.innerText = mensaje;
            return false;
        } else {
            error.innerText = "";
            return true;
        }
    }

    // Validar el formulario completo
  
    function validarFormularioRegistro() {
        const nombreValido = validarCampo(
            nombre,
            "errorNombre",
            nombre.value.trim() === "",
            errores.nombre
        );
        const apellidoValido = validarCampo(
            apellido,
            "errorApellido",
            apellido.value.trim() === "",
            errores.apellido
        );
        const emailValido = validarCampo(
            email,
            "errorEmail",
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),
            errores.email
        );
        const passwordValido = validarCampo(
            password,
            "errorPassword",
            password.value.trim() === "",
            errores.password
        );
        const password2Valido = validarCampo(
            password2,
            "errorPassword2",
            password2.value.trim() === "",
            errores.password2
        );

        // Habilitar o deshabilitar el botón de envío según el estado de los campos
        const formularioValido =
        nombreValido && apellidoValido && emailValido && passwordValido && password2Valido;
    

        // Asegurarse de que el botón de envío se active solo si el formulario es válido
        const enviarRegistro = document.getElementById("enviarRegistro");
        enviarRegistro.disabled = !formularioValido;
    }

    // Evento de input para validar los campos en tiempo real
  
    formRegistro.addEventListener("input", validarFormularioRegistro);

    // Prevent default submit behavior (si lo usas para validación en submit)
  
    formRegistro.addEventListener("submit", (event) => {
        event.preventDefault();  // Evita el envío por defecto si hay errores
        validarFormularioRegistro();
        if (document.getElementById("enviarRegistro").disabled === false) {
            alert("Formulario enviado exitosamente!");
            formRegistro.reset();
        } else {
            alert("Por favor, corrija los errores en el formulario.");
        }
    });
});





// // document.getElementById('botonEnviar').addEventListener('click', function () {
// function validFormContact() {
//     let nombre = document.getElementById('nombre').value;
//     let apellido = document.getElementById('apellido').value;
//     let email = document.getElementById('email').value;
//     let mensaje = document.getElementById('mensaje').value;

//     let error = document.getElementById('error');
//     let errorNombre = document.getElementById('errorNombre');
//     let errorApellido = document.getElementById('errorApellido');
//     let errorEmail = document.getElementById('errorEmail');
//     let errorMensaje = document.getElementById('errorMensaje');

//     if (nombre === "" || apellido === "" || email === "" || mensaje === "") {
//         error.textContent = "Debes completar todos los datos solicitados.";
//         error.className = "errorMensaje";

//     } else {
//         alert("¡Mensaje enviado éxitosamente!");
//     }
// // validarCampo  (campo, errorId, condicion, mensaje)
//     if (nombre === "") {
//         errorNombre.textContent = "Debes ingresar tu nombre...";
//         errorNombre.className = "errorMensaje";
//     }
//     if (apellido === "") {
//         errorApellido.textContent = "Debes ingresar tu apellido...";
//         errorApellido.className = "errorMensaje";
//     }
//     if (email === "") {
//         errorEmail.textContent = "Debes ingresar tu email";
//         validarEmail(email) ? '' : errorEmail.textContent = "Ingresa un email válido";
//         errorEmail.className = "errorMensaje";
//     }
//     if (mensaje === "") {
//         errorMensaje.textContent = "Debes ingresar un mensaje";
//         errorMensaje.className = "errorMensaje";
//     }

// }
// // function validFormContact() {
// //     let nombre = document.getElementById('nombre').value;
// //     let apellido = document.getElementById('apellido').value;
// //     let email = document.getElementById('email').value;
// //     let mensaje = document.getElementById('mensaje').value;

// //     let error = document.getElementById('error');
// //     let errorNombre = document.getElementById('errorNombre');
// //     let errorApellido = document.getElementById('errorApellido');
// //     let errorEmail = document.getElementById('errorEmail');
// //     let errorMensaje = document.getElementById('errorMensaje');

// //     if (nombre === "" || apellido === "" || email === "" || mensaje === "") {
// //         error.textContent = "Debes completar todos los datos solicitados.";
// //         error.className = "errorMensaje";

// //     } else {
// //         alert("¡Mensaje enviado éxitosamente!");
// //     }

// //     if (nombre === "") {
// //         errorNombre.textContent = "Debes ingresar tu nombre...";
// //         errorNombre.className = "errorMensaje";
// //     }
// //     if (apellido === "") {
// //         errorApellido.textContent = "Debes ingresar tu apellido...";
// //         errorApellido.className = "errorMensaje";
// //     }
// //     if (email === "") {
// //         errorEmail.textContent = "Debes ingresar tu email";
// //         validarEmail(email) ? '' : errorEmail.textContent = "Ingresa un email válido";
// //         errorEmail.className = "errorMensaje";
// //     }
// //     if (mensaje === "") {
// //         errorMensaje.textContent = "Debes ingresar un mensaje";
// //         errorMensaje.className = "errorMensaje";
// //     }

// // }
// // document.getElementById("btn-log").addEventListener("click", () => {
function validFormLogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let error = document.getElementById('error');
    let errorEmail = document.getElementById("errorEmail");
    let errorPassword = document.getElementById("errorPassword");

    if (email === "" || password === "") {
        error.textContent = "debe completar todos los campos";
        error.className = "errorMensaje";
    }
    if (email === "") {
        errorEmail.textContent = "ingrese su email";
        errorEmail.className = "errorMensaje"
    }
    if (password === "") {
        errorPassword.textContent = "ingrese su contraseña";
        errorPassword.className = "errorMensaje"
    }
}

function validFormRegister() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;

    let error = document.getElementById("error");
    let errorNombre = document.getElementById("errorNombre");
    let errorApellido = document.getElementById("errorApellido");
    let errorEmail = document.getElementById("errorEmail");
    let errorPassword = document.getElementById("errorPassword");
    let errorPassword2 = document.getElementById("errorPassword2");

    if ( nombre === "" || apellido === "" || email === "" || password === "" || password2 === ""){
        error.textContent = "debe completar todos los campos";
        error.className = "errorMensaje";
            }
    if ( nombre === ""){
        errorNombre.textContent = "debe completar con su nombre ";
        errorNombre.className = "errorMensaje";
    }
    if ( apellido === ""){
        errorApellido.textContent = "debe completar con su apellido ";
        errorApellido.className = "errorMensaje";
    }
    if ( email === ""){
        errorEmail.textContent = "debe completar con su email ";
        errorEmail.className = "errorMensaje";
    }
    if ( password === ""){
        errorPassword.textContent = "debe completar con una contraseña de mínimo 6 caracteres ";
        errorPassword.className = "errorMensaje";
    } else if(password.length <= 6){
        errorPassword.textContent = "la contraseña debe tener un mínimo de 6 caracteres ";
        errorPassword.className = "errorMensaje";

    }

    if ( password2 === ""){
        errorPassword2.textContent = "debe completar con una contraseña de mínimo 6 caracteres ";
        errorPassword2.className = "errorMensaje";
    } else if (password2 !== password){
        errorPassword2.textContent = "las contraseñas no coinciden";
        errorPassword2.className = "errorMensaje";
    }
}