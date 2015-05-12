(function () {
  angular.module('churnOver').directive('agent', function () {
  	return { 
  		restrict: 'E',
  		templateUrl: 'src/churn/view/agent.html'
  	};
});
})