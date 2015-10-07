//creamos la conexion al websocket
var socket = new WebSocket("ws://localhost:54611/socket.ashx");
var usu = "";
//cuando se abra la conexion
socket.onopen = function (evt) {
    console.log("conex open");
    console.log(evt);
}

//cuando se cierre la conexion
socket.onclose = function (evt) {

    alert("Conexion finalizada");
}

//cuando aparezca algun error durante la conexion
socket.onerror = function (evt) {

    alert("Error");
    console.log(evt);
}

//cuando el servidor envie un mensaje
socket.onmessage = function (evt) {
    document.getElementById("ventanaChat").innerHTML += evt.data;
    console.log(evt);
}


function usuario() {
    usu = document.getElementById("txtNom").value;
    document.getElementById("divChat").style.display = "block";
    document.getElementById("divNombre").style.display = "none";
}

function enviar() {
    var texto = document.getElementById("txt").value;
    var obj =
    {
        ask: [{ text: texto }]

    };

    socket.send(JSON.stringify(obj));
}

document.getElementById("btnNom").addEventListener("click", usuario);
document.getElementById("btnEnviar").addEventListener("click", enviar);
