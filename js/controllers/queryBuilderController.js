(function() {
  "use strict";

  angular.module("ngQuery")
         .controller("queryBuilder", QueryBuilderController);

  QueryBuilderController.$inject = ["queryOptions"];

  function QueryBuilderController(queryOptions) {
    var vm = this;

    vm.queryOptions = queryOptions.getOptions();
  }

})();
