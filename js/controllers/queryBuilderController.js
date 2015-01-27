(function() {
  "use strict";

  angular.module("ngQuery")
         .controller("queryBuilder", QueryBuilderController);

  QueryBuilderController.$inject = ["queryOptions"];

  function QueryBuilderController(queryOptions) {
    var vm = this;

    vm.queryOptions = queryOptions.getOptions();
    vm.selectedTopLevelOperator = vm.queryOptions.topLevelOperators[0].name;
    vm.availableOperators = [];

    vm.setTopLevelOperator = function(op) {
      vm.selectedTopLevelOperator = op;
    };

    vm.setAvailableOperators = function() {
      for(var i=0; i<vm.queryOptions.fields.length; i++) {
        var field = vm.queryOptions.fields[i];
        if (field.identifier == vm.selectedField) {
          vm.availableOperators = field.validOperators;
          break;
        }
      }
    };
  }

})();
