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

// elements

const profileEditBtn = document.querySelector("#profileEditBtn");
const profileEditModal = document.querySelector("#profileEditModal");



const profileCloseBtn = document.querySelector("#profileCloseBtn");
const profileCloseModal = document.querySelector("#profileCloseModal");

const profileTitle = doc.querySelector(js-profile-title);
const profileDescription = doc.querySelector(js - profile - description);

console.log(profileTitletextContent);

profileEditBtn = addEventListener("click", () => {
  profileEditModal.classList.add("modal__opened");
});
profileCloseBtn = addEventListener("click", () => {
  profileCloseModal.classList.remove("modal__opened");
});
