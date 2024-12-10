const avanceRecule = (nb1, nb2, operator) => {
  return operator(nb1, nb2);
};

const puissance = (a, b) => Math.pow(a, b);
const reste = (a, b) => a % b;

console.log(avanceRecule(10, 5, puissance));
console.log(avanceRecule(10, 5, reste));
