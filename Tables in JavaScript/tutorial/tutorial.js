let fruits = ["pomme", "banane", "cerise"];
console.log("Tableau initial :", fruits);

fruits.push("orange");
console.log("after push :", fruits);

fruits.pop();
console.log("after pop :", fruits);

fruits[1] = "kiwi";
console.log("Après modification :", fruits);

fruits.unshift("fraise");
console.log("Après unshift :", fruits);

fruits.shift();
console.log("Après shift :", fruits);

fruits.splice(1, 0, "ananas");
console.log("Après splice :", fruits);

console.log("boucle for :");
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

let produits = [
  { nom: "stylo", prix: 5 },
  { nom: "cahier", prix: 15 },
  { nom: "crayon", prix: 3 },
];

console.log("Liste des produits :");
produits.forEach((prnm) => console.log(`${prnm.nom} → ${prnm.prix} DH`));
