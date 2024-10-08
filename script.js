// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
const listePhrases = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]
let score = 0


let choix = prompt("veillez choisir la liste :  mots ou phrases")

while (choix !== 'mots' && choix !== 'phrases') {
    choix = prompt("veillez choisir la liste :  mots ou phrases")
}

if (choix === 'mots') {
    for (let i = 0; i < listeMots.length; i++) {
        let motUtilisateur = prompt('Entrez le mot : ' + listeMots[i])
        if (motUtilisateur === listeMots[i]) {
            score++
        }
    
    }
} else {
    for (let i = 0; i < listePhrases.length; i++) {
        let phraseUtilisateur = prompt('Entrez la phrase : ' + listePhrases[i])
        if (phraseUtilisateur === listePhrases[i]) {
            score++
        }
    
    }
}


// Affichage du score de l'utilisateur
console.log("Votre score est de " + score + " sur " + listeMots.length)