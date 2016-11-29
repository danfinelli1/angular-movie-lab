angular.module('movieApp', [])
    .controller('MovieCtrl', MovieCtrl);

function MovieCtrl(){
  var vm = this;

  vm.moviesToWatch = [
    {
      'title': 'Zootopia'
    },
    {
      'title': 'Hell or High Water'
    },
    {
      'title': 'The Jungle Book'
    },
    {
      'title': 'Moonlight'
    },
    {
      'title': 'Love & Friendship'
    },
    {
      'title': 'Finding Dory'
    },
    {
      'title': 'Hunt for Wilderpeople'
    }
  ];
  vm.submit = function(movieTitle) {

    console.log('this is being called');

      vm.moviesToWatch.push({title: movieTitle});

  }

}
