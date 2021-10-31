(()=>{"use strict";var e={inputSelector:"popup__input",buttonSubmitClass:"popup__btn-save",disableButtonClass:"popup__btn-save_disabled",inputErrorClass:"popup__input_type_error",activeErrorClass:"popup__input-error_visible"},t=document.querySelector(".profile"),n=t.querySelector(".profile__btn-edit"),r=t.querySelector(".profile__btn-add"),o="#card-template";function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){var n=t.headers,r=t.baseUrl;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=n,this._baseUrl=r}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("".concat(e.status," ").concat(e.statusText))}},{key:"getUserInfo",value:function(){var e=this._baseUrl+"/users/me";return fetch(e,{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){var e=this._baseUrl+"/cards";return fetch(e,{headers:this._headers}).then(this._checkResponse)}},{key:"getPageNeedData",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}},{key:"updateUserInfo",value:function(e){var t=this._baseUrl+"/users/me";return fetch(t,{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){var t=this._baseUrl+"/cards";return fetch(t,{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"removeCard",value:function(e){var t=this._baseUrl+"/cards/".concat(e);return fetch(t,{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addCardLike",value:function(e){var t=this._baseUrl+"/cards/likes/".concat(e);return fetch(t,{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteCardLike",value:function(e){var t=this._baseUrl+"/cards/likes/".concat(e);return fetch(t,{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"updateProfileAvatar",value:function(e){var t=this._baseUrl+"/users/me/avatar";return fetch(t,{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}}])&&i(t.prototype,n),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){var n=t.data,r=t.isUserCard,o=t.cardSelector,i=t.handleCardClick,a=t.handleLikeButtonClick,s=t.handleRemoveButtonClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._isUserCard=r,this._imageLink=n.link,this._imageName=n.name,this._name=n.name,this._countLikes=n.likes.length,this._cardId=n._id,this._cardSelector=o,this._handleCardClick=i,this._handleLikeButtonClick=a,this._handleRemoveButtonClick=s}var t,n;return t=e,(n=[{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(t){e._handleLikeButtonClick(t)})),this._isUserCard&&this._cardElement.querySelector(".element__btn-trash").addEventListener("click",(function(t){e._handleRemoveButtonClick(t)})),this._cardsElementImage.addEventListener("click",(function(){return e._handleCardClick()}))}},{key:"_getTemplateElement",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"getCardId",value:function(){return this._cardId}},{key:"generateCard",value:function(){return this._cardElement=this._getTemplateElement(),this._likeButton=this._cardElement.querySelector(".element__btn-like"),this._isUserCard||this._cardElement.querySelector(".element__btn-trash").remove(),this._cardsElementImage=this._cardElement.querySelector(".element__image"),this._cardsElementImage.src=this._imageLink,this._cardsElementImage.alt=this._imageName,this._countLikeElement=this._cardElement.querySelector(".element__like-count"),this._cardElement.querySelector(".element__caption").textContent=this._name,this._countLikeElement.textContent=this._countLikes,this._setEventListeners(),this._cardElement}},{key:"setLikeCount",value:function(e){this._countLikeElement.textContent=e,this._likeButton.classList.toggle("element__btn-like_active")}},{key:"isLiked",value:function(){return this._likeButton.classList.contains("element__btn-like_active")}}])&&s(t.prototype,n),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._classData=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(".".concat(this._classData.inputSelector))),this._buttonElement=this._formElement.querySelector(".".concat(this._classData.buttonSubmitClass))}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));t.textContent=e.validationMessage,t.classList.add(this._classData.activeErrorClass),e.classList.add(this._classData.inputErrorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));t.classList.remove(this._classData.activeErrorClass),t.textContent="",e.classList.remove(this._classData.inputErrorClass)}},{key:"resetValidation",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._classData.disableButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._classData.disableButtonClass),this._buttonElement.disabled=!1)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}}])&&c(t.prototype,n),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerElement=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addNewItem",value:function(e){this._containerElement.prepend(e)}},{key:"addItem",value:function(e){this._containerElement.append(e)}}])&&f(t.prototype,n),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListener",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__btn-close")&&e.close()}))}}])&&h(t.prototype,n),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},v(e,t,n||e)}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function b(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._formElement=n._popup.querySelector(".popup__form"),n._formElementSubmitButton=n._formElement.querySelector(".popup__btn-save"),n._inputList=n._formElement.querySelectorAll(".popup__input"),n._handlerSubmitForm=t,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"getFormValues",value:function(){return this._getInputValues()}},{key:"getFormElement",value:function(){return this._formElement}},{key:"close",value:function(){this._formElement.reset(),v(g(a.prototype),"close",this).call(this)}},{key:"setEventListener",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){return e._handlerSubmitForm(t)})),v(g(a.prototype),"setEventListener",this).call(this)}},{key:"isLoadingMessage",value:function(e){this._formElementSubmitButton.textContent=!0===e?"Сохранение...":"Сохранить"}}])&&_(t.prototype,n),a}(d);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},S(e,t,n||e)}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}function O(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return I(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function a(){var e;w(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return P(I(e=i.call.apply(i,[this].concat(n))),"_popupImage",e._popup.querySelector(".popup__image")),P(I(e),"_popupName",e._popup.querySelector(".popup__description")),e}return t=a,(n=[{key:"open",value:function(e,t){this._popupImage.src=e,this._popupImage.alt=t,this._popupName.textContent=t,S(j(a.prototype),"open",this).call(this)}}])&&C(t.prototype,n),a}(d);function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t,n){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},q(e,t,n||e)}function B(e,t){return B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},B(e,t)}function T(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._formElement=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"setEventListener",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){return e._handlerSubmitForm(t)})),q(A(a.prototype),"setEventListener",this).call(this)}},{key:"changeHandlerSubmitForm",value:function(e){this._handlerSubmitForm=e}}])&&D(t.prototype,n),a}(d);function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t){var n=t.profileNameSelector,r=t.profileAboutSelector,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileNameElement=document.querySelector(n),this._profileDescriptionElement=document.querySelector(r),this._profileAvatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._profileNameElement.textContent,userDescription:this._profileDescriptionElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,n=e.userDescription;this._profileNameElement.textContent=t,this._profileDescriptionElement.textContent=n}},{key:"setUserAvatar",value:function(e){var t=e.userAvatarLink;this._profileAvatarElement.src=t}},{key:"saveUserId",value:function(e){this._userId=e}},{key:"getUserId",value:function(){return this._userId}}])&&x(t.prototype,n),e}();function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=new a({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-29",headers:{authorization:"9a15705e-c3d0-477e-8f81-f6228da5acbc","Content-Type":"application/json"}}),H=new V({profileNameSelector:".profile__name",profileAboutSelector:".profile__about",profileAvatarSelector:".profile__avatar"}),J=new p({renderer:function(e){var t=Z(e,o);J.addItem(t)}},".elements__list"),z=new k(".popup_form_avatar",(function(e){e.preventDefault(),z.isLoadingMessage(!0);var t=z.getFormValues();M.updateProfileAvatar({avatar:t.url}).then((function(){z.close()})).catch((function(e){console.error(e)})).finally((function(){z.isLoadingMessage(!1)}))}));z.setEventListener();var $=new l(e,z.getFormElement());$.enableValidation(),document.querySelector(".profile__avatar-edit").addEventListener("click",(function(){$.resetValidation(),z.open()})),M.getPageNeedData().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];H.setUserInfo({userName:i.name,userDescription:i.about}),H.setUserAvatar({userAvatarLink:i.avatar}),H.saveUserId(i._id),J.renderItems(o)})).catch((function(e){console.error(e)}));var G=new k(".popup_form_edit",(function(e){e.preventDefault(),G.isLoadingMessage(!0);var t=G.getFormValues();M.updateUserInfo({name:t.title,about:t.subtitle}).then((function(e){H.setUserInfo({userName:e.name,userDescription:e.about}),G.close()})).catch((function(e){console.error(e)})).finally((function(){G.isLoadingMessage(!1)}))}));G.setEventListener();var K=new l(e,G.getFormElement());K.enableValidation();var Q=new k(".popup_form_add",(function(e){e.preventDefault(),Q.isLoadingMessage(!0);var t=Q.getFormValues(),n={name:t.name,link:t.url};M.addNewCard(n).then((function(e){var t=Z(e,o);J.addNewItem(t),Q.close()})).catch((function(e){console.error(e)})).finally((function(){Q.isLoadingMessage(!1)}))}));Q.setEventListener();var W=new l(e,Q.getFormElement());W.enableValidation();var X=new N(".popup_form_confirm");X.setEventListener();var Y=new R(".popup_viewer");function Z(e,t){var n=H.getUserId()===e.owner._id,r=new u({data:e,isUserCard:n,cardSelector:t,handleCardClick:function(){Y.open(e.link,e.name)},handleLikeButtonClick:function(){r.isLiked()?M.deleteCardLike(r.getCardId()).then((function(e){r.setLikeCount(e.likes.length)})).catch((function(e){console.error(e)})):M.addCardLike(r.getCardId()).then((function(e){r.setLikeCount(e.likes.length)})).catch((function(e){console.error(e)}))},handleRemoveButtonClick:function(e){var t=e.target.closest(".element"),n=r.getCardId();X.changeHandlerSubmitForm((function(e){e.preventDefault(),M.removeCard(n).then((function(){t.remove(),X.close()})).catch((function(e){console.error(e)}))})),X.open()}});return r.generateCard()}Y.setEventListener(),n.addEventListener("click",(function(){var e=H.getUserInfo(),t=G.getFormElement();t.elements.name.value=e.userName,t.elements.description.value=e.userDescription,K.resetValidation(),G.open()})),r.addEventListener("click",(function(){W.resetValidation(),Q.open()}))})();