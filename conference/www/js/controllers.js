angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

    $ionicModal.fromTemplateUrl('templates/sign.html', {
      scope : $scope
    }).then(function(modal) {
      $scope.signup = modal;
    })

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();

  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.msignup = function() {
    console.log('open signup')
    $scope.closeLogin()
    $scope.signup.show()
  }

  $scope.doSign = function() {
    $scope.signup.hide()
    $scope.modal.hide()
    $location.path('app/home')
  }

  $scope.closeSignup = function() {
    $scope.signup.hide();
    $scope.login()
  }
  $scope.doLogin = function() {
    console.log('Doing sign', $scope.loginData);
    // Simulate a sign delay. Remove this and replace with your sign
    // code if using a sign system
    $timeout(function() {
      $scope.closeLogin();
      $location.path('app/admin')
    }, 1000);
  };
  // Perform the login action when the user submits the login form
 
})



.controller('AppCtrl1', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

// Form data for the sign modal
  $scope.signData = {};

  // Create the sign modal that we will use later
  $ionicModal.fromTemplateUrl('templates/sign.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the sign modal to close it
  $scope.closeSign = function() {
    $scope.modal.hide();
  };

  // Open the sign modal
  $scope.sign = function() {
    $scope.modal.show();
  };

  // Perform the sign action when the user submits the sign form
  $scope.doSign = function() {
    console.log('Doing sign', $scope.signData);

    // Simulate a sign delay. Remove this and replace with your sign
    // code if using a sign system
    $timeout(function() {
      $scope.closeSign();
    }, 1000);
  };
})






.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
