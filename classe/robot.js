class Robot {
  constructor(nom, position) {
    this.nom = nom;
    this.position = { x: 0, y: 0 };
  }

  seDeplacer(direction) {
    switch (direction.toLowerCase()) {
      case "haut":
        this.position.y += 1;
        break;
      case "bas":
        this.position.y -= 1;
        break;
      case "gauche":
        this.position.x -= 1;
        break;
      case "droite":
        this.position.x += 1;
        break;
      default:
        console.log(
          "Direction non reconnue. Utilisez 'haut', 'bas', 'gauche' ou 'droite'."
        );
    }
  }
  nettoyer() {
    console.log(
      `La position (${this.position.x},${this.position.y}) est propre :)`
    );
  }
  afficherPosition() {
    console.log(`position (${this.position.x},${this.position.y})`);
  }
}
const r1 = new Robot("Nono");

console.log(r1);
r1.afficherPosition();
r1.seDeplacer("gauche");
r1.afficherPosition();
r1.nettoyer();
