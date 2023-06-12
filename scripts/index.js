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

const profileEditBtn = document.querySelector("#profileEditBtn");
const profileEditModal = document.querySelector("#profileEditModal");
const profileCloseBtn = document.querySelector("#profileCloseBtn");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = document.querySelector(".modal__form");

function closePopup() {
  profileEditModal.classList.remove("modal__opened");
}

const cardImageEl = cardElement.querySelector(".card__image");
const cardTitleEl = cardElement.querySelector(".card__label-title");

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector("#cardsContainer");

profileTitleInput.value = profileTitle.textContent;
profileDescriptionInput.value = profileDescription.textContent;

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
}

initialCards.forEach((cardData) => {
  const cardElement = cardTemplate.cloneNode(true);
});

cardTitleEl.textContent = cardData.name;
cardImageEl.alt = cardData.name;
cardImageEl.src = cardData.link;
cardTitleEl.textcontent = cardData.name;

profileEditBtn.addEventListener("click", () => {
  profileEditModal.classList.add("modal__opened");
  profileCloseBtn.addEventListener("click", closePopup);
  profileEditForm.addEventListener("submit", handleProfileEditSubmit);
});

cardListEl.append(cardElement);
return cardElement;
