(function(){

    angular
        .module('churn')
        .controller('ChurnController', [
            'ChurnService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
            ChurnController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function ChurnController( churnService, $mdSidenav, $mdBottomSheet, $log, $q) {
        var self = this;

        self.selected = null;
        self.searchOptions = [ ];
        self.toggleList = toggleList;
        self.selectOption = selectOption;

        churnService
            .loadAllOptions()
            .then( function( options ) {
                self.searchOptions = [].concat(options);
                self.selected = options[0];
            });

        function toggleList() {
            var pending = $mdBottomSheet.hide() || $q.when(true);

            pending.then(function(){
                $mdSidenav('left').toggle();
            });
        }
        function selectOption ( option ) {
            self.selected = angular.isNumber(option) ? $scope.searchOptions[option] : option;
            self.toggleList();
        }


    }

})();

