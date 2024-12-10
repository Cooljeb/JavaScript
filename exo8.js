const prompt = require("prompt-sync")({ sigint: true });

const nombreATrouver = Math.round(Math.random() * 99 + 1);
var essai = 1;

var saisie = parseInt(prompt(`Nombre à trouver ! essai N°${essai}`));
// essai 1
if (saisie === nombreATrouver) {
  console.log(
    `Bravo, tu as trouvé le nombre ${nombreATrouver} au bout de ${essai}`
  );
  process.exit();
} else {
  if (saisie > nombreATrouver) {
    console.log("le nombre à deviner est plus petit");
  } else {
    console.log("le nombre à deviner est plus grand");
  }
  essai++;
  saisie = 0;
} //essai 2
var saisie = parseInt(prompt(`Nombre à trouver ! essai N°${essai}`));
if (saisie === nombreATrouver) {
  console.log(
    `Bravo, tu as trouvé le nombre ${nombreATrouver} au bout de ${essai}`
  );
  process.exit();
} else {
  if (saisie > nombreATrouver) {
    console.log("le nombre à deviner est plus petit");
  } else {
    console.log("le nombre à deviner est plus grand");
  }
  essai++;
  saisie = 0;
}
//essai 3
var saisie = parseInt(prompt(`Nombre à trouver ! essai N°${essai}`));
if (saisie === nombreATrouver) {
  console.log(
    `Bravo, tu as trouvé le nombre ${nombreATrouver} au bout de ${essai}`
  );
  process.exit();
} else {
  if (saisie > nombreATrouver) {
    console.log("le nombre à deviner est plus petit");
  } else {
    console.log("le nombre à deviner est plus grand");
  }
  essai++;
  saisie = 0;
}
//essai 4
var saisie = parseInt(prompt(`Nombre à trouver ! essai N°${essai}`));
if (saisie === nombreATrouver) {
  console.log(
    `Bravo, tu as trouvé le nombre ${nombreATrouver} au bout de ${essai}`
  );
  process.exit();
} else {
  if (saisie > nombreATrouver) {
    console.log("le nombre à deviner est plus petit");
  } else {
    console.log("le nombre à deviner est plus grand");
  }
  essai++;
  saisie = 0;
}
//essai 5
var saisie = parseInt(prompt(`Nombre à trouver ! essai N°${essai}`));
if (saisie === nombreATrouver) {
  console.log(
    `Bravo, tu as trouvé le nombre ${nombreATrouver} au bout de ${essai}`
  );
  process.exit();
} else {
  console.log(
    `Perdu tu n'a plus d'essai max =>${essai}!!!, il fallait trouver le nombre ${nombreATrouver}`
  );
}
