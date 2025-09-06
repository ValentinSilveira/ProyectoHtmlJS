inicio()


class importador {
    constructor(unNombre, unUsuario, unaContraseña, unaFoto, unEstado) {

        this.id = contadorDeImportadores
        this.nombre = unNombre
        this.usuario = unUsuario
        this.contraseña = unaContraseña
        this.foto = unaFoto
        this.estado = unEstado
        this.cantidadCanceladas = 0
        contadorDeImportadores++

    }

}

class Empresa {
    constructor(unNombre, unUsuario, unaContraseña) {

        this.id = contadorDeEmpresas
        this.nombre = unNombre
        this.usuario = unUsuario
        this.contraseña = unaContraseña


        contadorDeEmpresas++
    }

}

class Solicitudes {
    constructor(unTipoDeCarga, unaDescripcion, unPuertoDeOrigen, unaCantidad, unImportador, unaEmpresa, unEstado) {
        this.id = contadorDeSolicitudes
        this.tipoDeCarga = unTipoDeCarga
        this.descripcion = unaDescripcion
        this.puerto = unPuertoDeOrigen
        this.cantidad = unaCantidad
        this.idImportador = unImportador
        this.idEmpresa = unaEmpresa
        this.idViaje = contadorDeSolicitudes
        this.estado = unEstado
        contadorDeSolicitudes++
    }

}

class Viajes {
    constructor(unNombreBuque, unaCantidadDeContenedores, unaEmpresa, unaFecha, unDisponible, unPuertoDeOrigen) {
        this.id = contadordeViajes
        this.nombreBuque = unNombreBuque
        this.cantidad = unaCantidadDeContenedores
        this.puerto = unPuertoDeOrigen
        this.disponible = unDisponible
        this.idEmpresa = unaEmpresa
        this.fecha = unaFecha
        contadordeViajes++
    }
}




let listaDeImportadores = new Array()
let listaDeEmpresas = new Array()
let listaDeSolicitudes = new Array()
let listaDeViajes = new Array()


let contadorDeViajeasConfirmados = 1
let usuarioConectado = undefined
let contadorDeEmpresas = 1
let contadorDeImportadores = 1
let contadordeViajes = 1
let contadorDeSolicitudes = 1

// registrar botones

function cargarClickEnBotones() {
    document.querySelector("#btnRegistrarImportador").addEventListener("click", registrarImportadores)
    document.querySelector("#btnIngresarLogin").addEventListener("click", ingresarLogin)
    document.querySelector("#btnRegistroImportador").addEventListener("click", registroImportador)
    document.querySelector("#btnCrearViajes").addEventListener("click", crearViajes)
    document.querySelector("#btnCerrarSesion").addEventListener("click", cerrarSesion)
    document.querySelector("#btnVolverImportador").addEventListener("click", volverImportador)
    document.querySelector("#btnAsignarSolicitud").addEventListener("click", asignarSolicitud)
    document.querySelector("#btnRolloverDeCarga").addEventListener("click", rolloverDeCarga)
    document.querySelector("#btnManifiestoDeCarga").addEventListener("click", manifiestoDeCarga)
    document.querySelector("#btnHabilitarImportador").addEventListener("click", habilitarImportador)
    document.querySelector("#btnListaDeCargaPeligrosa").addEventListener("click", cargaPeligrosa)
    document.querySelector("#btnCrearSolicitud").addEventListener("click", crearSolicitud)
    document.querySelector("#btnConsultarSolicitudesPendientes").addEventListener("click", solicitudesPendientes)
    document.querySelector("#btnVisualizarEstadistica").addEventListener("click", visualizar)
    document.querySelector("#btnCrearSolicitudViaje").addEventListener("click", crearSolicitudImportador)
    document.querySelector("#btnCrearViaje").addEventListener("click", crearViajeEmpresa)
    document.querySelector("#btnVolverLogin").addEventListener("click", volverLogin)
    document.querySelector("#btnVolverEmpresa").addEventListener("click", volverEmpresa)
    document.querySelector("#btnSeleccionarCarga").addEventListener("click", asignarViaje)
    document.querySelector("#btnAsignarViaje").addEventListener("click", confirmarViaje)
    document.querySelector("#btnHabilitar").addEventListener("click", habilitarimportadores)
    document.querySelector("#btnRollover").addEventListener("click", rollover)
}

