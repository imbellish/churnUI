(function () {
  angular.module('churnOver').directive('zipcode', function () {
  	return { 
  		restrict: 'E',
  		templateUrl: 'src/churn/view/zip.html'
  	};
});
})