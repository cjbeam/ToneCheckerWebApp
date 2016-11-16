var app = angular.module('registration',[]);

app.controller('registrationCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.user = {
  	'email':'',
  	'birthDate': new Date(),
  	'genderId':'',
  	'stateId':'',
  	'educationId':''
  }
  $scope.maxDate = new Date();
  $scope.minDate = new Date(1900, 00, 01);

  $http.get('http://psuwebmemberservice.azurewebsites.net/api/states', {}).then(function(response){
  	$scope.stateList = response.data;
  }, function() {
  	$scope.stateList = {};
  });

  $http.get('http://psuwebmemberservice.azurewebsites.net/api/educationLevels', {}).then(function(response){
    $scope.edList = response.data;
  }, function() {
    $scope.edList = {};
  });

  $http.get('http://psuwebmemberservice.azurewebsites.net/api/genderOptions', {}).then(function(response){
    $scope.genderList = response.data;
  }, function() {
    $scope.genderList = {};
  });

  $scope.submitForm = function(){
    var config = {
      headers: { 'Content-Type': 'application/json'}
    },
      userData = $scope.user,
      url = 'http://psuwebmemberservice.azurewebsites.net/api/Registration';

      console.log(userData);

  	$http.post(url, userData, config).then( function () {
      console.log('success');
    }, function() {
      console.log('error');
    });
  }
}]);