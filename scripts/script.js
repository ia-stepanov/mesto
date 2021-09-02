const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const profileEditButton = document.querySelector('.profile__btn-edit');
const profileAddButton = document.querySelector('.profile__btn-add');

const popupEdit = document.querySelector('.popup-edit');
const popupEditForm = popupEdit.querySelector('[name="profileData"]');
const inputName = popupEdit.querySelector('[name="profileName"]');
const inputAbout = popupEdit.querySelector('[name="profileAbout"]');
const closePopupEditButton = popupEdit.querySelector('.popup__btn-close');

const popupAdd = document.querySelector('.popup-add');
const popupAddForm = popupAdd.querySelector('[name="placeData"]');
const inputPlaceName = popupAdd.querySelector('[name="placeName"]');
const inputPlaceLink = popupAdd.querySelector('[name="placeLink"]');
const closePopuppAddButton = popupAdd.querySelector('.popup__btn-close');

const cardsElement = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template').content;

const popupPhotos = document.querySelector('.popup-photos');
const closePopupPhotos = popupPhotos.querySelector('.popup-photos__btn-close');


function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}


function openPopupEdit() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  openPopup(popupEdit);
}

function savePopupEdit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupEdit);
}


function addElement(card) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__image').src = card.link;
  cardElement.querySelector('.element__image').alt = card.name;
  cardElement.querySelector('.element__caption').textContent = card.name;

  cardElement.querySelector('.element__image').addEventListener('click', openPopupPhotos);
  cardElement.querySelector('.element__btn-like').addEventListener('click', likeButton);
  cardElement.querySelector('.element__btn-trash').addEventListener('click', removeButton);

  return cardElement;
}

function addPlaceElement(evt) {
  evt.preventDefault();
  const cardElement = addElement({
    name: inputPlaceName.value,
    link: inputPlaceLink.value
  });
  cardsElement.prepend(cardElement);
  popupAddForm.reset();
  closePopup(popupAdd);
}

function openPopupPhotos(evt) {
  popupPhotos.querySelector('.popup-photos__image').src = evt.target.src;
  popupPhotos.querySelector('.popup-photos__image').alt = evt.target.alt;
  popupPhotos.querySelector('.popup-photos__title').textContent = evt.target.alt;
  openPopup(popupPhotos);
}

initialCards.forEach (card => {
  cardsElement.append( addElement(card) );
});


function likeButton(evt) {
  evt.target.classList.toggle('element__btn-like_active');
}

function removeButton(evt) {
  evt.target.closest('.element').remove();
}


profileEditButton.addEventListener('click', openPopupEdit);
closePopupEditButton.addEventListener('click', () => closePopup(popupEdit));
popupEditForm.addEventListener('submit', savePopupEdit);

profileAddButton.addEventListener('click', () => openPopup(popupAdd));
closePopuppAddButton.addEventListener('click', () => closePopup(popupAdd));
popupAddForm.addEventListener('submit', addPlaceElement);

closePopupPhotos.addEventListener('click', () => closePopup(popupPhotos));
