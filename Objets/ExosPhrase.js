let analyserPhrase = (phrase) => {
  let detailPhrase = {};
  // Séparer la phrase en mots
  detailPhrase.tabMots = phrase.split(" ").filter(Boolean);
  // Calculer la longueur totale
  detailPhrase.longueurTotale = detailPhrase.tabMots.length;
  // le nombre de mots
  detailPhrase.nbMot = detailPhrase.tabMots.length;

  // Trouver le mot le plus long

  detailPhrase.motLePlusLong = tabMots.reduce(
    (motActuel, motSuivant) =>
      motSuivant.length > motActuel.length ? motSuivant : motActuel,
    ""
  );
};
console.log(analyserPhrase("Label Blonde c'est pas du bidon"));
