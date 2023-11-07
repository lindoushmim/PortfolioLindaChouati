
//      partie pour le carroussel 
var angle = 0;
var currentImage = 1; // Pour garder une trace de l'image actuelle

// Tableau des descriptions correspondant à chaque image
var descriptions = [
    "Il s'agit d'un jeu en C++<br><a href='https://github.com/lindoushmim/LABYRINTHE-DU-TRESOR'>En savoir plus</a>",
    "Il s'agit d'une analyse de donnée en Python<br><a href='https://github.com/lindoushmim/donneePollution'>En savoir plus</a>",
    "Il s'agit d'un site Web pour gérer une école de danse<br><a href='https://github.com/lindoushmim/siteDanse'>En savoir plus</a>"
];


// Sélectionnez l'élément pour afficher la description
var descriptionElement = document.querySelector(".description");

// Fonction pour afficher la description
function showDescription() {
    descriptionElement.innerHTML = descriptions[currentImage - 1];
}

// Appeler la fonction d'affichage initial de la description lorsque la page se charge
window.onload = function () {
    showDescription();
};

function rotateCarousel(direction) {
    var spinner = document.querySelector(".spinner");
    angle += direction * 120; // 120 degrés par image
    spinner.style.transform = "rotateY(" + angle + "deg)";

    // Mettre à jour l'indice de l'image actuelle
    currentImage += direction;

    // Gérer le défilement circulaire du carrousel
    if (currentImage > 3) {
        currentImage = 1;
    } else if (currentImage < 1) {
        currentImage = 3;
    }

    // Mettre à jour la description affichée
    showDescription();
}


//      partie pour l icon menu 

// Récupérez l'élément de l'icône du menu, de la barre de navigation et des liens du menu
const menuIcon = document.getElementById('menu-icon');
const navBarre = document.querySelector('.navBarre');
const menuLinks = document.querySelectorAll('.menu.list-unstyled li a');

// Ajoutez un gestionnaire d'événement pour le clic sur l'icône du menu
menuIcon.addEventListener('click', function() {
    if (navBarre.style.display === 'block') {
        navBarre.style.display = 'none';
    } else {
        navBarre.style.display = 'block';
    }
});

// Ajoutez un gestionnaire d'événement pour le clic sur un lien du menu
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        navBarre.style.display = 'none'; // Masque la barre de navigation après avoir cliqué sur un lien
    });
});



