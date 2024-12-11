class Voiture {
  constructor(marque, modele) {
    this.marque = marque;
    this.modele = modele;
  }
  whoAmI() {
    console.log(
      `Voiture de la marque ${this.marque} avec le modèle ${this.modele}`
    );
  }
}
const v1 = new Voiture("Peugeot", "208");
const v2 = new Voiture("Audi", "A4");
v1.whoAmI();
v2.whoAmI();
