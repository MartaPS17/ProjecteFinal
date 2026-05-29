import { getLlistaCategoria, guardarLlistaCategories } from "./storage.js";

document.addEventListener('DOMContentLoaded', ()=> {const form = document.getElementById('formCategories');
const seccio = document.getElementById("seccioCategoriaCreada");

form.addEventListener('submit', function(event) {
  event.preventDefault();
  crearCategoria();
});

function crearCategoria() {
  const nom = document.getElementById('nomCategoria').value; 
  const color = document.getElementById('colorCategoria').value;

  const novaCategoria = {
    id: Date.now(),
    nom: nom,
    color: color
  };

  const llistaCategories = getLlistaCategoria(); 
  llistaCategories.push(novaCategoria);
  guardarLlistaCategories(llistaCategories); 

  alert("Categoria creada!");
  form.reset(); 


  pintarCategories();
}

function pintarCategories() {
  const seccio = document.getElementById("seccioCategoriaCreada");
  const llista = getLlistaCategoria(); // Recupera l'array d'objectes 

  seccio.innerHTML = ""; 

  if (llista.length === 0) {
    seccio.innerHTML = "<p>No hi ha categories creades.</p>";
    return;
  }

  llista.forEach((cat) => {
   
    if (cat && cat.nom) { 
      const div = document.createElement("div"); 
      div.textContent = `Categoria: ${cat.nom}`;
      
    
      if (cat.color) {
        div.style.borderLeft = `10px solid ${cat.color}`;
      }
      
      seccio.appendChild(div); 
    }
  });
}});

