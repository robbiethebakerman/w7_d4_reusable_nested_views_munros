const PubSub = require('../helpers/pub_sub.js');

const MunroView = function (munro, container) {
  this.munro = munro;
  this.container = container;
};

MunroView.prototype.render = function () {
  const name = document.createElement('h2');
  name.textContent = this.munro.name;
  this.container.appendChild(name);
};

module.exports = MunroView;
