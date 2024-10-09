// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur

let score = 0



if (choix === 'mots') {
    
} else {
    for (let i = 0; i < listePhrases.length; i++) {
        let phraseUtilisateur = prompt('Entrez la phrase : ' + listePhrases[i])
        if (phraseUtilisateur === listePhrases[i]) {
            score++
        }
        
    }
}


// Affichage du score de l'utilisateur
function afficherResultat(score,nbMotsProposes) { 
    console.log("Votre score est de " + score + " sur " + nbMotsProposes)
    
}

function choisirPhrasesOuMots() {
    let choix = prompt("veillez choisir la liste :  mots ou phrases")
    while (choix !== 'mots' && choix !== 'phrases') {
        choix = prompt("veillez choisir la liste :  mots ou phrases")
    }
    return choix
}

function lancerBoucleDeJeu (listePropositions) {
    for (let i = 0; i < listePropositions.lenght; i++) {
        let motUtilisateur = prompt('Entrez le mot : ' + listePropositions[i])
        if (motUtilisateur === listePropositions[i]) {
            score++
        }
        return score
    }
}


function lancerJeu() {
    let choix = choisirPhrasesOuMots()
    let score = 0 ;
    let nbMotsProposes = 0 ; 
    
    if( choix === 'mots'){
        lancerBoucleDeJeu(listeMots)
    }else{
        lancerBoucleDeJeu(listePhrases)
    }
    
    afficherResultat(score,nbMotsProposes)
}