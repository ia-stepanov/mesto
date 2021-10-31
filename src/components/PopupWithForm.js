import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handlerSubmitForm) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.popup__form');
    this._formElementSubmitButton = this._formElement.querySelector('.popup__btn-save');
    this._inputList = this._formElement.querySelectorAll('.popup__input');
    this._handlerSubmitForm = handlerSubmitForm;
  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  getFormValues() {
    return this._getInputValues();
  }

  getFormElement() {
    return this._formElement;
  }

  close() {
    this._formElement.reset();
    super.close();
  }

  setEventListener() {
    this._formElement.addEventListener('submit', (evt) => this._handlerSubmitForm(evt));
    super.setEventListener();
  }

  isLoadingMessage(isLoading) {
    if (isLoading === true) {
      this._formElementSubmitButton.textContent = 'Сохранение...';
    } else {
      this._formElementSubmitButton.textContent = 'Сохранить';
    }
  }
}
