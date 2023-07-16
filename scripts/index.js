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
const profileTitle = document.querySelector("#profile-title");
const profileDescription = document.querySelector("#profile-description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const cardAddTitle = document.querySelector("#cardAddTitle");
const cardAddLink = document.querySelector("#cardAddLink");
const cardAddTitleInput = document.querySelector("#cardAddTitleInput");
const cardAddLinkInput = document.querySelector("#cardAddLinkInput");
const addNewCardBtn = document.querySelector(".profile__add-button");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardAddForm = cardAddModal.querySelector(".modal__form");
const cardListEl = document.querySelector("#cardsContainer");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const previewImageModal = document.querySelector("#previewImageModal");

function createCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__label-title");
  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => {
    cardElement.remove("cardElement");
  });
  cardImageEl.addEventListener("click", () => {
    previewImageModal.classList.add("modal_opened");
    previewImageModal.querySelector.add(cardData.link);
    modalImage.src = cardData.name;
    modalImage.alt = cardData.link;

  });
  cardTitleEl.textContent = cardData.name;
  cardImageEl.alt = cardData.name;
  cardImageEl.src = cardData.link;
  return cardElement;
}
function closePopup() {
  profileEditModal.classList.remove("modal_opened");
  cardAddModal.classList.remove("modal_opened");
  previewImageModal.classList.remove("modal_opened"); 
}
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitle.value;
  profileDescription.textContent = profileDescription.value;
  closePopup();
}

function handleCardAddSubmit(e) {
  e.preventDefault();
  cardListEl.prepend(
    createCardElement({
      name: cardAddTitle.value,
      link: cardAddLink.value,
    })
  );
  closePopup();
}

initialCards.forEach((cardData) => {
  const cardElement = createCardElement(cardData);
  cardListEl.prepend(cardElement);
});

profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});
addNewCardBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  cardAddModal.classList.add("modal_opened");
});
profileCloseBtn.addEventListener("click", closePopup);
cardAddCloseBtn.addEventListener("click", closePopup);
previewCloseBtn.addEventListener("click", closePopup);
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
cardAddForm.addEventListener("submit", handleCardAddSubmit);
