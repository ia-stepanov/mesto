let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__container')
let openPopupButton = document.querySelector('.profile__btn-edit');
let closePopupButton = document.querySelector('.popup__btn-close');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let inputName = document.querySelector('[name="profileName"]');
let inputAbout = document.querySelector('[name="profileAbout"]');

function openPopup() {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup();
}

function closePopupBackground (evt) {
  evt.stopPropagation();
}

popup.addEventListener('click', closePopup);
popupForm.addEventListener('click', closePopupBackground);
popupForm.addEventListener('submit', formSubmitHandler);
openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
