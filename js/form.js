/*alert("Cargando un script externo")*/


//crear una funcion sin nombre, cuando se crague la pagina, se ejecutara esa funcion
/*window.onload = function() {
        let inputNombre = document.getElementById('inputNombre');
        alert(inputNombre);
}*/

function validarFormulario() {
    let inputNombre = document.getElementById('inputNombre').value;
    let inputRut = document.getElementById('inputRut').value;
    let inputEmail = document.getElementById('inputEmail').value;
    let dateFechaNacimiento = document.getElementById('dateFechaNacimiento').value;
    let password = document.getElementById('password').value;
    let passwordRepetir = document.getElementById('passwordRepetir').value;

    /*alert(inputNombre + '' +  inputRut + '' + inputEmail + '' + dateFechaNacimiento + '' + password + '' + passwordRepetir);*/

    if(inputNombre == '' || inputRut == '' || inputEmail == '' || password == '' || passwordRepetir == '') {
        alert("Porfavor ingrese todos los datos requeridos")
    } else{
        alert("Datos correctos, procesando formulario...")
    }
}