// Ocultar Pantallas
function ocultarPantallas() {
    document.querySelector("#divLogin").style.display = "none";
    document.querySelector("#divRegistroDeImportadores").style.display = "none";
    document.querySelector("#divMenuEmpresa").style.display = "none";
    document.querySelector("#divMenuImportador").style.display = "none";
    document.querySelector("#divCrearSolicitud").style.display = "none";
    document.querySelector("#divCrearViajesEmpresa").style.display = "none";
    document.querySelector("#divGestionUsuario").style.display = "none";
    document.querySelector("#divGestionEmpresa").style.display = "none";
    document.querySelector("#divManifiesto").style.display = "none";
    document.querySelector("#divCargaPeligrosa").style.display = "none";
    document.querySelector("#divVisualizarEstadistica").style.display = "none";
    document.querySelector("#divHabilitar").style.display = "none";
    document.querySelector("#divRollover").style.display = "none";
}

// ocultamos botones 

function ocultarBotones() {
    document.querySelector("#btnVolverImportador").style.display = "none"
    document.querySelector("#btnVolverEmpresa").style.display = "none"
    document.querySelector("#btnVolverLogin").style.display = "none"
    document.querySelector("#btnCerrarSesion").style.display = "none"
    document.querySelector("#btnSeleccionarCarga").style.display = "none"
    document.querySelector("#btnAsignarViaje").style.display = "none"
    document.querySelector("#btnHabilitar").style.display = "none"
    document.querySelector("#btnRollover").style.display = "none"
}

// menu logueado

function inicio() {
    ocultarPantallas();
    cargarClickEnBotones();
    ocultarBotones();
    document.querySelector("#divLogin").style.display = "inline"
}

// ingresar login

function ingresarLogin() {

    let usuario = document.querySelector("#txtUsuarioLogin").value
    let contraseña = document.querySelector("#txtContraseñaLogin").value
    let valido = false

    // validamos datos e ingresamos al menu segun el usuario

    if (existeUsuarioImportador(usuario)) {
        if (existeUsuarioImportadorContraseña(contraseña)) {
            //document.querySelector("#txtUsuarioLogin").value = ""
            //document.querySelector("#txttxtContraseñaLogin").value = ""
            usuarioConectado = conocerIdImportador(usuario)
            mostrarMenuImportador();
            ocultarBotones();
            ocultarPantallas();
            document.querySelector("#btnCerrarSesion").style.display = "inline"
            document.querySelector("#divMenuImportador").style.display = "inline"
            valido = true
        }
    }

    if (!valido) {

        if (existeUsuarioEmpresa(usuario)) {
            if (existeUsuarioEmpresaContraseña(contraseña)) {
                usuarioConectado = conocerIdEmpresa(usuario)
                mostrarMenuEmpresa()
                ocultarBotones();
                ocultarPantallas();
                document.querySelector("#btnCerrarSesion").style.display = "inline"
                document.querySelector("#divMenuEmpresa").style.display = "inline"
                valido = true
            }
        }

    }
    if (!valido) { alert("Datos Incorrectos") }


}

// validamos los requisitos de la contrasenia

function validarClave(unaContraseña) {

    // La contraseña deberá tener un mínimo de 5 caracteres, 
    // contando con al menos una mayúscula, una minúscula y un número. 

    let valida = true;
    if (unaContraseña.length < 5) {
        alert("La clave debe tener al menos 5 caracteres");
        valida = false
    }

    if (contarMayusculas(unaContraseña) < 1) {
        alert("La clave debe tener al menos una Mayúsucula")
        valida = false
    }
    if (contarMinusculas(unaContraseña) < 1) {
        alert("La clave debe tener al menos una Minúsucula")
        valida = false
    }
    if (contarNumeros(unaContraseña) < 1) {
        alert("La clave debe tener al menos un Número")
        valida = false
    }

    return valida
}



