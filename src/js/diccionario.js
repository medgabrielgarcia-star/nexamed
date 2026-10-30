async function cargarTerminos(){
  try{
    const respuesta = await fetch("src/datos/terminos.json");

    if(!respuesta.ok){
    throw new Error("No se pudieron cargar los términos médicos.")
  }

  const terminos = await respuesta.json();

  return terminos;
  } catch(error){
    console.error("Error", error)
  }
}

function mostrarTerminos(terminos) {
  const contenedor = document.getElementById("lista__terminos");

  contenedor.innerHTML = "";

  terminos.slice(0, 6).forEach((termino) => {
    const elemento = document.createElement("article");

    elemento.classList.add("tarjeta__termino");

    elemento.innerHTML = `
      <h3>${termino.termino}</h3>
      <p>${termino.definicion}</p>
      <span>${termino.categoria}</span>
    `;

    contenedor.appendChild(elemento);
  });
}


let terminosMedicos = [];

cargarTerminos().then((terminos)=> {
  terminosMedicos = terminos;
  mostrarTerminos(terminosMedicos);
})