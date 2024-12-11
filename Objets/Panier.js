const panier = [
  {
    produit: "Banane",
    prix: 1.5,
    quantite: 2,
  },
  {
    produit: "Abricot",
    prix: 10.8,
    quantite: 4,
  },
  {
    produit: "Pomme",
    prix: 1.8,
    quantite: 6,
  },
  {
    produit: "Mache",
    prix: 1.2,
    quantite: 10,
  },
  {
    produit: "Ananas",
    prix: 8.8,
    quantite: 12,
  },
];

let ajoutP = (produitAAjouter) => {
  if (!panier.includes(produitAAjouter)) {
    return panier.push(produitAAjouter);
  } else {
    return console.error("Erreur");
  }
};

let modifP = (produitAModifier, quantiteModifie) => {
  const index = panier.indexOf(produitAModifier);
  if (panier.includes(panier[index])) {
    panier[index].quantite = quantiteModifie;
    return panier;
  }
};

let totalProduit = () => {
  return panier.length;
};

console.table(panier);
ajoutP({
  produit: "Poire",
  prix: 7,
  quantite: 45,
});
console.table(panier);
modifP(panier[2], 7);
console.table(panier);
console.table("Nombre de produits ==> " + totalProduit());
