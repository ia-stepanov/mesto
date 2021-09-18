const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileAbout = profile.querySelector('.profile__about');
const profileEditButton = profile.querySelector('.profile__btn-edit');
const addCardButton = profile.querySelector('.profile__btn-add');

const popups = Array.from(document.querySelectorAll('.popup'));

const popupEdit = document.querySelector('.popup_edit');
const popupEditForm = popupEdit.querySelector('[name="profileData"]');
const inputName = popupEdit.querySelector('[name="profileName"]');
const inputAbout = popupEdit.querySelector('[name="profileAbout"]');

const popupAdd = document.querySelector('.popup_add');
const popupAddForm = popupAdd.querySelector('[name="placeData"]');
const inputPlaceName = popupAdd.querySelector('[name="placeName"]');
const inputPlaceLink = popupAdd.querySelector('[name="placeLink"]');

const inputList = Array.from(popupAddForm.querySelectorAll(`.${classData.inputSelector}`));
const buttonElement = popupAddForm.querySelector(`.${classData.buttonSubmitClass}`);

const cardsElement = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template').content;

const popupPhotos = document.querySelector('.popup_photos');
const popupPhotosImage = popupPhotos.querySelector('.popup__image');
const popupPhotosDescription = popupPhotos.querySelector('.popup__description');


function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscapeClick);
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscapeClick);
}


function openPopupEdit() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  openPopup(popupEdit);
}

function handleSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupEdit);
}


function generateCard(card) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardsElementImage = cardElement.querySelector('.element__image');

  cardsElementImage.src = card.link;
  cardsElementImage.alt = card.name;
  cardElement.querySelector('.element__caption').textContent = card.name;

  cardsElementImage.addEventListener('click', openPopupPhotos);
  cardElement.querySelector('.element__btn-like').addEventListener('click', handleLikeButtonClick);
  cardElement.querySelector('.element__btn-trash').addEventListener('click', handleRemoveButtonClick);

  return cardElement;
}

function handleSubmitCard(evt) {
  evt.preventDefault();
  const cardElement = generateCard({
    name: inputPlaceName.value,
    link: inputPlaceLink.value
  });
  cardsElement.prepend(cardElement);
  popupAddForm.reset();
  toggleButtonState(inputList, buttonElement, classData.disableButtonClass);
  closePopup(popupAdd);
}

function openPopupPhotos(evt) {
  popupPhotosImage.src = evt.target.src;
  popupPhotosImage.alt = evt.target.alt;
  popupPhotosDescription.textContent = evt.target.alt;
  openPopup(popupPhotos);
}

initialCards.forEach (card => {
  cardsElement.append( generateCard(card) );
});


function handleLikeButtonClick(evt) {
  evt.target.classList.toggle('element__btn-like_active');
}

function handleRemoveButtonClick(evt) {
  evt.target.closest('.element').remove();
}


function closePopupEscapeClick(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}


popups.forEach((element) => {
  element.addEventListener('mousedown', function (evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(element);
    }
    if (evt.target.classList.contains('popup__btn-close')) {
      closePopup(element);
    }
  });
})


profileEditButton.addEventListener('click', openPopupEdit);
popupEditForm.addEventListener('submit', handleSubmitProfile);
addCardButton.addEventListener('click', () => openPopup(popupAdd));
popupAddForm.addEventListener('submit', handleSubmitCard);
