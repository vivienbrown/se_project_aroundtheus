function showInputError (formElement, inputElement, { inputErrorClass, errorMessageElement })
const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`)
inputElement.classlist.add(inputErrorClass);
errorMessageElement.textContent = "Please fill in this field";
errorMessageElement.classList.add(errorClass);

function hideInputError (formElement, inputElement, { inputErrorClass, errorMessageElement } )
inputElement.classlist.remove(inputErrorClass);
errorMessageElement.textContent = "";
errorMessageElement.classList.remove(errorClass);


function checkInputValidity (formElement, inputElement, config) {
if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, config);
} else {
  hideInputError();
}
}

function toggleButtonState (inputElements, submitButton) {
    const foundInvalid = false;
    inputElements.forEach(input => (
        if(!inputElement.validity.valid) {
            foundInvalid = true;
        
        }
    ));
    if(foundInvalid) {
        submitButton.classList.add(inactiveButtonClass)
        submitButton.disabled = true;
    } else {
        submitButton.classList.remove(inactiveButtonClass)
        submitButton.disabled = false;
    }
}

function setEventListeners(formElement, config) {
    const {inputSelector} = config;
    const inputElements = [...formElement.querySelectorAll(config.formSelector)];
inputElements.forEach((inputElement) => {
    inputElements.addEventListener("input", (e) => {
    checkInputValidity(formElement, inputElement, config);
  
});
})};


function enableValidation(config) {
const formElements = [...document.querySelectorAll(config.formSelector)];
formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
        e.preventDefault();

    });
    setEventListeners(formElement, config);
});
}

function validationMessage(modal) {
    modal.classList.add("modal__error");
  }

  function validationMessage(modal) {
    modal.classList.remove("modal__error");
  }

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error"
};

enableValidation(config);