function contarMayusculas(texto) {

    texto = texto.replaceAll(" ", "");
    let cantidadMayusculas = 0
    for (let i = 0; i < texto.length; i++) {
        if ((texto.charAt(i) == texto.charAt(i).toUpperCase())
            && (isNaN(texto.charAt(i)))) {

            cantidadMayusculas++
        }
    }
    return cantidadMayusculas

}

function contarMinusculas(texto) {

    texto = texto.replaceAll(" ", "");
    let cantidadMinusculas = 0
    for (let i = 0; i < texto.length; i++) {
        if ((texto.charAt(i) == texto.charAt(i).toLowerCase())
            && (isNaN(texto.charAt(i)))) {

            cantidadMinusculas++
        }
    }
    return cantidadMinusculas

}

function contarNumeros(texto) {

    texto = texto.replaceAll(" ", "");
    let cantidadNumeros = 0
    // recorro todo el string
    // !isNaN  es evaluar SI es número
    for (let i = 0; i < texto.length; i++) {
        if (!isNaN(texto.charAt(i))) {
            cantidadNumeros++
        }
    }
    return cantidadNumeros

}

// cargamos opciones de logueo

function mostrarMenuImportador() {
    ocultarPantallas();
    ocultarBotones();
    cargarClickEnBotones();
    document.querySelector("#divMenuImportador").style.display = "inline"
}

function mostrarMenuEmpresa() {
    ocultarPantallas();
    ocultarBotones();
    cargarClickEnBotones();
    document.querySelector("#divMenuEmpresa").style.display = "inline"
}

// funciones para volver al menu logueado

function cerrarSesion() {
    ocultarPantallas();
    cargarClickEnBotones();
    ocultarBotones();
    document.querySelector("#divLogin").style.display = "inline"

}

function volverLogin() {
    ocultarPantallas();
    cargarClickEnBotones();
    ocultarBotones();
    document.querySelector("#divLogin").style.display = "inline"
}
function volverEmpresa() {
    mostrarMenuEmpresa()
    ocultarBotones();
    ocultarPantallas();
    document.querySelector("#btnCerrarSesion").style.display = "inline"
    document.querySelector("#divMenuEmpresa").style.display = "inline"
}

function volverImportador() {
    mostrarMenuImportador();
    ocultarBotones();
    ocultarPantallas();
    document.querySelector("#btnCerrarSesion").style.display = "inline"
    document.querySelector("#divMenuImportador").style.display = "inline"
}

// creamos una solicitud de viaje desde el importador

function crearSolicitud() {
    cargarClickEnBotones();
    ocultarPantallas();
    ocultarBotones();
    document.querySelector("#btnCerrarSesion").style.display = "inline"
    document.querySelector("#divCrearSolicitud").style.display = "inline"
    document.querySelector("#btnVolverImportador").style.display = "inline"

}


function crearSolicitudImportador() {
    let tipoDeCarga = document.querySelector("#slcTipoDeCarga").value;
    let descripcion = document.querySelector("#txtDescripcionMercaderia").value;
    let puertoDeOrigen = document.querySelector("#slcPuertoDeOrigen").value;
    let cantidadDeContendores = Number(document.querySelector("#txtCantContenedores").value);
    let empresa = document.querySelector("#slcEmpresa").value;
    if (recuperarImportador(usuarioConectado).estado == "Habilitado") {
        if (tipoDeCarga != "selTipo" && descripcion != "" && puertoDeOrigen != "selPuerto" && empresa != "selEmpresa" && cantidadDeContendores > 0) {

            let solicitud = new Solicitudes(
                tipoDeCarga,
                descripcion,
                puertoDeOrigen,
                cantidadDeContendores,
                usuarioConectado,
                empresa,
                "Pendiente"
            );
            listaDeSolicitudes.push(solicitud);
            alert("Solicitud creada Correctamente");
        } else {
            alert("Todos los campos deben estar completos");
        }
    } else {
        alert("El usuario está inhabilitado");
    }
}



