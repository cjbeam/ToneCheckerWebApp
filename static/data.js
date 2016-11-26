var app = angular.module('data', ['chart.js'])

.controller("dataAnalysisCtrl", ['$scope', '$http', function($scope, $http) {
  var tendancyLabels = {
    'language':['Analytical', 'Confident', 'Tentative'],
    'social':['Agreeableness', 'Conscientiouness', 'Emotional Range', 'Extraversion', 'Openness'],
    'emotion':['Anger', 'Disgust', 'Fear', 'Joy', 'Sadness']
  }, 
  graphData;
  $scope.showChart = false;
  $scope.tendancy = "social";
  $scope.demographic = "gender";

  $scope.tendancies = 
    [{"value": "social",
      "name":"Social Tendancies"},
      {"value": "emotion",
      "name":"Emotion"},
      {"value": "language",
      "name":"Language Style"}
    ];
  $scope.demographics = [
  {'value':'gender',
    'name':'Gender'},
  {'value':'education',
    'name':'Education Level'},
  {'value':'state',
    'name':'State'},
  {'value':'birthdate',
    'name':'Age Range'}
  ]

 $scope.birthdate = ['21-30', '31-40', '41-50', '51-60', '60+'];

 $http.get('http://psuwebmemberservice.azurewebsites.net/api/states', {}).then(function(response){
    $scope.state = response.data;
  }, function() {
    $scope.state = {};
  });

  $http.get('http://psuwebmemberservice.azurewebsites.net/api/educationLevels', {}).then(function(response){
    $scope.education = response.data;
  }, function() {
    $scope.education = {};
  });

  $http.get('http://psuwebmemberservice.azurewebsites.net/api/genderOptions', {}).then(function(response){
    $scope.gender = response.data;
  }, function() {
    $scope.gender = {};
  });



  $scope.getData = function () {
    $http.get('http://psuwebmemberservice.azurewebsites.net/api/' + $scope.demographic + '/' + $scope.tendancy, {}).then(function(response){
      graphData = JSON.parse(response.data);
      updateChart();  
    }, function() {
      graphData = {};
    });
    
  }  

    $scope.options = {
      legend: {
        display: true
      }
    }

    $scope.labels = [];
    $scope.series = [];
    $scope.data = [[0]];
  
  var updateChart = function(){
    var i = 0, j=0, k=0,
      demographicData = $scope[$scope.demographic];
    $scope.options = {
      legend: {
        display: true
      }
    }

    $scope.labels = tendancyLabels[$scope.tendancy];
    $scope.series = [];

    if($scope.demographic == 'state') {
      $scope.series = [demographicData[$scope.selectedState - 1].StateName];
      $scope.data = new Array($scope.series.length); 
      $scope.data[0] = new Array();

      for(j; j < graphData.length; j++){
        if(graphData[j].stateId == $scope.selectedState){
          $scope.data[0].push(graphData[j].AverageScore * 100);
        }
      }

    } else {
      for(i; i < demographicData.length; i++) {
        if ($scope.demographic === 'education') {
          $scope.series[i] = demographicData[i].EducationLevel
        } else if ($scope.demographic === 'birthdate') {
          $scope.series[i] = demographicData[i];
        } else {
          $scope.series[i] = demographicData[i].GenderType
        } 
      }
      $scope.data = new Array($scope.series.length);   
      for(j; j < $scope.series.length; j++) {
        $scope.data[j] = new Array($scope.labels.length);
        k = 0;
        for(k; k < $scope.labels.length; k++) {
       }
      }
    }


    
    $scope.showChart = true;
  }
  
}]);