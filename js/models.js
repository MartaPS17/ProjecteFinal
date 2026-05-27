export function crearTasca(id, titol, descripcio, data, categoria, organitzacio, prioritat, categoriaNom, categoriaColor) {

  this.id = id;
  this.titol = titol;
  this.descripcio = descripcio;
  this.data = data;

  this.categoria = {
    nom: categoriaNom,
    color: categoriaColor

  };

  this.prioritat = prioritat
  this.realitzada = false;

  
}
