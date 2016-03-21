angular.module('theMainApp', []).
    controller('theMainController', function($scope){
        $scope.speed = 'Slow';
        $scope.vehicle = 'Train';
        $scope.newSpeed = 'Hypersonic';
        $scope.newVehicle = 'Plane';

        $scope.upper = function(astring){
            return angular.uppercase(astring);
        };

        $scope.lower = function(astring){
            return angular.lowercase(astring);
        };

        $scope.setValues = function(speed, vehicle){
            $scope.speed = speed;
            $scope.vehicle = vehicle;
        };
    });

