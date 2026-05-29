const llistesDeTasques = getLlistaTasca(); //Recupera dades
const contenidor = document.getElementById(llistaTasquesBody); //el lloc on es posen
const template = documentgetElementById(plantillaTasca)

llistesDeTasques.array.forEach(tasca => {
  const clon = template.content.cloneNode(true);
  
});