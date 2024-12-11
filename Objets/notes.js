const etudiant = [
  { nom: "John", note: 18 },
  { nom: "Joe", note: 19 },
  { nom: "Alice", note: 17 },
  { nom: "Manon", note: 19 },
  { nom: "Mia", note: 20 },
];

const getStudentNote = (noteIndiquee) => {
  const avg =
    etudiant.reduce((totale, etudiant) => totale + etudiant.note) /
    etudiant.length;

  const noteStudent = etudiant.filter(
    (etudiant) => etudiant.note > noteIndiquee
  );

  return avg, noteStudent;
};

console.table(getStudentNote(18));
