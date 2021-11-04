/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pkg08_firmadigital_clavesarchivo;

/**
 *
 * @author crist
 */

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.security.AccessControlContext;
import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.Security;

import java.security.spec.AlgorithmParameterSpec;
import java.security.spec.PKCS8EncodedKeySpec;

import javax.crypto.*;

import javax.crypto.interfaces.*;
import javax.crypto.spec.*;
import org.bouncycastle.jce.provider.BouncyCastleProvider;

public class FirmaDigitalArchivos {
    
    public static void main(String[] args) throws Exception{
        
        if(args.length != 1){
            mensajeAyuda();
            System.exit(1);
        }
        
        System.out.println("Crea los archivos: "+args[0]+".secreta "
            +args[0]+".publica "+args[0]+".privada");
        
        //añadir el provedor
        
        Security.addProvider(new BouncyCastleProvider());
        
        //generamos la clave de rsa
        
        KeyPairGenerator generadorRSA=KeyPairGenerator.getInstance("RSA", "BC");
        
        //inicializamos
        
        generadorRSA.initialize(1024);
        
        KeyPair clavesRSA=generadorRSA.genKeyPair();
        
        //privada y publica
        PrivateKey clavePrivada=clavesRSA.getPrivate();
        
        PublicKey clavePublica=clavesRSA.getPublic();
        
        //keyfactory para la instancia de la llave con rsa
        
        KeyFactory keyfactoryRSA=KeyFactory.getInstance("RSA", "BC");
        
        /*
        vamos a volcar la clave privada con el fichero segun las normas
        de la firma digital con rsa para ello vamos a codificarlo con PKCS8
        */
        
        PKCS8EncodedKeySpec pkcs8spec=new PKCS8EncodedKeySpec(clavePrivada.getEncoded());
        
        //vamos a escribirla en un archivo
        
        FileOutputStream out=new FileOutputStream(args[0]+".privada");
        out.write(pkcs8spec.getEncoded());
        out.close();
        
        //vamos a recuperar la clave privada del fichero
        
        byte[] bufferpriv=new byte[5000];
        FileInputStream in=new FileInputStream(args[0]+".privada");
        in.read(bufferpriv, 0, 5000);
        in.close();
        
        //recuperamos la clave privada desde los datos codificados en formato PKCS8
        
        PKCS8EncodedKeySpec clavePrivadaSpec=new PKCS8EncodedKeySpec(bufferpriv);
        //clave privada de firma
        PrivateKey clavePrivada2=keyfactoryRSA.generatePrivate(clavePrivadaSpec);
        
        //validacion de la clave para saber si el archivo coincide con la clave
        
        if(clavePrivada.equals(clavePrivada2)){
            System.out.println("Ok, la clave privada ha sido guardada y recuperada");
        }
        
        /*
        vamos a volcar la clave publica en un archivo bajo el estandar como
        lo establece la norma x.509
        */
        
        X509EncodedKeySpec x509spec=X509EncodedKeySpec(clavePublica.getEncoded());
        
        //vamos a escribir el archivo
        
        out=new FileOutputStream(args[0]+".publica");
        out.write(x509spec.getEncoded());
        out.close();
        
        //vamos a recuperar la clave publica del archivo
        
        byte[] bufferpub=new byte[5000];
        in=new FileInputStream(args[0]+".publica");
        in.read(bufferpub, 0, 5000);
        in.close();
        
        //recuperamos y validamos que sea la correcta
        
        X509EncodedKeySpec clavePublicaSpec=new X509EncodedKeySpec(bufferpub);
        
        PublicKey clavePublica2=keyfactoryRSA.generatePublic(clavePublicaSpec);
        
        if(clavePublica.equals(clavePublica2)){
            System.out.println("Ok, la clave publica ha sido guardada y verificada");
        }
        
        //vamos a crear una instancia DES
        
        KeyGenerator generadorDES=KeyGenerator.getInstance("DES");
        generadorDES.init(56);
        SecretKey claveSecretaDES=generadorDES.generateKey();
        
        /*
        vamos a crear un secretkeyfactory usando las transformaciones de la 
        clave secreta para poder cifrar un mensaje, firmarlo y verificarlo
        */
        
        SecretKeyFactory secreteyFactoryDES=SecretKeyFactory.getInstance("DES");
        
        
        
    }

    private static void mensajeAyuda() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
