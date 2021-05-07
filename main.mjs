import { marvel, starwars, langage, footballTeam, company } from "./theme.mjs";

const cards = document.querySelectorAll(".card");
let cardReturn = false;
let firstCard, secondCard;
let lock = false;
let win = 0;
let counter = 0;
cards.forEach((card) => {
  card.addEventListener("click", returnCard);
});

function returnCard() {
  if (lock) return;
  this.childNodes[1].classList.toggle("active");
  if (!cardReturn) {
    cardReturn = true;
    firstCard = this;
    return;
  }
  cardReturn = false;
  secondCard = this;
  counter++;
  correspondence();
  if (win === cards.length / 2) {
    setTimeout(() => {
      document.querySelector(".filter").style.display = "flex";
      document.querySelector(
        ".round"
      ).innerHTML = `Nombre d'essais : ${counter}`;
      document.querySelector(".restart").addEventListener("click", () => {
        window.location.reload();
      });
    }, 650);
  }
}

function correspondence() {
  if (
    firstCard.getAttribute("data-attr") === secondCard.getAttribute("data-attr")
  ) {
    firstCard.removeEventListener("click", returnCard);
    secondCard.removeEventListener("click", returnCard);
    win++;
    console.log(win);
  } else {
    lock = true;
    setTimeout(() => {
      firstCard.childNodes[1].classList.remove("active");
      secondCard.childNodes[1].classList.remove("active");
      lock = false;
    }, 1300);
  }
}
function random() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
}
random();
/***************** ACTION BUTTON THEME******************/

const btnTheme = document.querySelectorAll(".start");
const imgFace = document.querySelectorAll(".img-face");
const backFace = document.querySelectorAll(".back-face");
const title = document.querySelector(".title");
btnTheme.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".start-game").style.display = "none";
    if (btn.getAttribute("name") === "marvel") {
      document.body.style.background = marvel[0]["background"];
      backFace.forEach((face) => {
        face.style.background = marvel[0]["backgroundCard"];
      });
      title.setAttribute("src", "marvel/marvel.png");
      addCard(marvel);
    } else if (btn.getAttribute("name") === "starwars") {
      document.body.style.background = starwars[0]["background"];
      backFace.forEach((face) => {
        face.style.background = starwars[0]["backgroundCard"];
      });
      title.setAttribute("src", "starwars/starwars.png");
      addCard(starwars);
    } else if (btn.getAttribute("name") === "langage") {
      document.body.style.background = langage[0]["background"];
      backFace.forEach((face) => {
        face.style.background = langage[0]["backgroundCard"];
      });
      title.setAttribute("src", "langage/code.png");
      addCard(langage);
    } else if (btn.getAttribute("name") === "footballTeam") {
      document.body.style.background = footballTeam[0]["background"];
      backFace.forEach((face) => {
        face.style.background = footballTeam[0]["backgroundCard"];
      });
      title.setAttribute("src", "footballTeam/uefa.png");
      addCard(footballTeam);
    } else if (btn.getAttribute("name") === "company") {
      document.body.style.background = company[0]["background"];
      backFace.forEach((face) => {
        face.style.background = company[0]["backgroundCard"];
      });
      title.setAttribute("src", "company/gafam.png");
      addCard(company);
    }
  });
});

function addCard(theme) {
  let number = 0;
  for (let j = 1; j <= imgFace.length; j++) {
    imgFace[number].setAttribute("src", theme[j]["image"]);
    imgFace[number].setAttribute("alt", theme[j]["data"]);
    cards[number].setAttribute("data-attr", theme[j]["data"]);
    number++;
  }
}
