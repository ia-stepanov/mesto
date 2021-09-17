function enableValidation(classData) {
  const formList = Array.from(document.forms);
  formList.forEach(function (formElement) {
    setEventListeners(formElement, classData);
  });
}

function setEventListeners(formElement, classData) {
  const inputList = Array.from(formElement.querySelectorAll(`.${classData.inputSelector}`));
  const buttonElement = formElement.querySelector(`.${classData.buttonSubmitClass}`);
  toggleButtonState(inputList, buttonElement, classData.disableButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, classData.activeErrorClass, classData.inputErrorClass);
      toggleButtonState(inputList, buttonElement, classData.disableButtonClass);
    });
  });
}

function checkInputValidity(formElement, inputElement, activeErrorClass, inputErrorClass) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, activeErrorClass, inputErrorClass);
  } else {
    hideInputError(formElement, inputElement, activeErrorClass, inputErrorClass);
  }
}

function showInputError(formElement, inputElement, validationMessage, activeErrorClass, inputErrorClass) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = validationMessage;
  errorElement.classList.add(activeErrorClass);
  inputElement.classList.add(inputErrorClass);
}

function hideInputError(formElement, inputElement, activeErrorClass, inputErrorClass) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove(activeErrorClass);
  errorElement.textContent = '';
  inputElement.classList.remove(inputErrorClass);
}

function toggleButtonState(inputList, buttonElement, disableButtonClass) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(disableButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(disableButtonClass);
    buttonElement.disabled = false;
  }
}

function hasInvalidInput(inputList) {
  return inputList.some(function (inputElement) {
    return !inputElement.validity.valid;
  });
}

enableValidation(classData);
