
// /**
//  * Cette fonction affiche dans la console le score de l'utilisateur
//  * @param {number} score : le score de l'utilisateur
//  * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
//  */

function afficherResultat(score, nbMotsProposes) {
    let spanScore = document.querySelector(".zoneScore span");
    let affichageScore =` ${score} / ${nbMotsProposes}`;
    spanScore.innerHTML = affichageScore;
}


function afficherProposition (proposition) {
    let zoneProposition = document.querySelector(".zoneProposition");
    zoneProposition.innerText = proposition;
}

function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}


function lancerJeu() {
    // Initialisations
    initAddEventListenerPopup()
    let score = 0
    let i =0
    let listeProposition = listeMots

    let ButtonValiderMot = document.getElementById("btnValiderMot");
    let inputEcriture = document.getElementById("inputEcriture");
    afficherProposition(listeProposition[i])  
    ButtonValiderMot.addEventListener("click", () => {
        console.log(inputEcriture.value);
        
        if (inputEcriture.value === listeProposition[i]) {
            score++
        }
        i++
        afficherResultat(score, i)
        inputEcriture.value =''
        if (listeProposition[i]=== undefined ){
            afficherProposition("“Le jeu est fini”")
            ButtonValiderMot.disabled = true ;
        }else{
            afficherProposition(listeProposition[i])  
        }
});

    let BaliseSource = document.querySelectorAll(".optionSource input");
    for(let index = 0 ; index < BaliseSource.length ; index++){
        BaliseSource[index].addEventListener("change" , (event) => {
            console.log(event.target.value)
            if (event.target.value === "1"){
                listeProposition = listeMots
            }else{
                listeProposition = listePhrases
            }
            afficherProposition(listeProposition[i]) 
        })
    }

    let Form = document.querySelector("form")
    Form.addEventListener("submit", (event) => {
        event.preventDefault()
        let nom = document.getElementById("nom").value
        let email = document.getElementById("email").value
        console.log(nom, email);
        let scoreEmail = `${score} / ${i}`
        afficherEmail(nom, email, scoreEmail )
    })
    afficherResultat(score, i)
}
