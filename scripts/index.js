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
profileCloseBtn.addEventListener("click", () => {
  closePopup();
});

// Input fields

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
profileTitleInput.value = profileTitle.textContent;
profileDescriptionInput.value = profileDescription.textContent;

const profileEditForm = document.querySelector(".modal__form");
profileEditForm.addEventListener(submit, (e) => {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
});