// conocemos el id del importador

function conocerIdImportador(usuario) {
    for (let unImportador of listaDeImportadores) {
        if (unImportador.usuario == usuario) {
            return unImportador.id
        }
    }
    return null
}

function conocerIdEmpresa(usuario) {
    for (let unaEmpresa of listaDeEmpresas) {
        if (unaEmpresa.usuario == usuario) {
            return unaEmpresa.id
        }
    }
    return null
}

// registramos nuevo importador

function registroImportador() {
    ocultarBotones();
    ocultarPantallas();
    document.querySelector("#btnVolverLogin").style.display = "inline"
    document.querySelector("#divRegistroDeImportadores").style.display = "inline"
}

function registrarImportadores() {
    let nombre = document.querySelector("#txtNombreImportador").value;
    let usuario = document.querySelector("#txtUsuarioImportador").value;
    let contraseña = document.querySelector("#txtContraseñaImportador").value;
    let fotoInput = document.querySelector("#txtFotoImportador"); // referencia al input file
    let fotoArchivo = fotoInput.files.length > 0 ? fotoInput.files[0].name : "";

    // Validación de campos vacíos
    if (!nombre || !usuario || !contraseña) {
        alert("Todos los campos deben estar completos");
        return;
    }

    // Validación de foto
    if (!fotoArchivo) {
        alert("Debes cargar una imagen");
        return;
    }

    // Validación de usuario único y clave correcta
    if (!existeUsuarioImportador(usuario) && validarClave(contraseña)) {
        let nuevoImportador = new importador(nombre, usuario, contraseña, fotoArchivo, "Habilitado");
        listaDeImportadores.push(nuevoImportador);

        usuarioConectado = nuevoImportador.id;

        alert("Importador Registrado con éxito");

        ocultarPantallas();
        ocultarBotones();
        document.querySelector("#btnCerrarSesion").style.display = "inline";
        document.querySelector("#divMenuImportador").style.display = "inline";

    } else {
        if (existeUsuarioImportador(usuario)) {
            alert("El usuario ya existe");
        }
    }
}

// valida que no exista otro usuario con el mismo nombre

function existeUsuarioImportador(unUsuario) {
    for (let i in listaDeImportadores) {
        if (listaDeImportadores[i].usuario == unUsuario) {
            return listaDeImportadores[i]
        }
    }
    return false
}

function existeUsuarioImportadorContraseña(unaContraseña) {
    for (let i in listaDeImportadores) {
        if (listaDeImportadores[i].contraseña == unaContraseña) {
            return listaDeImportadores[i]
        }
    }
    return false
}

function existeUsuarioEmpresa(unUsuario) {
    for (let i in listaDeEmpresas) {
        if (listaDeEmpresas[i].usuario == unUsuario) {
            return listaDeEmpresas[i]
        }
    }
    return false
}

function existeUsuarioEmpresaContraseña(unaContraseña) {
    for (let i in listaDeEmpresas) {
        if (listaDeEmpresas[i].contraseña == unaContraseña) {
            return listaDeEmpresas[i]
        }
    }
    return false
}

function camposCompletos(unNombre, unUsuario, unaContraseña, unaFoto) {

    if (unNombre == "" || unUsuario == "" || unaContraseña == ""
        || unaFoto == "") {
        alert("No deben existir campos vacíos")
        return false
    }

    return true
}

// creamos viajes desde el menu empresa

function crearViajes() {
    ocultarPantallas();
    ocultarBotones();
    cargarClickEnBotones();
    document.querySelector("#btnCerrarSesion").style.display = "inline"
    document.querySelector("#btnVolverEmpresa").style.display = "inline"
    document.querySelector("#divCrearViajesEmpresa").style.display = "inline"
}

