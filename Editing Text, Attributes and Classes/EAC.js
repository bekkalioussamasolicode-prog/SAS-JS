let titre = document.getElementById("titre");
let image = document.querySelector("img");
let bouton = document.querySelector(".btn");

bouton.addEventListener("click", function () {
  titre.innerText = "Titre modifié !";
  titre.classList.toggle("highlight");
  image.setAttribute(
    "src",
    "https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg"
  );
  image.setAttribute("alt", "Nouvelle image");
});
