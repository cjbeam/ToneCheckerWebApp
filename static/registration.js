var app = angular.module('registration',[]);

app.controller('registrationCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.user = {
  	'email':'',
  	'birthday': new Date(),
  	'gender':'none',
  	'country':'',
  	'state':'',
  	'educationLevel':''
  }
  $scope.maxDate = new Date();
  $scope.minDate = new Date(1900, 00, 01);
  // $scope.countryList = 'undefined';
  // $scope.stateList = 'undefined';

  $http.get('http://services.groupkt.com/country/get/all', {}).then(function(response){
  	$scope.countryList = response.data.RestResponse.result;
  	console.log($scope.countryList);
  }, function() {
  	console.log('error retrieving country list');
  });
  $http.get('http://services.groupkt.com/state/get/usa/all', {}).then(function(response){
  	$scope.stateList = response.data.RestResponse.result;
  	console.log($scope.stateList);
  }, function() {
  	console.log('error retrieving state list');
  });

  $scope.submitForm = function(){
  	console.log($scope.user);
  }
}]);