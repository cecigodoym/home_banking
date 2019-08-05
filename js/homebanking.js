//Declaración de variables

var nombreUsuario = "Juan Carlos Godoy";

var saldoCuenta = 3500;

var limiteExtraccion = 1000;

var servicioAgua = 350; 

var servicioTelefono = 425;

var servicioLuz = 210; 

var servicioInternet = 570;

var cuentaAmiga1 = 1234567;

var cuentaAmiga2 = 7654321;

var claveInicio = 1234;

// funcion sumar dinero

var sumarDinero = function(monto){
    saldoCuenta += monto;
}

// funcion restar dinero

var restarDinero = function(montoResto){
    saldoCuenta -= montoResto;
}

// funcion restar dinero

var cambiarLimiteExtraccion = function(cambiarLimite){
    limiteExtraccion = cambiarLimite;
}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var limiteExtraccion = parseInt(prompt('Ingresa el nuevo límite de extracción'));
    cambiarLimiteExtraccion(limiteExtraccion);
    alert("Tu nuevo límite de extracción es: $" + limiteExtraccion);
    actualizarLimiteEnPantalla(limiteExtraccion);
}


function extraerDinero() {
    
    var montoExtraccion = parseInt(prompt("¿Cuánto dinero querés extraer?"));

    if ( montoExtraccion > limiteExtraccion) {
        alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extracción.");
    } else if ( montoExtraccion > saldoCuenta ) {
        alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
    } else if ( montoExtraccion % 100 !== 0 ) {
        alert("Solo puedes extraer billetes de 100.");
    } else {
        var saldoAnterior = saldoCuenta;
            restarDinero(montoExtraccion);
            alert("Has retirado: $"+ montoExtraccion +".\n"+"Tu saldo anterior: $" + saldoAnterior +".\n"+"Tu saldo actual: $" + saldoCuenta);
            actualizarSaldoEnPantalla(saldoCuenta);
    }


}


function depositarDinero() {
    var montoDeposito = parseInt(prompt('¿Cuánto dinero querés depositar?'));
    var saldoAnterior = saldoCuenta;
    sumarDinero(montoDeposito);
    alert("Depositaste: $"+ montoDeposito +".\n"+"Tu saldo anterior: $" + saldoAnterior +".\n"+"Tu saldo actual: $" + saldoCuenta);
    actualizarSaldoEnPantalla(saldoCuenta);

}


function pagarServicio() {
    var servicio = prompt("Ingrese el numero que corresponda con el servicio que quiera pagar.\n1- Agua.\n2- Telefono.\n3- Luz.\n4- Internet.")
    switch (servicio) {
        case "1":
            if ( servicioAgua > saldoCuenta ) {
                alert("No hay saldo suficiente en tu cuenta para pagar este servicio.");
            } else {
                var saldoAnterior = saldoCuenta;
                restarDinero(servicioAgua);
                alert("Has pagado el servicio de agua.\nTu saldo anterior: $"+ saldoAnterior +".\n"+"Dinero descontado: $" + servicioAgua +".\n"+"Tu saldo actual: $" + saldoCuenta);
                actualizarSaldoEnPantalla(saldoCuenta);
            }

        break;

        case "2":
        if ( servicioTelefono > saldoCuenta ) {
            alert("No hay saldo suficiente en tu cuenta para pagar este servicio.");
        } else {
            var saldoAnterior = saldoCuenta;
            restarDinero(servicioTelefono);
            alert("Has pagado el servicio de agua.\nTu saldo anterior: $"+ saldoAnterior +".\n"+"Dinero descontado: $" + servicioTelefono +".\n"+"Tu saldo actual: $" + saldoCuenta);
            actualizarSaldoEnPantalla(saldoCuenta);
        }


        break;
        case "3":
        if ( servicioLuz > saldoCuenta ) {
            alert("No hay saldo suficiente en tu cuenta para pagar este servicio.");
        } else {
            var saldoAnterior = saldoCuenta;
            restarDinero(servicioLuz);
            alert("Has pagado el servicio de agua.\nTu saldo anterior: $"+ saldoAnterior +".\n"+"Dinero descontado: $" + servicioLuz +".\n"+"Tu saldo actual: $" + saldoCuenta);
            actualizarSaldoEnPantalla(saldoCuenta);
        }

        break;
        case "4":
        if ( servicioInternet > saldoCuenta ) {
            alert("No hay saldo suficiente en tu cuenta para pagar este servicio.");
        } else {
            var saldoAnterior = saldoCuenta;
            restarDinero(servicioInternet);
            alert("Has pagado el servicio de agua.\nTu saldo anterior: $"+ saldoAnterior +".\n"+"Dinero descontado: $" + servicioInternet +".\n"+"Tu saldo actual: $" + saldoCuenta);
            actualizarSaldoEnPantalla(saldoCuenta);
        }
        break;
        default:
        alert("No existe el servicio que se ha seleccionado.");
    }   

}

function transferirDinero() {
    var montoTransferencia = parseInt(prompt("¿Cuánto dinero desea transferir?"));

    if ( montoTransferencia >= saldoCuenta) {
        alert("No hay saldo disponible en tu cuenta para transferir esa cantidad de dinero.");
    } else {
    var cuentaTransferir = parseInt(prompt("Ingrese número de cuenta a transferir."));
    if ( cuentaTransferir !== cuentaAmiga1 && cuentaTransferir !== cuentaAmiga2 ) {
        alert("Solo puede transferirse dinero a una cuenta amiga.");
    } else {
                restarDinero(montoTransferencia);
                alert("Se ha transferido: $"+ montoTransferencia +".\n"+"Cuenta destino: " + cuentaTransferir);
                actualizarSaldoEnPantalla(saldoCuenta);
    }

    }

}

function iniciarSesion() {
    var claveIngresada = prompt("Ingrese tu clave para iniciar sesión.");
    if ( claveIngresada == claveInicio ) {
        alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones.")
        cargarNombreEnPantalla();
        actualizarSaldoEnPantalla();
        actualizarLimiteEnPantalla();
        
    } else {
        restarDinero(saldoCuenta);
        alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.")
    }


}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