// Creamos viajes
function crearViajeEmpresa() {
    let nombreBuque = document.querySelector("#txtNombreBuque").value
    let cantidad = document.querySelector("#txtCantMaxCont").value
    let fecha = document.querySelector("#txtFecha").value
    let puerto = document.querySelector("#txtPuerto").value

    if ((nombreBuque != "") && (cantidad >= 1) && (fecha != "") && (puerto != "")) {

        let crearViajes = new Viajes(nombreBuque, cantidad, usuarioConectado, fecha, disponible = cantidad, puerto)
        listaDeViajes.push(crearViajes);
        alert("Viaje creado con exito")

    } else { alert("Campos en blanco") }


}

// Podemos ver las solicitudes pendientes y en caso de querer cancelarlas la podemos hacer desde aca

function solicitudesPendientes() {
    ocultarBotones();
    ocultarPantallas();
    document.querySelector("#divGestionUsuario").style.display = "inline"
    document.querySelector("#btnCerrarSesion").style.display = "inline"
    document.querySelector("#btnVolverImportador").style.display = "inline"
    let tabla = ""
    tabla += `<table border="collapese" cellpadding=10 cellspacing=0 align= center>
            <th>id solicitante</th>
            <th>Tipo</th>
            <th>Empresa</th>
            <th>descripcion</th>
            <th>Origen</th>
            <th>Contenedores</th> 
            <th>Estado</th>
            <th>Operar</th>
            `
    for (let carga of listaDeSolicitudes) {
        if (carga.idImportador == usuarioConectado && carga.estado == "Pendiente") {
            tabla += `<tr>
            <td>${carga.idImportador}</td>
            <td>${carga.tipoDeCarga}</td>
            <td>${carga.idEmpresa}</td>
            <td>${carga.descripcion}</td>
            <td>${carga.puerto}</td>
            <td>${carga.cantidad}</td>            
            <td>${carga.estado}</td>
            <td><input type="button" value="Cancelar" onClick=cambiarEstado(${carga.id})></td>
                       
            </tr>
            `
        }
    }
    tabla += `</table>`
    document.querySelector("#msgTabla").innerHTML = tabla
}



function cambiarEstado(unId) {

    for (let carga of listaDeSolicitudes) {
        if (carga.id == unId) {
            carga.estado = "Cancelada"
            let usuario = recuperarImportador(usuarioConectado)
            usuario.cantidadCanceladas = usuario.cantidadCanceladas + 1
            if (usuario.cantidadCanceladas == 3) {
                usuario.estado = "Inhabilitado"
            }
        }
    }
    solicitudesPendientes();
}




// Mostramos el menu para buscar los viajes


function asignarSolicitud() {
    ocultarBotones();
    ocultarPantallas();
    seleccionCarga();
    document.querySelector("#divGestionEmpresa").style.display = "inline"
    document.querySelector("#btnCerrarSesion").style.display = "inline"
    document.querySelector("#btnVolverEmpresa").style.display = "inline"
    document.querySelector("#btnSeleccionarCarga").style.display = "inline"
    document.querySelector("#btnAsignarViaje").style.display = "inline"

}

// Aca seleccionamos el puerto de origen y vemos las solicitudes pendientes 


function seleccionCarga() {
    let combo = document.querySelector("#slcSeleccionarCarga")
    combo.innerHTML = ""
    for (let unaCarga of listaDeSolicitudes) {
        if (unaCarga.estado == "Aceptada")
            combo.innerHTML += `<option value=${unaCarga.id}>${unaCarga.id}--${unaCarga.descripcion}--${unaCarga.cantidad}</option>`
    }
}

function asignarViaje() {
    let combo = document.querySelector("#slcAsignarViajes")
    let miCarga = recuperarCarga(document.querySelector("#slcSeleccionarCarga").value)
    combo.innerHTML = ""
    for (miCarga of listaDeSolicitudes) {
        if (miCarga.estado == "Pendiente") {
            for (let unViaje of listaDeViajes) {
                if (unViaje.cantidad <= unViaje.disponible) {
                    combo.innerHTML += `<option value=${unViaje.id}>${unViaje.id}--${unViaje.puerto}--${unViaje.disponible}</option>`
                }
            }
        }
    }

}


