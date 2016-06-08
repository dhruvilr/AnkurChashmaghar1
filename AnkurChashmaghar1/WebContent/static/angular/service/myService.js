myApp.factory("myService",['$http','$q',function($http,$q){
	
	return{
		
		fetchAllUser : function(){
			
			return $http.get("http://localhost:8080/AnkurChashmaghar1/fetchUsers")
					.then(
						function(response){
							return response.data;
						},function(errResponse){
							console.error('Error while fetching users');
							return $q.reject(errResponse);
						}	
					)
		}
		
	};
	
	
}]);