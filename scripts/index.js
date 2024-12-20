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
const cardAddModal = document.querySelector("#cardAddModal");
const cardAddForm = cardAddModal.querySelector(".modal__form");
const cardListEl = document.querySelector("#cardsContainer");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const previewImageModal = document.querySelector("#previewImageModal");
const modalImage = document.querySelector("#modalImage");
const modalText = document.querySelector("#modalText");
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
    openPopup(previewImageModal);
    modalImage.alt = cardData.name;
    modalImage.src = cardData.link;
    modalText.textContent = cardData.name;
  });
  cardTitleEl.textContent = cardData.name;
  cardImageEl.alt = cardData.name;
  cardImageEl.src = cardData.link;
  return cardElement;
}

function openPopup(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscape);
  console.log("BRITNEY SPEARS"); // why is it calling this 3X?
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleCardAddSubmit(e) {
  e.preventDefault();

  cardListEl.prepend(
    createCardElement({
      name: cardAddTitle.value,
      link: cardAddLink.value,

      renderCard(createCardElement) {},
    })
  );
  cardAddForm.reset();
  closePopup(cardAddModal);
}

initialCards.forEach((cardData) => {
  const cardElement = createCardElement(cardData);
  cardListEl.prepend(cardElement);
});

profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent.trim();
  profileDescriptionInput.value = profileDescription.textContent.trim();
  openPopup(profileEditModal);
});
addNewCardBtn.addEventListener("click", () => {
  openPopup(cardAddModal);
});
profileCloseBtn.addEventListener("click", () => closePopup(profileEditModal));
cardAddCloseBtn.addEventListener("click", () => closePopup(cardAddModal));
previewCloseBtn.addEventListener("click", () => closePopup(previewImageModal));
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
cardAddForm.addEventListener("submit", handleCardAddSubmit);
//change this to target the modal itself not the close button. inside the function that I call, check to see if evt.target is either close button or backdrop itself and not something inside the modal...if the evt.target has either: the class for modal itself or closebutton then modal close

//if evt.target contains classlist(modalsomething) then close
function handleEscape(evt) {
  if (evt.key == "Escape") {
    closePopup(cardAddModal);
    closePopup(profileEditModal);
    closePopup(previewImageModal);
  }
}

function handleOverlayClick(evt) {
  const isClickOutsideModalContainer = !evt.target.closest(".modal__container");
  const isClickOutsideImageContainer = !evt.target.closest(
    ".modal__image-container"
  );

  if (isClickOutsideModalContainer && isClickOutsideImageContainer) {
    closePopup(cardAddModal);
    closePopup(profileEditModal);
    closePopup(previewImageModal);
  }
}
