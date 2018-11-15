const Munros = require('./models/munros.js');
const MunroListView = require('./views/munro_list_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const munros = new Munros();
  munros.getData();
  console.log('munros data from within app', munros);

  const munroListViewContainer = document.querySelector('.munro-list-view-container');
  const munroListView = new MunroListView(munroListViewContainer);
  munroListView.bindEvents();
})
