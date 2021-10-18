export default class FormValidator {
  constructor(classData, formElement) {
    this._classData = classData;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(`.${this._classData.inputSelector}`));
    this._buttonElement = this._formElement.querySelector(`.${this._classData.buttonSubmitClass}`);
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._classData.activeErrorClass);
    inputElement.classList.add(this._classData.inputErrorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(this._classData.activeErrorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(this._classData.inputErrorClass);
  }

  resetValidation() {
    this.toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });
  }

  toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._classData.disableButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._classData.disableButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _hasInvalidInput() {
    return this._inputList.some(function (inputElement) {
      return !inputElement.validity.valid;
    });
  }
}
