const prompt = require("prompt-sync")({ sigint: true });

var age = +prompt("Quel est ton âge ?");
if (isNaN(age)) {
  console.error("Erreur de saisie sortie du programme!!!!");
  process.exit();
}
if (age > 18) {
  console.log("Vous êtes majeur");
} else {
  console.log("Vous êtes mineur");
}
