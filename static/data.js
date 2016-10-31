var app = angular.module('data', ['chart.js'])
.controller("PieCtrl", function ($scope) {
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
})
.controller("socialTendanciesBarCtrl", function ($scope) {
  $scope.labels = ['Openness', 'Conscientiouness', 'Extraversion', 'Agreeableness', 'Emotional Range'];
  $scope.series = ['Male', 'Female'];
  $scope.options = {
    legend: {
      display: true
    }
  }

  $scope.data = [
    [65, 59, 80, 81, 56],
    [28, 48, 40, 19, 86]
  ];
});