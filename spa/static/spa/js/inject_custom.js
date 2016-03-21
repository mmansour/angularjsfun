var myMod = angular.module('myMod', []);
myMod.value('modMsg', 'Hello from my module, mang.');  // implement custom provider (value provider), modMsg
myMod.controller('controllerB', ['$scope', 'modMsg',  // injecting the custom value provider (modMsg) into the controller
                                    function($scope, msg){
                                        $scope.message = msg;
                                    }
                                ]);

var myApp = angular.module('myApp', ['myMod']);
myApp.value('appMsg', 'Hello from my app, mang');  // implement custom provider (value provider), appMsg
myApp.controller('controllerA', ['$scope', 'appMsg',  // injecting the custom value provider (appMsg) into the controller
                                    function($scope, msg){
                                        $scope.message = msg;
                                    }
                                ]);
