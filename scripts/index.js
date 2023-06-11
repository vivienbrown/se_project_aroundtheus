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
console.log(initialCards);

// edit button
const profileEditBtn = document.querySelector("#profileEditBtn");
const profileEditModal = document.querySelector("#profileEditModal");
profileEditBtn.addEventListener("click", () => {
  profileEditModal.classList.add("modal__opened");
});

// close button
function closePopup() {
  profileEditModal.classList.remove("modal__opened");
}

const profileCloseBtn = document.querySelector("#profileCloseBtn");
profileCloseBtn.addEventListener("click", closePopup);

// Input fields
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
profileTitleInput.value = profileTitle.textContent;
profileDescriptionInput.value = profileDescription.textContent;

// submit button
const profileEditForm = document.querySelector(".modal__form");
profileEditForm.addEventListener("submit", handleProfileEditSubmit);

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
}

//cards

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

initialCards.forEach((cardData) => {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");

  cardImageEl.textContent = cardData.link;

  const cardAltTextEl = cardElement.querySelector(".card__title");
  cardAltTextEl.textContent = cardData.name;

  cardTitleEl.textcontent = cardData.name;
  //  return the ready HTML element with the filled-in data
  return cardElement;
  const cardListEl = document.querySelector(".cards__list");
  cardListEl.append(cardElement);
});
