import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  _popupImage = this._popup.querySelector('.popup__image');

  open(imageLink, imageName) {
    this._popupImage.src = imageLink;
    this._popupImage.alt = imageName;
    this._popup.querySelector('.popup__description').textContent = imageName;

    super.open();
  }

}
