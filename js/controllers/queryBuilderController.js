(function() {
  "use strict";

  angular.module("ngQuery")
         .controller("queryBuilder", QueryBuilderController);

  QueryBuilderController.$inject = ["queryOptions"];

  function QueryBuilderController(queryOptions) {
    var vm = this;

    vm.queryOptions = queryOptions.getOptions();

    vm.rules = [
    {
      selectEntry: 1,
      selectedField: "NoHandsets",
      selectedOperator: "equals"
    },
  {
    selectEntry: "Stuart%",
    selectedField: "CFirstName",
    selectedOperator: "like"
  },
    {}];
    vm.selectedTopLevelOperator = vm.queryOptions.topLevelOperators[0].name;

    vm.setTopLevelOperator = function(op) {
      vm.selectedTopLevelOperator = op;
    };

    vm.ruleChange = function() {
      alert("ruleChanged");
    };
  }

})();
