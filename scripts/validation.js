function showInputError(formElement, inputElement, config) {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  inputElement.classList.add(config.inputErrorClass);
  errorMessageElement.textContent = inputElement.validationMessage;
  errorMessageElement.classList.add(config.errorClass);
}
function hideInputError(formElement, inputElement, config) {
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

function toggleButtonState(inputElements, submitButton, config) {
  let foundInvalid = false;
  inputElements.forEach((input) => {
    if (!input.validity.valid) {
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
  const inputElements = [...formElement.querySelectorAll(config.inputSelector)];
  const submitButton = formElement.querySelector(config.submitButtonSelector);
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (_e) => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputElements, submitButton, config);
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

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error",
};

enableValidation(config);
