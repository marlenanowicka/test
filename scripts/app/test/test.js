'use strict';
angular.module('yellowjasmine.dragAnddrop', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/test/form', {
                templateUrl: 'scripts/app/test/test.html',
                controller: 'dragController'
            }).
            otherwise({
                redirectTo: '/test/form'
            });
    }])
.controller('dragController',['$scope', function dragController ($scope) {
        $scope.inputs = [{'value': 'Imię', type: 'input'},{'value': 'Nazwisko',type: 'input'},{'value': 'Temat',type: 'input'}];
        $scope.buttons = [{'value': 'Wyślij', type: 'button'},{'value': 'Usuń', type: 'button'},{'value': 'Wyczyść',type: 'button'}];
        $scope.textareas = [{'value': 'Wiadomość', type: 'textarea'},{'value': 'Opinia', type: 'textarea'}];

        $scope.dynamicFields = [];

        $scope.hideMe = function() {
            return $scope.dynamicFields.length > 0;
        }
        $scope.wyslij = function (dynamicFields) {
            $scope.rezultatJSON = angular.toJson(dynamicFields);
            $scope.przyciskDisabled = true;
        };

    }]);
