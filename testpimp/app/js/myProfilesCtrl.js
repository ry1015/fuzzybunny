
angular.module('testpimp').controller('myProfilesCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService) {
	
/*	requestService.getMyProviderProfiles().then(
			function(success) {
				$scope.myProviderProfiles = success.data;
			}, 
		     function(error){		        
		    }
	);
*/
	$scope.myProviderProfiles = getConstants.getUpdateProviderProfileResponse();
//	$scope.myProviderProfiles = shareDataService.getProviderProfiles();
	
	$scope.displayUserInfo = function (providerProfile) {
		alert("username: " + providerProfile.username);
	}
	
});
