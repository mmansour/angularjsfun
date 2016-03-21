angular.module('myApp', [])
    .controller('myController', function($scope){
        $scope.currentDate = new Date();
        $scope.JSONObj = {title: 'myTitle'};
        $scope.words = "Supercalifragilistic";
        $scope.weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    });
