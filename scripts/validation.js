// step 1: validate the edit profile: 
//  both fields are required
//  name field must contain between 2 and 40 characters
//  about field must contain between 2 and 200 characters

// enabling validation by calling enableValidation()
// pass all the settings on call

function showInputError (formElement, inputElement, options) {
const errorMessageElement = formElement.querySelector('#' + inputElement.id + '--error');
}//1:02:45

function checkInputValidity (formElement, inputElement, options) {
if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, options);
} else {
  hideInputError();
}
}

function setEventListeners(formElement, options) {
    const {inputSelector} = options;
    const inputElements = [...formElement.querySelectorAll(options.formSelector)];
inputElements.forEach(inputElement) => {
    inputElements.addEventListener("input", (e) => {
    checkInputValidity(formElement, inputElement, options);
});
}};


function enableValidation(options) {
const formElements = [...document.querySelectorAll(options.formSelector)];
formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
        e.preventDefault();

    });
    setEventListeners(formElement, options);
});
}

/*function validationMessage(modal) {
    modal.classList.add("modal__error_visible");
  }

  function validationMessage(modal) {
    modal.classList.remove("modal__error_visible");
  }*/

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
};

enableValidation(config);
