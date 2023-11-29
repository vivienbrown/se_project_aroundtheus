function showInputError(formElement, inputElement, config) {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  inputElement.classList.add(config.inputErrorClass);
  errorMessageElement.textContent = inputElement.validationMessage;
  errorMessageElement.classList.add(config.errorClass);
}

function hideInputError(formElement, inputElement) {
  inputElement.classList.remove(config.inputErrorClass);
  const errorMessageElement = document.querySelector(
    `#${inputElement.id}-error`
  );
  errorMessageElement.textContent = inputElement.validationMessage;
  errorMessageElement.classList.remove(config.errorClass);
}

function checkInputValidity(formElement, inputElement, config) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
}

function toggleButtonState(inputElements, submitButton) {
  const foundInvalid = false;
  inputElements.forEach((value) => {
    if (foundInvalid) {
      foundInvalid = true;
    }
  });
  if (foundInvalid) {
    submitButton.classList.add(config.inactiveButtonClass);
    submitButton.disabled = true;
  } else {
    submitButton.classList.remove(config.inactiveButtonClass);
    submitButton.disabled = false;
  }
}

function setEventListeners(formElement, config) {
  //const { inputSelector } = config;
  const inputElements = [...formElement.querySelectorAll(config.inputSelector)];
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("value", (e) => {
      checkInputValidity(formElement, inputElement, config);
    });
  });
}

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
<<<<<<< HEAD
  modal.classList.add(inputErrorClass);
}

function validationMessage(modal) {
  modal.classList.remove(inputErrorClass);
=======
  modal.classList.add("modal__error");
}

function validationMessage(modal) {
  modal.classList.remove("modal__error");
>>>>>>> parent of 4447f6a... add unused class to span els
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error",
};

enableValidation(config);
