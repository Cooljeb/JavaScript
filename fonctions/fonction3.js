const calculateTotal = (price, taxRate) => {
  if (taxRate === 0 || taxRate == null || taxRate == undefined) {
    taxRate = 0.2;
    return price * taxRate;
  } else {
    return price * taxRate;
  }
};

// autre exemple avec saisie d'un nombre par défaut

const calculateTotal2 = (price, taxRate = 0.2) => price * taxRate;

console.log(calculateTotal(50));
console.log(calculateTotal(50, 0));
console.log(calculateTotal(50, 0.36));

console.log(calculateTotal2(70));
console.log(calculateTotal2(50, 0));
console.log(calculateTotal2(50, 0.36));
