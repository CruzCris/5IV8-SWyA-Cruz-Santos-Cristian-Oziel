/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author crist
 */

import java.io.*;
import java.util.*;

public class CifradorAES {
    
    public static void main(String[] args) throws Exception{
        String mensaje="Hola ayuda por favor quiero llorar y dormir jeje, killjoy diff supremacy";
        String mensajeCifrado=AES.encrypt(mensaje);
        String mensajeDescifrado=AES.decrypt(mensajeCifrado);
        
        System.out.println("El mensaje ultra secreto es: "+mensaje);
        System.out.println("Mensaje cifrado AES 128: "+mensajeCifrado);
        System.out.println("Mensaje descifrado AES 128: "+mensajeDescifrado);
    }
    
}
