/*
    Voy a querer un servicio donde el usuario pueda ingresar el texto que desea
    cifrar, ingrese el password

    y pueda elegir con un list, raddiobutton, o algo  el tipo de cifrado de AES

    128 , 192, 256

    me muestre el texto cifrado como salida:

    Si es de solito, en una pantalla descargable el archivo con formato, txt o doc o pdf

    y en otro servicio (otra pagina) se escriba la password y se seleccione el archivo y me muestre 

    el descifrado.


    Si es en equipo de 2 cliente - servidor descargable el archivo con formato, txt o doc o pdf

    en el segundo servicio que se escriba el password  y se seleccione el archivo y me descargue otro 
    
    archivo, con el texto descifrado en formato utf 8 y decodificado. 
*/

//validar cifrar

function validarc1(){
    var key=document.getElementById('password').value;
    var txt=document.getElementById('texto').value;
    if(txt==""){
        alert("El mensaje a cifrar no puede estar vacío");
    }else if(key.length != 16){
        alert("La contraseña debe de ser de 16 carácteres");
    }else{
        cifrar1(key,txt);
    }
}

function validarc2(){
    var key=document.getElementById('password').value;
    var txt=document.getElementById('texto').value;
    if(txt==""){
        alert("El mensaje a cifrar no puede estar vacío");
    }else if(key.length != 24){
        alert("La contraseña debe de ser de 24 carácteres");
    }else{
        cifrar2(key,txt);
    }
}

function validarc3(){
    var key=document.getElementById('password').value;
    var txt=document.getElementById('texto').value;
    if(txt==""){
        alert("El mensaje a cifrar no puede estar vacío");
    }else if(key.length != 32){
        alert("La contraseña debe de ser de 32 carácteres");
    }else{
        cifrar3(key,txt);
    }
}

//validar descifrar

function validard1(){
    var key=document.getElementById('password').value;
    var txt=document.getElementById('texto').value;
    if(txt==""){
        alert("El mensaje a descifrar no puede estar vacío");
    }else if(key.length != 16){
        alert("La contraseña debe de ser de 16 carácteres");
    }else{
        descifrar1(key,txt);
    }
}
function validard2(){
    var key=document.getElementById('password').value;
    var txt=document.getElementById('texto').value;
    if(txt==""){
        alert("El mensaje a descifrar no puede estar vacío");
    }else if(key.length != 24){
        alert("La contraseña debe de ser de 24 carácteres");
    }else{
        descifrar2(key,txt);
    }
}

function validard3(){
    var key=document.getElementById('password').value;
    var txt=document.getElementById('texto').value;
    if(txt==""){
        alert("El mensaje a descifrar no puede estar vacío");
    }else if(key.length != 32){
        alert("La contraseña debe de ser de 32 carácteres");
    }else{
        descifrar3(key,txt);
    }
}

//cifrados

function cifrar1(key,txt){
    var cifrado=CryptoJS.AES.encrypt(txt,key);
    var filename="cifradoAES16.txt"

    //alert("Todo bien");

    var element=document.createElement('a');
    element.style.display='none';

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cifrado));

    element.setAttribute('download', filename);
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function cifrar2(key,txt){
    var cifrado=CryptoJS.AES.encrypt(txt,key);
    var filename="cifradoAES24.txt"

    //alert("Todo bien");

    var element=document.createElement('a');
    element.style.display='none';

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cifrado));

    element.setAttribute('download', filename);
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function cifrar3(key,txt){
    var cifrado=CryptoJS.AES.encrypt(txt,key);
    var filename="cifradoAES32.txt"

    //alert("Todo bien");

    var element=document.createElement('a');
    element.style.display='none';

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cifrado));

    element.setAttribute('download', filename);
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

//descifrados

function descifrar1(key,txt){
    var descifrado=CryptoJS.AES.decrypt(txt,key);
    var filename="descifradoAES16.txt"

    //alert("Todo bien");
    document.getElementById('dtxt').innerHTML=descifrado;
    fdescifrado=descifrado.toString(CryptoJS.enc.Utf8);

    var element=document.createElement('a');
    element.style.display='none';

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fdescifrado));

    element.setAttribute('download', filename);
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function descifrar2(key,txt){
    var descifrado=CryptoJS.AES.decrypt(txt,key);
    var filename="descifradoAES24.txt"

    //alert("Todo bien");
    document.getElementById('dtxt').innerHTML=descifrado;
    fdescifrado=descifrado.toString(CryptoJS.enc.Utf8);

    var element=document.createElement('a');
    element.style.display='none';

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fdescifrado));

    element.setAttribute('download', filename);
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function descifrar3(key,txt){
    var descifrado=CryptoJS.AES.decrypt(txt,key);
    var filename="descifradoAES32.txt"

    //alert("Todo bien");
    document.getElementById('dtxt').innerHTML=descifrado;
    fdescifrado=descifrado.toString(CryptoJS.enc.Utf8);

    var element=document.createElement('a');
    element.style.display='none';

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fdescifrado));

    element.setAttribute('download', filename);
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}