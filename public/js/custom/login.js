var userLogin = angular.module('loginPage', []);

userLogin.controller('loginCheck', function($scope, $http) {

	$scope.Email = '';
	$scope.Password = '';

	$scope.validUser = false;

	$scope.validateLogIn = function() {
		$http.get('/api/users').success(
				function(data) {
					// alert("fetching data successful");
					for (var count = 0; count < data.length
							&& !$scope.validUser; count++) {
						// alert("came in");
						if (data[count].UserName === $scope.Email) {
							// alert("email match found");
							if (data[count].Password === $scope.Password) {
								// alert("password match found");
								// alert($scope.validUser);
								$scope.validUser = true;
								// alert($scope.validUser);
							}
						}
					}
					// alert($scope.validUser);
					if ($scope.validUser) {
						$scope.dashBoardRedirect();
					}
				}).error(function(data, status) {
			alert(status);
			console.log("Get Users Failed");

		});

	}

	$scope.dashBoardRedirect = function() {
		window.location.href = "/html/defaultPage.html";
	}

	$scope.registernewUser = function() {
		window.location = "/html/register.html";
	}

	$scope.forgotdetails = function() {
		window.location = "/html/ForgotDetailsPage.html";
		alert("Account Details recovery");
	}

});