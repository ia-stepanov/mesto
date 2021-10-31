export default class UserInfo {
  constructor({ profileNameSelector, profileAboutSelector, profileAvatarSelector }) {
    this._profileNameElement = document.querySelector(profileNameSelector);
    this._profileDescriptionElement = document.querySelector(profileAboutSelector);
    this._profileAvatarElement = document.querySelector(profileAvatarSelector);
  }

  getUserInfo() {
    return {
      userName: this._profileNameElement.textContent,
      userDescription: this._profileDescriptionElement.textContent
    }
  }

  setUserInfo({ userName, userDescription }) {
    this._profileNameElement.textContent = userName;
    this._profileDescriptionElement.textContent = userDescription;
  }

  setUserAvatar({ userAvatarLink }) {
    this._profileAvatarElement.src = userAvatarLink;
  }

  saveUserId(userId) {
    this._userId = userId;
  }

  getUserId() {
    return this._userId;
  }
}
