var registerPage = angular.module('registerPage', []);

registerPage.controller('newUserController', function($scope, $http){

	// UserDetails will hold all the input field content from the html page
	$scope.FirstName = '';
	$scope.LastName = '';
	$scope.UserName1 = '';
    $scope.UserName= '';
    $scope.Password1 = '';
	$scope.Password = '';
	$scope.DoB = '';
	$scope.Phone = '';
	$scope.Address = '';
	$scope.City = '';
	$scope.State = '';
	$scope.Country = '';
	$scope.CreatedTimeStamp = '';
	
    $scope.EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i;

    $scope.userDetails = {  "FirstName"	: $scope.FirstName,
							"LastName"	: $scope.LastName,
							"UserName"	: $scope.UserName,
							"Password"	: $scope.Password,
							"DoB"		: $scope.DoB,
							"Phone"		: $scope.Phone,
							"Address"	: $scope.Address,
							"City"		: $scope.City,
							"State"		: $scope.State,
							"Country"	: $scope.Country,
							"CreatedTimeStamp" :$scope.CreatedTimeStamp };
    $scope.userList = [];


    $scope.createUser = function(){


    	if ($scope.DoB === ''){
		   /* var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();

			if(dd<10) {
			    dd='0'+dd;
			}

			if(mm<10) {
			    mm='0'+mm;
			}
			today = mm+'/'+dd+'/'+yyyy;

			$scope.userDetails.DoB = today;*/
			$scope.userDetails.DoB = new Date();
	    }

    	$scope.userDetails.CreatedTimeStamp = new Date();


		 $http.post('/api/users',$scope.userDetails)
		 .success(function(data) {
		        console.log("Create Success\n Data :"+ data);
		        $scope.userDetails = {};

		})
		.error(function(data){
		    console.log("Error Creating User: "+ data);

		});
      };


    $scope.resetForm = function(){
        $scope.userDetails = {};
        $scope.userList = [];
    };

    $scope.getUserList = function(){
        $http.get('/api/users')
            .success(function(data) {
	            console.log("Get Users Success\n Data :"+ data);
           		$scope.userList = data;

        })
        .error(function(data){
            console.log("Get Users Failed");

        });
    };

    $scope.getAllUserDetails = function(){
        $scope.querySelectionCriteria = '';
        $http.get('/api/users', $scope.querySelectionCriteria)
            .success(function(data) {
                console.log("Get Users Success\n Data :"+ data);
                $scope.userList = data;

            })
            .error(function(data){
                console.log("Get Users Failed");

            });
    };


});


/*

registerPage.directive('pwCheck',function(){
    return function(scope,element, attrs, ctrl){
        console.log("From pwcheck: "+scope.userDetails);
        var me = attrs.ngModel;
        var matchTo = attrs.username2
        scope.$watch('[me,matchTo]', function(value){
            ctrl.$setValidity('pwmatch',scope[me]===scope[matchTo]);
            console.log("UserName1: "+scope[me]);
        });
    }

});

registerPage.directive('pwCheck',function(){
    //console.log("printed from retype-check");
    return {
        require: 'ngModel',
        link: function(scope, elem, attrs, ctrl){
            var me = attrs.ngModel;
            var matchTo = attrs.pwCheck;

            $scope.$watch('[me,matchTo]', function(value){
                ctrl.$setValidity('pwmatch',scope[me] === scope[matchTo]);
            });
        }
    }
});
*/