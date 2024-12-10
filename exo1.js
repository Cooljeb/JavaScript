const prompt = require("prompt-sync")({ sigint: true });

/*var n1 = +prompt("Saisir nombre 1 ? ==>");
var n2 = +prompt("Saisir nombre 2 ? ==>");*/
var n1 = parseInt(prompt("Saisir nombre 1 ? ==>"));
var n2 = parseInt(prompt("Saisir nombre 2 ? ==>"));

console.log("Addition :" + (n1 + n2));
console.log("Soustraction :" + (n1 - n2));
console.log("Multiplication :" + n1 * n2);
console.log("Division :" + n1 / n2);
