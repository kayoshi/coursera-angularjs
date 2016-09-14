(function () {
  'use strict';

  angular.module('myFirstApp', [])

  .controller('myFirstController', function($scope) {
    $scope.name = "Azamat";
    $scope.sayHello = function() {
      return "Hello Coursera!";
    }
  });

})();