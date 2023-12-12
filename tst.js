const abc = [{titulo: "dani"},
             {titulo: "vini"}];

let titulos = '';
for(const art of abc) {
   titulos += `titulo:${art.titulo}\n`
   
   console.log(titulos);
}            

