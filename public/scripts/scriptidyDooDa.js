console.log('ls');

var myApp = angular.module('myApp', []);

// var allSongs=[];
// myApp.controller( 'poeDameron', [ '$scope', '$http', function( $scope, $http ){
//   console.log( 'NG' );

//   $scope.addSong = function(){
//     console.log( 'in addSong:', $scope.badSong );
//     // can we put the bad song in an object?
//     var newSong = {
//       title: $scope.badSong,
//       artist: $scope.badArtist
//     }; // end new song
//     console.log( 'sending:', newSong );
//     // test send via http to post route
//     $http({
//       method: 'POST',
//       url: '/testPost',
//       data: newSong
//     }).then(function( response ){
//       console.log( 'back from server with:', response );
//     })
//
//     // can we push the bad song object into our array?
//     allSongs.push( newSong );
//     console.log( 'allSongs:', allSongs );
//   }; // end add song
// }]); // end controller

myApp.controller('emailForm', ['$scope', '$http', function ($scope, $http) {
  console.log('in emailForm controller');
  $scope.submitContact = function () {
    console.log('in submitContact');
    var contactInfo = {
      name: $scope.userName,
      email: $scope.userEmail,
      comment: $scope.userComment
    }; // end object

    $http({
      url: '/testPost',
      method: 'PUT',
      data: contactInfo
    }).then( function (response) {
        console.log('success in http put route:', response);
    })

    console.log('contactInfo:', contactInfo);
  }; // end submit contact function
}]); // end emailForm controller
