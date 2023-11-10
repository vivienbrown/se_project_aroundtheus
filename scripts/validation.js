// step 1: validate the edit profile: 
//  both fields are required
//  name field must contain between 2 and 40 characters
//  about field must contain between 2 and 200 characters

// enabling validation by calling enableValidation()
// pass all the settings on call

function setEventListeners() {

}

function enableValidation(options) {
const formElements = document.querySelectorAll(options.formSelector);
formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
        e.preventDefault();

    });
    setEventListeners(formElement. options)
});
}

const config {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

const enableValidation(config)
