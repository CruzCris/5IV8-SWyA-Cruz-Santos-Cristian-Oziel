var cesar=cesar || (function (){
    var proceso = function(txt, desp, action){
        var reemplazo = (function(){
            //en el cuerpo principal de la funcion del callback debemos de empezar
            //a definir los elementos necesarios para el cifrado
            var abc=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
            's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            var l=abc.length;
            //debemos de retornar  la posicion del caracter
            return function(c){
                //variable para iterar en mi arreglo del abc
                var i=abc.indexOf(c.toLowerCase());
                if(i!=-1){
                    //asegurarse q este dentro de mi rango
                    var pos=i;
                    if(action){
                        //cifrar (avanza)
                        pos += desp;
                        //nuestro limite es el tamaño del abc, por lo tanto tenemos
                        //q darle vueltas y vueltas sobre el mismo tamaño
                        pos -= (pos>=l)?l:0;
                    }else{
                        //descifrar (retrocede}
                        pos -=desp;
                        pos +
                    }
                    //tengo que retornar la pos
                    return abc[pos];
                }
                //retornar el caracter o la posicion del caracter
                return c;
            };
        })();
        //necesito una expresion regular para mi abc
        var re=(/[a-z]/ig);
        //esta es la funcion que se encarga del reemplazo acorde a la posicion
        //que esta obteniendo respecto al caracter para recorrer el abc
        return String(txt).replace(re, function(match){
            return replace(match);
        });
    };
    //hay que definier la accion a realizar en el algoritmo
    return {
        encode: function(txt, desp){
            return proceso(txt, desp, true);
        },
        decode: function(txt, desp){
            return proceso(txt, desp, false);
        }
    };
});

//ahora vamos a realizar la correspondiente funcion 
//codificar o cifrar
function cifrar(){
    document.getElementById("resultado").innerHTML=cesar.encode(document.getElementById("cadena").value, 3);
}
//decodificar o descifrqar
function descifrar(){
    document.getElementById("resultado").innerHTML=cesar.decode(document.getElementById("cadena").value, 3);
}