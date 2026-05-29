import { getLlistaCategoria } from "./storage";

const form = document.getElementById('formTasca');

  form.addEventListener('submit', function(event){
    event.preventDefault();
    crearTasca();
  });

 const titol = document.getElementById("titol").value;
    const descripcio = document.getElementById("desc").value;
    const data = document.getElementById("data").value;
    const categoria = document.getElementById("categories").value;
    const prioritat = document.getElementById("prioritat").value;

    const novaTasca = {
      id: Date.now(),
      titol:titol,
      descripcio:descripcio,
      data:data,
      categoria: categoria,
      prioritat: prioritat
    };


    const selectCategories = document.getElementById("categories");

    function omplirDeplegableCategoria(){
      const triaCategoria = getLlistaCategoria();

      triaCategoria.forEach(categoria =>{
        const opcio = document.createElement("option");

        opcio.value=categoria.nom;
        opcio.textContent = categoria.Nom;

        selectCategories.appendChild(opcio);
      });
    }

    omplirDesplegableCategories();



    const llistaActual = getLlistaTasca();

    llistaActual.push(novaTasca);

    guardarLlistaTasques(llistaActual);

     alert("Tasca creada correctament!");
    form.reset(); 


