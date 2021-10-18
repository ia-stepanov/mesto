import './index.css';
import {
  initialCards,
  classData,
  profileNameSelector,
  profileAboutSelector,
  profileEditButton,
  addCardButton,
  popupProfileSelector,
  popupNewPlaceSelector,
  popupPhotosSelector,
  cardsContainerSelector,
  cardSelector,
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

const userInfo = new UserInfo({ profileNameSelector, profileAboutSelector });


function createNewCard(item, cardSelector) {
  const card = new Card(item, cardSelector, () => {
    popupPhotos.open(item.link, item.name);
  });
  return card.generateCard();
}


const popupPhotos = new PopupWithImage(popupPhotosSelector);
popupPhotos.setEventListener();


const cards = new Section({
  items: initialCards, renderer: (item) => {
    const cardElement = createNewCard(item, cardSelector);
    cards.addItem(cardElement);
  },
}, cardsContainerSelector);
cards.renderItems();


const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  const formValues = popupProfile.getFormValues();
  userInfo.setUserInfo({ userName: formValues.title, userDescription: formValues.subtitle });
  popupProfile.close();
});
popupProfile.setEventListener();
const popupProfileValidator = new FormValidator(classData, popupProfile.getFormElement());
popupProfileValidator.enableValidation();


const popupNewPlace = new PopupWithForm(popupNewPlaceSelector, (evt) => {
  evt.preventDefault();
  const formValues = popupNewPlace.getFormValues();
  const item = { name: formValues.name, link: formValues.url };
  const cardElement = createNewCard(item, cardSelector);
  cards.addNewItem(cardElement);
  popupNewPlace.close();
});
popupNewPlace.setEventListener();
const popupNewPlaceValidator = new FormValidator(classData, popupNewPlace.getFormElement());
popupNewPlaceValidator.enableValidation();


profileEditButton.addEventListener('click', () => {
  const userInfoData = userInfo.getUserInfo();
  const profileForm = popupProfile.getFormElement();
  profileForm.elements.name.value = userInfoData.userName;
  profileForm.elements.description.value = userInfoData.userDescription;
  popupProfileValidator.resetValidation();
  popupProfile.open();
});


addCardButton.addEventListener('click', () => {
  popupNewPlaceValidator.toggleButtonState();
  popupNewPlaceValidator.resetValidation();
  popupNewPlace.open();
});
