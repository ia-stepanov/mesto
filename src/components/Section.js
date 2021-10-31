export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerElement = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }

  addNewItem(item) {
    this._containerElement.prepend(item);
  }

  addItem(item) {
    this._containerElement.append(item);
  }
}
