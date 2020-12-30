//1
let nombre = 8.56;

// 2 arrondir le + proche
arrondi = Math.round(nombre);
console.log(arrondi);

// 3 entier vers le haut
arrondiHaut = Math.ceil(nombre);
console.log(arrondiHaut);

// 4 arrondi bas
arrondiBas = Math.floor(nombre);
console.log(arrondiBas);

// 5 enlever parti decimal
entier = Math.trunc(nombre);
console.log(entier);

// 6 nbre aleatoire entre 0 - 1
let aleatoire = Math.random();
console.log(aleatoire);

// 7 nbre aleatoire entre 0 - 100
let nbre = Math.random() * 100
console.log(nbre);

// 8 nbre entier aleatoire entre 0 - 100
let nbre2 =  Math.round(Math.random()*100)
console.log(nbre2);

// 9 afficher 8 puissance 2
console.log(Math.pow(8,3));

// 10 racine carré de 9
console.log(Math.sqrt(9));

// 11 afficher valeur absolue de -1
console.log(Math.abs(-1));

//12 valeur laa + grande 
console.log(Math.max(-2, 1000, 8, 57));

//13 valeur laa + petite 
console.log(Math.min(-2, 1000, 8, 57));