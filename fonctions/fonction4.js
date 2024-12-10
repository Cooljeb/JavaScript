const getFullName = (firstName, lastName) => {
  const capitalize = (chaine) => {
    return chaine.charAt(0).toUpperCase() + chaine.substring(1).toLowerCase();
  };
  capitalize(firstName);
  capitalize(lastName);
  return `${firstName} ${lastName}`;
};
//machaine2 = lastName.charA(0).toUpperCase() + lastName.substring(1);

console.log(getFullName("jean", "jacques"));
