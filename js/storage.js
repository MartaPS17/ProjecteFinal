const tascaKey = 'dataTasca';
const categoriaKey = 'dataCategoria';



function guardarTasca(tasca){
  const tascaJSON = JSON.stringify(tasca);
  localStorage.setItem('tascaActual', tascaJSON);
  
}

function getTasca() {
  const dades = localStorage.getItem(tascaKey);
  return dades ? JSON.parse(dades) : null;
}

//Recuperar llista

function getLlista(){
  const dades = localStorage.getItem();
  return dades ? JSON.parse(dades) : [];
}

function guardarLlista(llista){
  const dadesText = JSON.stringify(llista);
  localStorage.setItem('tasques', dadesText);

}

/*CATEGORIES*/

function guardarCategoria(Categoria){
  const categoriaJSON = JSON.stringify(Categoria);
  localStorage.setItem('categoriaNova', categoriaJSON);
}


function getCategoria(){
  const dataCategoria = localStorage.getItem('categoriaNova');
  return dades ? JSON.parse(dades) : null;
}

//Llista categories. Guardar i recuperar

function getLlistaCategoria(){
  const dades = localStorage.getItem('llistaCategories');
  return dades ? JSON.parse(dades) : [null];
}

function guardarLlista(llista){
  const dadesLlista = JSON.stringify(llista);
  localStorage.setItem('llistaCategories', dadesLlista);
}