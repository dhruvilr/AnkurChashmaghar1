myApp.controller("myController",['$scope','myService',function($scope,myService){
	
	$scope.users=[];
	
	$scope.message="This is angular Page";
	
	$scope.fetchAllUser = function(){
		
		myService.fetchAllUser()
			.then(
					function(response){
						$scope.users = response;
						alert(response);
					},function(errorResponse){
						console.error('Error while fetching Users');
					}
					
			)
		
	};
	
	$scope.fetchAllUser();
}]);