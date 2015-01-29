(function() {
  "use strict";

  angular.module("ngQuery")
         .controller("queryBuilder", QueryBuilderController);

  QueryBuilderController.$inject = ["queryOptions", "queryRepository"];

  function QueryBuilderController(queryOptions, queryRepository) {
    var vm = this;

    vm.queryOptions = queryOptions.getOptions();
    vm.groups = [];
    vm.savedQueries = queryRepository.getQueries();

    vm.clearQuery = function() {
      vm.groups.length = 0;
    };

    vm.saveQuery = function() {
      queryRepository.storeQuery(new Date(), angular.copy(vm.groups));
    };

    vm.restoreQuery = function(query) {
      vm.groups.length = 0;
      angular.copy(query, vm.groups);
    };
  }

})();
