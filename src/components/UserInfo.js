export default class UserInfo {
  constructor({ profileNameSelector, profileAboutSelector }) {
    this._userNameElement = document.querySelector(profileNameSelector);
    this._userDescriptionElement = document.querySelector(profileAboutSelector);
  }

  getUserInfo() {
    return {
      userName: this._userNameElement.textContent,
      userDescription: this._userDescriptionElement.textContent
    }
  }

  setUserInfo({ userName, userDescription }) {
    this._userNameElement.textContent = userName;
    this._userDescriptionElement.textContent = userDescription;
  }
}
