
const errorMessageElement = formElement.querySelector('#' + inputElement.id + '-error');


function showInputError (formElement, inputElement, options, { inputErrorClass, errorMessageElement } )
inputElement.classlist.add(inputErrorClass);
errorMessageElement.textContent = "";
errorMessageElement.classList.add(errorClass);

function hideInputError (formElement, inputElement, options, { inputErrorClass, errorMessageElement } )
inputElement.classlist.remove(inputErrorClass);
errorMessageElement.textContent = "";
errorMessageElement.classList.remove(errorClass);


function checkInputValidity (formElement, inputElement, options) {
if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, options);
} else {
  hideInputError();
}
}

function toggleButtonState(inputElements, submitButton) {
    const foundInvalid = false;
    inputElements.forEach(input => (
        if(!inputElement.validity.valid) {
            foundInvalid = true;
        
        }
    ));
    if(foundInvalid){
        submitButton.classList.add(inactiveButtonClass)
        submitButton.disabled = true;
    } else {submitButton.classList.remove(inactiveButtonClass)
        submitButton.disabled = false;

    }
}

function setEventListeners(formElement, options) {
    const {inputSelector} = options;
    const inputElements = [...formElement.querySelectorAll(options.formSelector)];
inputElements.forEach((inputElement) => {
    inputElements.addEventListener("input", (e) => {
    checkInputValidity(formElement, inputElement, options);
  
});
})};


function enableValidation(options) {
const formElements = [...document.querySelectorAll(options.formSelector)];
formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
        e.preventDefault();

    });
    setEventListeners(formElement, options);
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
