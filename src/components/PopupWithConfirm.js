import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.popup__form');
  }

  setEventListener() {
    this._formElement.addEventListener('submit', (evt) => this._handlerSubmitForm(evt));
    super.setEventListener();
  }

  changeHandlerSubmitForm(submitAction) {
    this._handlerSubmitForm = submitAction;
  }
}
