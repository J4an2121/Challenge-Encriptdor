const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const figura = document.querySelector(".contenedor-figura");
const contenedor = document.querySelector(".contenedor-parrafo");
const resultado = document.querySelector(".texto-resultado");

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);

function encriptar() {
  ocultarAdelante();
  const cajatexto = recuperarTexto();
  resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
  ocultarAdelante();
  const cajatexto = recuperarTexto();
  resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
  const cajatexto = document.querySelector(".cajatexto");
  return cajatexto.value;
}

function ocultarAdelante() {
  figura.classList.add("ocultar");
  contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
  let texto = mensaje;
  let textoFinal = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal += "ai";
    } else if (texto[i] == "e") {
      textoFinal += "enter";
    } else if (texto[i] == "i") {
      textoFinal += "imes";
    } else if (texto[i] == "o") {
      textoFinal += "ober";
    } else if (texto[i] == "u") {
      textoFinal += "ufat";
    } else {
      textoFinal += texto[i];
    }
  }
  return textoFinal;
}

function desencriptarTexto(mensaje) {
  let texto = mensaje;
  let textoFinal = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal += "a";
    } else if (texto[i] == "e") {
      textoFinal += "e";
    } else if (texto[i] == "i") {
      textoFinal += "i";
    } else if (texto[i] == "o") {
      textoFinal += "o";
    } else if (texto[i] == "u") {
      textoFinal += "u";
    } else {
      textoFinal += texto[i];
    }
  }

  return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", function() {
  const contenido = document.querySelector(".texto-resultado").textContent;
  navigator.clipboard.writeText(contenido).then(function() {
    console.log("Texto copiado al portapapeles: " + contenido);
  }).catch(function(err) {
    console.error("Error al copiar el texto: ", err);
  });
});


