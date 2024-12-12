class Robot {
  constructor(nom) {
    this.nom = nom;
    this.position = { x: 0, y: 0 };
    this.tabPositions = [];
    this.historyP = [];
  }

  seDeplacer(direction) {
    switch (direction.toLowerCase()) {
      case "haut":
        this.position.y++;

        break;
      case "bas":
        this.position.y--;
        break;
      case "gauche":
        this.position.x--;
        break;
      case "droite":
        this.position.x++;
        break;
      default:
        console.log(
          "Direction inconnue. Utilisez 'haut', 'bas', 'gauche' ou 'droite'."
        );
    }
  }
  nettoyer() {
    const positionT = `${this.position.x},${this.position.y}`;
    console.log(`La position (${positionT}) est propre :)`);
    this.tabPositions.push(`${positionT}`);

    this.historyP.push(`${positionT}`);
  }

  afficherPosition() {
    console.log(`position (${this.position.x},${this.position.y})`);
  }
  afficherHistorique() {
    "Historique de nettoyage " + console.table(this.historyP);
  }
}
const r1 = new Robot("Nono");

console.log(r1);
r1.afficherPosition();
r1.seDeplacer("gauche");
r1.afficherPosition();
r1.nettoyer();
r1.afficherHistorique();
r1.seDeplacer("gauche");
r1.seDeplacer("haut");
r1.nettoyer();
r1.afficherHistorique();
r1.afficherPosition();
