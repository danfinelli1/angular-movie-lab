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
  vm.deleteMovie = function(movieTitle){
    console.log(movieTitle);
    var index = vm.moviesToWatch.indexOf(movieTitle);
    vm.moviesToWatch.splice(index, 1);
  }
  vm.watchedMovie = function(movieTitle){
    console.log('strike');
    var index = vm.moviesToWatch.indexOf(movieTitle);
     moviesToWatch[index].className = 'strike';

      }
    }
