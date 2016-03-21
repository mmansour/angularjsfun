var myMod = angular.module('myApp', []);

myMod.controller('controllerA',
    ['$scope', '$window',
         function($scope, $window){
             $scope.message = "This Shit Loads!";
             $window.alert($scope.message);
         }
    ]
);
