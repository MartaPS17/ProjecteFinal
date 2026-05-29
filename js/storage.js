

const TASCA_KEY = 'dataTasca';
const LLISTA_TASQUES_KEY = 'llistaTasques';
const CATEGORIA_KEY = 'dataCategoria';
const LLISTA_CATEGORIES_KEY = 'llistaCategories';

/*Gestió tasques*/ 

export function guardarTasca(tasca){
  localStorage.setItem(TASCA_KEY, JSON.stringify(tasca));
  
}

function getTasca() {
  const dades = localStorage.getItem(TASCA_KEY);
  return dades ? JSON.parse(dades) : null;
}

//Recuperar llista

export function guardarLlistaTasques(llista){
  localStorage.setItem(LLISTA_TASQUES_KEY, JSON.stringify(llista));

}

export function getLlistaTasca(){
  try {const dades = localStorage.getItem(LLISTA_TASQUES_KEY);
  return dades ? JSON.parse(dades) : [];
} catch (error){
  console.error("Erroramb el parse:", error);
  return[];
}
}

/*CATEGORIES*/

export function guardarCategoria(Categoria){
  const categoriaJSON = JSON.stringify(Categoria);
  localStorage.setItem(CATEGORIA_KEY, JSON.stringify(Categoria));
}


export function getCategoria(){
  const dataCategoria = localStorage.getItem(CATEGORIA_KEY);
  return dades ? JSON.parse(dades) : null;
}
//Llista categories. 

export function getLlistaCategoria(){
  const dades = localStorage.getItem(LLISTA_CATEGORIES_KEY);
  return dades ? JSON.parse(dades) : [null];
}

export function guardarLlistaCategories(llista){
  const dadesLlista = JSON.stringify(llista);
  localStorage.setItem(LLISTA_CATEGORIES_KEY, dadesLlista);
}

const opcio = document.getElementById("categories");