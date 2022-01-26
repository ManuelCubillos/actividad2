function validar() {
    
    let nombre, apellido, correo, tipomensaje
    
        nombre = document.getElementById('nombre').value
        apellido = document.getElementById('apellido').value
        correo = document.getElementById('correo').value
        tipomensaje = document.getElementById('tipomensaje').value
    
        alert("Buen dia "+ nombre +" "+ apellido +", gracias por tu mensaje de " + tipomensaje +". Tu correo es " + correo)
    }