const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

//define variables

const profileEditBtn = document.querySelector("#profileEditBtn");
const profileEditModal = document.querySelector("#profileEditModal");
const profileCloseBtn = document.querySelector("#profileCloseBtn");
const profileTitle = document.querySelector("#profile-title");
const profileDescription = document.querySelector("#profile-description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

//variables for addcard modal

const cardAddTitle = document.querySelector("#cardAddTitle");
const cardAddLink = document.querySelector("#cardAddLink");
const cardAddTitleInput = document.querySelector("#cardAddTitleInput");
const cardAddLinkInput = document.querySelector("#cardAddLinkInput");

// add new card button
const addNewCardBtn = document.querySelector(".profile__add-button");

const profileEditForm = document.querySelector(".modal__form");
const cardAddForm = document.querySelector(".modal__form");

const cardListEl = document.querySelector("#cardsContainer");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

//define functions


//// move card create logic into a separate function -- this creates the actual new card, adding the card data to that new card including the styles. 
function createCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true); // clone the card template
  const cardImageEl = cardElement.querySelector(".card__image"); //add the image styles
  const cardTitleEl = cardElement.querySelector(".card__label-title"); //add the label styles

  cardTitleEl.textContent = cardData.name; //tells it to get the name and put it in the text content of the card title
  cardImageEl.alt = cardData.name; //same but in the alt text of the image
  cardImageEl.src = cardData.link; // same but with the link

  return cardElement; //will render the card on the page... so why isn't it happening?
}



function closePopup() {
  profileEditModal.classList.remove("modal_opened");
  cardAddModal.classList.remove("modal_opened");
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
}

// inside your handleCardAddSubmit function -- this is where I tell it to make the new card and what information to save inside it. It then can be used in the forEach loop (is this what it means to parse?)
function handleCardAddSubmit(e) { //gives the function a name that tells me what it's for
  createCardElement({ //tells James where to put the function - on the create card element function that I defined earlier... so a function to a function? and then what details to include 
    name: cardAddTitleInput.value, //whatever I put as the title
    link: cardAddLinkInput.value //whatever I put as the URL
  })
};
/* previous code
function handleCardAddSubmit(e) {
  e.preventDefault();
  cardAddTitle.textContent = cardAddTitleInput.value;
  cardAddLink.textContent = cardAddLinkInput.value;
  closePopup();
}
*/

// identifies the cards and adds a new card to the end of the list I guess ???

// inside the forEach -- for each card this is going to identify the element to attach the cardData and where to put it (at the beginning of the list of cards. the card element is the new card that it is going to add to the card list. it will add the card data (name and link) to the card element and then add that element to the card list.)
initialCards.forEach((cardData) => {
  const cardElement = createCardElement(cardData);
  cardListEl.prepend(cardElement);
});

/* 
my previous code
initialCards.forEach((cardData) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__label-title");

  cardTitleEl.textContent = cardData.name;
  cardImageEl.alt = cardData.name;
  cardImageEl.src = cardData.link;

  cardListEl.prepend(cardElement);
  return cardElement;
});
*/

//event listeners

profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});
addNewCardBtn.addEventListener("click", () => { //this tells James (james = JavaScript) that when I click the add button he is to open up the add modal. I need to break down what these two lines are saying to him
  profileTitleInput.value = profileTitle.textContent; //the input is the field, the value is whatever textcontent is added
  profileDescriptionInput.value = profileDescription.textContent;
  cardAddModal.classList.add("modal_opened");
});

profileCloseBtn.addEventListener("click", closePopup);
cardAddCloseBtn.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
cardAddForm.addEventListener("submit", handleCardAddSubmit);




