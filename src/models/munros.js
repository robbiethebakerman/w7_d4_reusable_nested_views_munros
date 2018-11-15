const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Munros = function () {
  this.data = [];
};

Munros.prototype.getData = function () {
  const request = new RequestHelper('https://munroapi.herokuapp.com/api/munros');
  request.get((data) => {
    this.data = data;
    PubSub.publish('Munros:all-ready', this.data);
  });
};


module.exports = Munros;
