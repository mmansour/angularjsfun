angular.module('myApp', [])
    .filter('cexsor', function(){
        return function(input, replacement){
            var cWords = ['bad', 'evil', 'dark', 'shitty'];
            var out = input;
            for(var i=0; i<cWords.length; i++){
                out = out.replace(cWords[i], replacement);
            }
            return out;
        }
    })
    .controller('myController', ['$scope', 'cexsorFilter',
                                    function($scope, myCensorFilter){
                                             $scope.censorText = "***";
                                             $scope.phrase = "This is a bad phrase";
                                             $scope.txt = "Click to filter out dark and evil";
                                             $scope.filterText = function(){
                                                 $scope.txt = myCensorFilter($scope.txt, '<<Censored>>');
                                             };
                                    }]);
