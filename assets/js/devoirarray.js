function exercice1() {
let mon_tableau = ["chat", "chien", "oiseau"];
let resultat = mon tableau.pop()
let mon_tableau = ["chat", "chien", "."];
let element = "oiseau";
mon_tableau.unshift(element);
document.getElementById("exercice1Resultat").innerHTML
}

                  
function exercice2() {
let mon_tableau = ["Le", "chat", "dort", "."];
let separateur = " ";
let resultat = mon_tableau.join(espace);
document.getElementById("exercice2Resultat").innerHTML
}


function exercice3() {
let resultat = mon_tableau.join(espace);
document.getElementById("exercice3Resultat").innerHTML
}
 

function exercice4() {
let tableau = ["Voici mon premier paragraphe", "Il s'agit de mon deuxième paragraphe", " Et le dernier"];
let resultat = mon_tableau.join(espace);
let liste = "<ul>"
tableau.forEach(element => liste += "<li>" + element + "</li>"); 
liste += "</ul>"; 
document.getElementById("forEachHolder").innerHTML = liste;

let mon_tableau = ["Voici mon premier paragraphe", "Il s'agit de mon deuxième paragraphe", " Et le dernier"];
let separateur = ",";
let resultat = mon_tableau.join(separateur);
document.getElementById("exercice4Resultat").innerHTML
}

               
                 