let mensajeingresado= 0;

function condicionesIniciales() {
    document.getElementById('Copiar').style.display='none';
    document.getElementById('texto').style.display='none';
    document.getElementById('texto').value='';
    document.getElementById('muñeco').style.display='block';
    document.getElementById('frame2').style.display='block';

    return;

}



function condicionesDesEncriptador1(){
    if(document.getElementById('IngresarTexto').value.length !=0){
        let tets =document.getElementById('IngresarTexto').value;
        let validar = new RegExp('[A-ZÁÉÍÓÚáéíóú0-9+$/*-+"#%&()=]')
        if(validar.test(tets)){
            condicionesIniciales();
            swal('CARACTERES NO VALIDOS','Ingresa solo letras minusculas y sin acento!','error');
            document.getElementById('IngresarTexto').value='';
          }else{
        document.getElementById('muñeco').style.display='none';
        document.getElementById('frame2').style.display='none';
        document.getElementById('Copiar').style.display='block';
        document.getElementById('texto').style.display='block';
        mensajeingresado=document.getElementById('IngresarTexto').value;
        document.getElementById('IngresarTexto').value='';
        }
    }else{
        swal('NO SE ENCUENTRA TEXTO','Ingresa un texto para Encriptar o Desencriptar!','info');
        condicionesIniciales();
    }
    return;
}

function encriptador1() {
    condicionesDesEncriptador1();
    var textoCifrado = mensajeingresado.replace(/e/gi, "enter").replace(/i/gi, "imes")
    .replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById('texto').innerHTML=textoCifrado;
    return;
}

function desencriptar1() {
    condicionesDesEncriptador1();
    var textodeSifrado = mensajeingresado.replace(/enter/gi, "e").replace(/imes/gi, "i")
    .replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById('texto').innerHTML=textodeSifrado;
    return;
}


function copiartexto() {
    var codigoACopiar = document.getElementById('texto');
    var seleccion = document.createRange();
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
        condicionesIniciales();
        swal('Boton Copiar','El texto ha sido copiado con Exito!','success');
       
}

function validar(elemento){
    let texto = elemento.value
    let validar = new RegExp("[^A-Za-z\#\&]+")
    if(validar.test(texto)){
      texto = texto.substr(0,texto.length-1)
    } else{
        // accion cuando no coincide
    }
    elemento.value = texto
  }
       

condicionesIniciales();

