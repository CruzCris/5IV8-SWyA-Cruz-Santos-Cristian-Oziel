//cargar estatico el mensaje y la llave

var mensaje="tengo sueño y quiero dormir";

var password="hslapqur";

//parte importante

var cifrado=CryptoJS.AES.encrypt(mensaje, password);

var descifrado=CryptoJS.AES.decrypt(cifrado, password);

document.getElementById("demo0").innerHTML=mensaje;
document.getElementById("demo1").innerHTML=cifrado;
document.getElementById("demo2").innerHTML=descifrado;
document.getElementById("demo3").innerHTML=descifrado.toString(CryptoJS.enc.Utf8);