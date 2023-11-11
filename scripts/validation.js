// step 1: validate the edit profile: 
//  both fields are required
//  name field must contain between 2 and 40 characters
//  about field must contain between 2 and 200 characters

// enabling validation by calling enableValidation()
// pass all the settings on call

function setEventListeners(formElement, options) {
    const {inputSelector} = options;
    const inputElements = [...formElement.querySelectorAll(options.formSelector)];
inputElements.forEach
}

function enableValidation(options) {
const formElements = [...document.querySelectorAll(options.formSelector)];
formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
        e.preventDefault();

    });
    setEventListeners(formElement, options);
});
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
};

enableValidation(config);
