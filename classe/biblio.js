/*
Créez une classe Livre avec des propriétés comme titre et auteur. 
Créez ensuite une classe Bibliotheque qui :
1.Permet d’ajouter des livres. 
2.Recherche un livre par son titre. 
*/

class Livre {
  constructor(titre, auteur) {
    this.titre = titre;
    this.auteur = auteur;
  }

  setTitre(titre) {
    this.titre = titre;
  }
  getTitre() {
    return this.titre;
  }

  setAuteur(auteur) {
    this.auteur = auteur;
  }
  getAuteur() {
    return this.auteur;
  }
}

class Bibliotheque {
  constructor(nom) {
    this.nom = nom;
    this.tablivres = [];
  }

  ajouterLivre(livre) {
    this.tablivres.push(livre);
    console.log("Ajout effectué avec succès !");
  }

  rechercherLivre(nomDuLivre) {
    const livreTrouve = this.tablivres.find(
      (livre) => livre.getTitre() === nomDuLivre
    );

    if (livreTrouve) {
      return livreTrouve;
    } else {
      console.error("Livre inconnu");
      return null;
    }
  }

  afficherBib() {
    console.table(this.tablivres);
  }
}

//Création des livres
const l1 = new Livre("Java pour les Nuls", "Les Nuls en Java");
const l2 = new Livre("20000 Lieux sous les mers", "Jules Vernes");
const l3 = new Livre("Cuisine d'Asie", "Cooking With Morgane");

//Création de la bibliothèque

const b1 = new Bibliotheque("Ma Bibliothèques");

// ajout
b1.ajouterLivre(l1);
console.log(b1.rechercherLivre(l1.getTitre()));
b1.afficherBib();
