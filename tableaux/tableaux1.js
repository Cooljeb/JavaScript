let produits = ["Saxophone", "Guitare", "Trompette"];

let ajoutP = (p) => {
  produits.push(p);
};

let recherP = (p) => {
  if (produits.includes(p)) {
    // rec
    return produits.indexOf(p);
  }
};

let verifP = (p) => {
  if (produits.includes(p)) {
    return true;
  } else {
    return false;
  }
};

let supprP = (p) => {
  let indexp = recherP(p);
  if (verifP) {
    produits.splice(indexp, 1);
    console.log(`Produit ${p} supprimé du tableau`);
  } else {
    console.log("Produit inconnu du tableau");
  }
};
ajoutP("Clarinette");
console.table(produits);

console.table(verifP("Saxophone"));
supprP("Saxophone");
