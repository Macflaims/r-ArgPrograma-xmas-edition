function validarNombre(nombre){
    if(nombre.length === 0){
        return "El campo nombre no puede estar vacío"
    }
    if(nombre.length>50){
        return "El campo nombre no puede contener más de 50 caracteres"
    }
    if(!/^[a-z]+$/i.test(nombre)){
        return "El campo nombre sólo acepta letras"
    }
    return ""
}

function validarCiudad(ciudad){
    if(ciudad.length === 0){
        return "El campo ciudad no puede estar vacío"
    }
    return ""
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length === 0){
        return "El campo regalo no puede estar vacío"
    }
    else if(descripcionRegalo.length > 100){
        return "El campo de descripción del regalo no puede contener más de 100 caracteres"
    }
    else if(!/^[a-z0-9]+$/i.test(descripcionRegalo)){
        return "El campo descripción regalo solo puede tener números y letras"
    }
    else{
    return "";
    }
}

function validarFormulario(event){
    

    const nombre = form.nombre.value;
    const ciudad = form.ciudad.value;
    const descripcionRegalo = form.descripcion.value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores={
        nombre: errorNombre,
        ciudad: errorCiudad,
        descripcion: errorDescripcionRegalo
    };

    const esExito = manejarErrores(errores) === 0;
    if(esExito){
        form.className= "oculto";
        document.querySelector("#exito").className="";
        redireccionar();
    }

    event.preventDefault()
}

function manejarErrores(errores){
    const contenedorErrores = document.querySelector("#errores");
    document.querySelectorAll("#errores li").forEach((error)=>{error.remove()});
    
    const keys = Object.keys(errores);
    let cantidadErrores = 0;


    keys.forEach((key)=>{
    const existeError = errores[key]
        
        if(existeError){
            cantidadErrores++;
            form[key].className= "error";
            const error = document.createElement("li");
            error.textContent = existeError;
            contenedorErrores.appendChild(error)
        }
        else{
            form[key].className= "";
        }
    })
    return cantidadErrores;
}

function redireccionar(){
setTimeout(() => {
    window.location.href = "wishlist.html"
}, 5000);
}


const form= document.querySelector("#carta-a-santa");
form.onsubmit = validarFormulario;