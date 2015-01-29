(function() {
  "use strict";

  angular.module("ngQuery")
         .controller("queryBuilder", QueryBuilderController);

  QueryBuilderController.$inject = ["queryOptions", "queryRepository"];

  function QueryBuilderController(queryOptions, queryRepository) {
    var vm = this;

    vm.queryOptions = queryOptions.getOptions();

    vm.groups = queryRepository.getQuery();
  }

})();