function confirmarViaje() {
    let miCarga = recuperarCarga(document.querySelector("#slcSeleccionarCarga").value)
    let miViaje = recuperarViaje(document.querySelector("#slcAsignarViajes").value)
    // Cambio la solicitud

    for (let unaSol of listaDeSolicitudes) {
        if (unaSol == miCarga) {
            unaSol.idViaje = miViaje.idViaje
        }
    }
    // Resto el disponible del viaje

    for (let unViaje of listaDeViajes) {
        if (unViaje == miViaje) {
            unViaje.disponible = unViaje.disponible - miCarga.cantidad
        }
    }
    alert("El viaje se asigno con exito")
}

function recuperarImportador(id) {
    for (let unImpo of listaDeImportadores) {
        if (unImpo.id == id) {
            return unImpo
        }
        return null
    }
}

function recuperarViaje(id) {
    for (let unViaje of listaDeViajes) {
        if (unViaje.id == id) {
            return unViaje
        }
        return null
    }
}


function recuperarCarga(id) {
    for (let unaCarga of listaDeSolicitudes) {
        if (unaCarga.id == id) {
            return unaCarga
        }
        return null
    }
}

function manifiestoDeCarga() {
    ocultarPantallas();
    ocultarBotones();
    document.querySelector("#btnCerrarSesion").style.display = "inline"
    document.querySelector("#btnVolverEmpresa").style.display = "inline"
    document.querySelector("#divManifiesto").style.display = "inline"
    for (carga of listaDeSolicitudes) {
        let tabla = ""
        tabla += `<table border="collapese" cellpadding=10 cellspacing=0 align= center>
            <th>Origen</th>
            <th>Contenedores</th>
            <th>Importador</th>
            <th>descripcion</th>
            <th>Tipo de Mercaderia</th>
            `
        for (carga of listaDeSolicitudes) {
            if (carga.idEmpresa == usuarioConectado && carga.estado == "Aceptada") {
                tabla += `<tr>
            <td>${carga.puerto}</td>
            <td>${carga.cantidad}</td>
            <td>${carga.idImportador}</td>
            <td>${carga.descripcion}</td>
            <td>${carga.tipoDeCarga}</td>
                       
            </tr>
            `
            }
        }
        tabla += `</table>`
        document.querySelector("#msgManifiesto").innerHTML = tabla
    }

}

function visualizar() {

    ocultarPantallas()
    ocultarBotones()
    document.querySelector("#divVisualizarEstadistica").style.display = "inline"
    document.querySelector("#btnCerrarSesion").style.display = "inline"
    document.querySelector("#btnVolverImportador").style.display = "inline"
    porcentajeCancelaciones()
    participacionDiferentesLineasCarga()

}

function porcentajeCancelaciones() {


    let totalDeCanceladas = 0
    let totalDeSolicitudes = 0
    for (unaSol of listaDeSolicitudes) {
        if (unaSol.estado == usuarioConectado) {
            totalDeSolicitudes++
            if (unaSol.estado == "Cancelada") totalDeCanceladas++
        }

        let porcentaje = totalDeCanceladas * 100 / totalDeSolicitudes
        document.querySelector("#msgPorcentajesCanceladas").innerHTML = "El % de cancelaciones es: " + porcentaje


    }

}

