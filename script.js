//Variables modifiants l'html
var score = document.querySelector("#score");
var answer = document.querySelector("#answer");
var choice = document.querySelector("#choice");
let alphabetArr=[];
let scoreCount = 0;
let maxScore = 8;

//Avoir des mots à trouver
const wordsToFind = [
    'BONJOUR', 'BECODE', 'DANTE', 'MIKE', 'JAVASCRIPT', 'FRONTEND', 'BACKEND', 'FULLSTACK', 'SOUFFRIR',
    'CORDE', 'TABOURET', 'COURAGE', 'ENTRAIDE', 'AMBIANCE', 'HTML', 'CSS', 'JAVA', 'PHP',
    'DEVELOPPEUR', 'LINUX', 'MAC', 'WINDOWS', 'ORDINATEURS', 'LOVE', 'CYBERSECURITE', 'DOMOTIQUE',
    'VEILLE', 'SOMMEIL', 'MANGER', 'CAFE', 'REDBULL'];
//console.log(wordsToFind);

//Prendre un mot au hasard et l'afficher
var word = wordsToFind[Math.floor(Math.random() * wordsToFind.length)];
console.log(word);
document.getElementById("answer").textContent = word;

//Afficher l'alphabet

/*for(i=65; i<=90; i++){
    alphabetArr.push(String.fromCharCode(i));
};
choice.innerHTML = "<li>" + alphabetArr.toString().replace(/,/g, " ") + "</li>";
console.log(choice.innerHTML);*/

//Rendre les touches interactives

choice.addEventListener("click", ({target}) => {
   if(target.matches('li')){
    console.log(target.innerHTML)
    scoreCount++;
   }
});

//Faire fonctionner les touches

//Rendre les toucher transparentes / barrées si utilisées

//Avoir un score basé sur les erreurs non commises

//Afficher le score

//Afficher la réponse

wordArr = word.split("");
console.log(wordArr);

//Avoir un bouton "New Game"

//Avoir une phrase indice

//Afficher les images

//Afficher les lettres au fur et à mesure

//Avoir un écran de victoire
//Avoir un écran de défaite

//Ajouter du son