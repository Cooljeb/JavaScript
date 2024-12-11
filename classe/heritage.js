class Vehicule {
  constructor(nomVehicule) {
    this.nomVehicule = nomVehicule;
  }
  getClasse() {
    return this.constructor.name;
  }

  seDeplacer() {
    console.log(
      `Je suis ${this.nomVehicule} et je suis un.e ${this.getClasse()}
      `
    );
  }
}

class Voiture extends Vehicule {
  klaxonner() {
    console.log(
      `${this.getClasse()} alias ${
        this.nomVehicule
      } : je peux klaxonner tagada tsouin tsouin`
    );
  }
}

class Bateau extends Vehicule {
  arretPort() {
    console.log(
      `${this.getClasse()} alias ${
        this.nomVehicule
      } : Je m'arrête dans un port, sinon je coule glouglouglou`
    );
  }
}

const v1 = new Vehicule("Bou");
const v2 = new Voiture("BouBou");
const v3 = new Bateau("BouBouBou");
v1.seDeplacer();
v2.seDeplacer();
v3.seDeplacer();
v2.klaxonner();
v3.arretPort();