function participacionDiferentesLineasCarga() {

    let totalEmpresa1 = 0
    for (let unaSol of listaDeSolicitudes) {
        if (unaSol.id == usuarioConectado.id) {
            if (unaSol.idEmpresa == 1) {
                totalEmpresa1++
            }
        }

    }

    let totalEmpresa2 = 0
    for (let unaSol of listaDeSolicitudes) {
        if (unaSol.id == usuarioConectado.id) {
            if (unaSol.idEmpresa == 2) {
                totalEmpresa2++
            }
        }

        let totalEmpresa3 = 0
        for (let unaSol of listaDeSolicitudes) {
            if (unaSol.id == usuarioConectado.id) {
                if (unaSol.idEmpresa == 3) {
                    totalEmpresa3++
                }
            }
        }
        let totalEmpresa4 = 0
        for (let unaSol of listaDeSolicitudes) {
            if (unaSol.id == usuarioConectado.id) {
                if (unaSol.idEmpresa == 4) {
                    totalEmpresa4++
                }
            }
        }
        let totalGeneral = totalEmpresa1 + totalEmpresa2 + totalEmpresa3 + totalEmpresa4
        let porcentaje1 = totalEmpresa1 * 100 / totalGeneral
        let porcentaje2 = totalEmpresa2 * 100 / totalGeneral
        let porcentaje3 = totalEmpresa3 * 100 / totalGeneral
        let porcentaje4 = totalEmpresa4 * 100 / totalGeneral

        if (porcentaje1 > 0) document.querySelector("#msgParticipacion").innerHTML += `El porcentaje de la empresa ${listaDeEmpresas[0].nombre} es ${$porcentaje1}`
        if (porcentaje2 > 0) document.querySelector("#msgParticipacion").innerHTML += `El porcentaje de la empresa ${listaDeEmpresas[1].nombre} es ${$porcentaje2}`
        if (porcentaje3 > 0) document.querySelector("#msgParticipacion").innerHTML += `El porcentaje de la empresa ${listaDeEmpresas[2].nombre} es ${$porcentaje3}`
        if (porcentaje4 > 0) document.querySelector("#msgParticipacion").innerHTML += `El porcentaje de la empresa ${listaDeEmpresas[3].nombre} es ${$porcentaje4}`

    }
}

function rolloverDeCarga() {
    ocultarPantallas()
    ocultarBotones()
    document.querySelector("#btnCerrarSesion").style.display = "inline"
    document.querySelector("#btnVolverEmpresa").style.display = "inline"
    document.querySelector("#divRollover").style.display = "inline"
    document.querySelector("#btnRollover").style.display = "inline"
    rollover()
}

function rollover() {
    let idSol = document.querySelector("#txtIdSol").value
    let idViaje = document.querySelector("#txtIdViaje").value
    let sol = recuperarCarga(idSol)
    let viaje = recuperarViaje(idViaje)

    hecho = false
    for (let solicitud of listaDeSolicitudes) {
        if (solicitud.cantidad <= viaje.cantidad && solicitud.id == sol.id) {
            hecho = true
            let viajeViejo = solicitud.idViaje
            let cuposViejos = solicitud.cantidad
            solicitud.idViaje = viaje.id
            for (let unViaje of listaDeViajes) {
                if (unViaje.id == viaje.id) {
                    unViaje.disponible = unViaje.disponible - solicitud.cantidadDeContendores
                }
                for (let unViaje of listaDeViajes) {
                    if (unViaje.id == viajeViejo) {
                        unViaje.disponible = unViaje.disponible + cuposViejos
                    }
                }

            }
            alert("Rollover realizado con exito")
        }
    }
    if (!hecho) alert("No se puede rollear")
}


function cargaPeligrosa() {
    ocultarPantallas()
    ocultarBotones()
    document.querySelector("#divCargaPeligrosa").style.display = "inline"
    document.querySelector("#btnCerrarSesion").style.display = "inline"
    document.querySelector("#btnVolverEmpresa").style.display = "inline"
    let tabla = ""
    tabla += `<table border="collapese" cellpadding=10 cellspacing=0 align= center>
            <th>id solicitante</th>
            <th>Tipo</th>
            <th>Empresa</th>
            <th>descripcion</th>
            <th>Origen</th>
            <th>Contenedores</th>
            `
    for (let carga of listaDeSolicitudes) {
        if (carga.idImportador == usuarioConectado && carga.estado == "Aceptada" && carga.tipoDeCarga == "Peligrosa") {
            tabla += `<tr>
            <td>${carga.idImportador}</td>
            <td>${carga.tipoDeCarga}</td>
            <td>${carga.idEmpresa}</td>
            <td>${carga.descripcion}</td>
            <td>${carga.puerto}</td>
            <td>${carga.cantidad}</td>
                       
            </tr>
            `
        }
    }
    tabla += `</table>`
    document.querySelector("#msgCargaPeligrosa").innerHTML = tabla

}

