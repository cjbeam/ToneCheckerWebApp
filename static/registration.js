var app = angular.module('registration',[]);

app.controller('registrationCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.user = {
  	'email':'',
  	'birthday': new Date(),
  	'gender':'none',
  	'state':'',
  	'educationLevel':''
  }
  $scope.maxDate = new Date();
  $scope.minDate = new Date(1900, 00, 01);

  $http.get('http://services.groupkt.com/state/get/usa/all', {}).then(function(response){
  	$scope.stateList = response.data.RestResponse.result;
  }, function() {
  	$scope.stateList = {};
  });

  $scope.submitForm = function(){
  	//http put 
  }
}]);