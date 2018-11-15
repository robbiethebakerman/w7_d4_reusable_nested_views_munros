const PubSub = require('../helpers/pub_sub.js');

const MunroView = function (munro, container) {
  this.munro = munro;
  this.container = container;
};

MunroView.prototype.render = function () {
  const divWrapper = document.createElement('div');
  divWrapper.classList.add('munro-view');

  const name = this.createTextElement('h2', this.munro.name, 'munro-name');
  divWrapper.appendChild(name);

  const infoList = this.createInfoList();
  divWrapper.appendChild(infoList);

  this.container.appendChild(divWrapper);
};

MunroView.prototype.createTextElement = function (type, textContent, cssClass) {
  const element = document.createElement(type);
  element.textContent = textContent;
  element.classList.add(cssClass);
  return element;
};

MunroView.prototype.createInfoList = function () {
  const list = document.createElement('ul');
  list.classList.add('munro-info-list');
  const height = this.createTextElement('li', `Height: ${this.munro.height}`, 'munro-info-list-height');
  const meaning = this.createTextElement('li', `Meaning of "${this.munro.name}": ${this.munro.meaning}`, 'munro-info-list-meaning');
  list.appendChild(height);
  list.appendChild(meaning);
  return list;
};

module.exports = MunroView;
