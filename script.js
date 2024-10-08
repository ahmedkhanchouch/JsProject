// console.log("Hello World");

// let motTapeOk = false // Essayez de mettre false à la place de true

// if (motTapeOk) {
//     console.log("Bravo, vous avez correctement tapé le mot")
// } else {
//     console.log("Échec, le mot n'est pas correct")
// }
const listeMots = ["Cachalot","Pétunia","Serviette"]; 
let score = 0;
let motTape = prompt("Tapez le mot:"+ listeMots[0]);
if (motTape === listeMots[0]) {
    score++; 
}
motTape = prompt("Tapez le mot:"+ listeMots[1]);
if (motTape === listeMots[1]) {
    score++; 
}
motTape = prompt("Tapez le mot:"+ listeMots[2]);
if (motTape === listeMots[2]) {
    score++; 
}

console.log(score)
//     console.log("Bravo, vous avez correctement tapé le mot")
// } else {
//     console.log("Échec, le mot n'est pas correct")
// }