function habilitarImportador() {
    ocultarBotones()
    ocultarPantallas()
    document.querySelector("#btnCerrarSesion").style.display = "inline"
    document.querySelector("#btnVolverEmpresa").style.display = "inline"
    document.querySelector("#divHabilitar").style.display = "inline"
    document.querySelector("#btnHabilitar").style.display = "inline"

}
function habilitarimportadores() {
    let id = document.querySelector("#txtidImpo").value
    for (let unImpo of listaDeImportadores) {
        if (unImpo.id == id) {
            unImpo.estado = "Habilitado"
            alert("Usuario Habilitado")
            for (let unSol of listaDeSolicitudes) {
                if (unSol.idImportador == unImpo.id && unSol.estado == "Cancelada") {
                    unSol.estado = "Ignorada"
                }
            }
        }
    }

}


// Precarga de datos

// nombre, usuario, contrasenia, foto
let importador1 = new importador("pablo", "pablo", "Pablo2022", "img/suarez.jpg", "Habilitado")
let importador2 = new importador("pachu", "pachu", "Pachu2022", "img/suarez.jpg", "Habilitado")
let importador3 = new importador("luis", "luis", "Luis2022", "img/suarez.jpg", "Habilitado")
let importador4 = new importador("jorge", "jorge", "Jorge2022", "img/suarez.jpg", "Habilitado")
let importador5 = new importador("esteban", "esteban", "Esteban2022", "img/suarez.jpg", "Habilitado")
listaDeImportadores.push(importador1, importador2, importador3, importador4, importador5)


// nombre, usuario, contrasenia
let empresa1 = new Empresa("MSC", "msc", "Msc2022")
let empresa2 = new Empresa("URUGUAY", "uruguay", "Uru2022")
let empresa3 = new Empresa("ENVIOSGLOBALES", "envios", "Envios2022")
let empresa4 = new Empresa("TELOLLEVAMOS", "telollevamos", "Llevamos2022")
listaDeEmpresas.push(empresa1, empresa2, empresa3, empresa4)


//nombreBuque, cantidad, idEmpresa, fecha, disponible, puerto, estado
let viaje1 = new Viajes("HMM", 100, 1, "20221228", 100, "Buenos Aires")
let viaje2 = new Viajes("RODU", 130, 2, "20221214", 130, "San Pablo")
let viaje3 = new Viajes("CNdeF", 250, 3, "20221217", 250, "DC")
let viaje4 = new Viajes("GARRACHARRUA", 85, 4, "20221218", 85, "Barcelona")
listaDeViajes.push(viaje1, viaje2, viaje3, viaje4)

//tipoDeCArga, Descripcion, puerto, cantidad, idImportador, idEmpresa, estado   
let solicitud1 = new Solicitudes("General", "Articulos escolares", "Singapur", 25, 3, 1, "Aceptada")
let solicitud2 = new Solicitudes("Refriguerado", "Pescados", "Madryn", 40, 2, 2, "Aceptada")
let solicitud3 = new Solicitudes("Peligrosa", "Fuesgos Artificiales", "Shangai", 90, 1, 3, "Aceptada")
let solicitud4 = new Solicitudes("Refriguerado", "Medicamentos", "Busan", 75, 1, 4, "Aceptada")
let solicitud5 = new Solicitudes("Peligrosa", "Armas", "Busan", 95, 1, 4, "Pendiente")
let solicitud6 = new Solicitudes("Peligrosa", "Armas", "Busan", 95, 1, 4, "Pendiente")
listaDeSolicitudes.push(solicitud1, solicitud2, solicitud3, solicitud4, solicitud5, solicitud6)



