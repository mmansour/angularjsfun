angular.module("myApp", [])
    .controller('myController', function($scope){
        $scope.Math = window.Math;
        $scope.myArray = [1, 2, 6];
        $scope.removeArray = [];
    });