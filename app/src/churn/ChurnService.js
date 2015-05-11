(function(){
    'use strict';

    angular.module('churn')
        .service('ChurnService', ['$q', ChurnService]);

    /**
     * Users DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function ChurnService($q){
        // this is where you do the service call
        var searchOptions = [
            {
                name: 'Search By Address',
                content: "<button>HELLO</button>"
            },
            {
                name: 'Search By Zipcode',
                content: 'by zipcode form'
            },
            {
                name: 'Search By Registered Agent',
                content: 'by person form'
            }
        ];

        // Promise-based API
        return {
            loadAllOptions : function() {
                // Simulate async nature of real remote calls
                return $q.when(searchOptions);
            }
        };
    }

})();
