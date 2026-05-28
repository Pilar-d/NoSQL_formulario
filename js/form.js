/*pruebass*/ 
/*function mensaje (){
    alert("Hice clic en un div")
}

function focus1(){
    alert("Hice foco en el input")
}*/

/*function perderfocus (){
    console.log("perdifocus")
}*/

/*alert("Cargando un script externo")*/


//crear una funcion sin nombre, cuando se crague la pagina, se ejecutara esa funcion
/*window.onload = function() {
        let inputNombre = document.getElementById('inputNombre');
        alert(inputNombre);
}*/

window.onload = function() {
}
function validarFormulario() {
    let inputNombre = document.getElementById('inputNombre');
    let inputRut = document.getElementById('inputRut');
    let inputEmail = document.getElementById('inputEmail');
    let dateFechaNacimiento = document.getElementById('dateFechaNacimiento');
    let password = document.getElementById('password');
    let passwordRepetir = document.getElementById('passwordRepetir');

    let formularioValido = true;

    /*alert(inputNombre + '' +  inputRut + '' + inputEmail + '' + dateFechaNacimiento + '' + password + '' + passwordRepetir);*/

    if(inputNombre.value == '') {
        inputNombre.classList.add('alerta');
        inputNombre.classList.add('is-invalid');
        formularioValido = false;
    } else {
        inputNombre.classList.remove('alerta');
        inputNombre.classList.remove('is-invalid');
        inputNombre.classList.add('is-valid');
    }

    if(inputRut.value == '' || !validarRut(inputRut.value)) {
        inputRut.classList.add('alerta');
        inputRut.classList.add('is-invalid');
        formularioValido = false;
    } else {
        inputRut.classList.remove('alerta');
        inputRut.classList.remove('is-invalid');
        inputRut.classList.add('is-valid');
    }

    if(inputEmail.value == '' || !validarEmail(inputEmail.value)) {
        inputEmail.classList.add('alerta');
        inputEmail.classList.add('is-invalid');
        formularioValido = false;
    } else {
        inputEmail.classList.remove('alerta');
        inputEmail.classList.remove('is-invalid');
        inputEmail.classList.add('is-valid');
    }

    if(password.value == '' || !validarPassword(password.value)) {
        console.log(validarPassword(password.value));
        password.classList.add('alerta');
        password.classList.add('is-invalid');
        formularioValido = false;
    } else {
        password.classList.remove('alerta');
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }
      if(passwordRepetir.value == '' || passwordRepetir.value !== password.value) {
        console.log(validarPassword(password.value));
        passwordRepetir.classList.add('alerta');
        passwordRepetir.classList.add('is-invalid');
        formularioValido = false;
    } else {
        passwordRepetir.classList.remove('alerta');
        passwordRepetir.classList.remove('is-invalid');
        passwordRepetir.classList.add('is-valid');
    }

    if (formularioValido){
        alert("Formulario enviado correctamente, enviando correctamente...");
    } else {
        alert("Formulario no es válido, por favor revise los campos resaltados en rojo");
    }
}

/*validacion de input con expresiones regulares*/

function validarRut(rut) {
    const expresionRut = /^\d{1,2}\.\d{3}\.\d{3}-[\dkK]$/;
    return expresionRut.test(rut);
}


function validarEmail(email) {
    const expresionEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return expresionEmail.test(email);
}

function validarPassword(password) {
    const expresionPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    return expresionPassword.test(password);

}






