/**
 * Created by sasi on 4/1/2015.
 */
var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.firstName = "John",
        $scope.lastName = "Doe"
    $scope.myVar = false;
    $scope.toggle = function() {
        window.location = "./register.html";
        $scope.myVar = !$scope.myVar;
        alert("hahahahahahah");
    }
});
