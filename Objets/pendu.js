//Prompt
//const prompt = require("..node_modules/prompt-sync")({ sigint: true });
// création du tableau de mot
const reserveMot = ["Java", "Python", "Kotlin", "Angular"];
//état initial
const partiel = "-";
//index aléatoire sélectionné
const aleatoire = () => {
  let index = Math.round(Math.random() * reserveMot.length);
  return index;
};
//console.log(aleatoire());

const motATrouver = reserveMot[aleatoire()];
const copieMotATrouver = motATrouver;
console.log(motATrouver);
copieMotATrouver.replace(copieMotATrouvermotATrouver, partiel);
console.log(copieMotATrouver);

//console.log(motATrouver);
const recherche = (lettreSaisie) => {
  const isPresent = motATrouver.split();
  mots.forEach((isPresent) => {
    if (isPresent.includes(lettreSaisie)) {
      tour;
    }
  });
  return isPresent;
};

//const phrase = prompt("saisir une phrase complète");
