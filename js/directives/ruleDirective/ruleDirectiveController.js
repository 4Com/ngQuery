(function () {
  "use strict";

  angular.module("ngQuery")
         .controller("ruleDirectiveController", RuleDirectiveController);

  RuleDirectiveController.$inject = [ "$scope" ];

  function RuleDirectiveController($scope) {
    var vm = this;

    vm.queryOptions = $scope.queryOptions;

    vm.selectedTopLevelOperator = vm.queryOptions.topLevelOperators[0].name;
    vm.availableOperators = [];
    vm.validEntries = null;

    vm.setTopLevelOperator = function(op) {
      vm.selectedTopLevelOperator = op;
    };

    vm.setAvailableOperators = function() {
      for(var i=0; i<vm.queryOptions.fields.length; i++) {
        var field = vm.queryOptions.fields[i];

        if (field.identifier == vm.selectedField) {
          vm.availableOperators = field.validOperators;
          vm.validEntries = field.validEntries || null;
          break;
        }
      }
    };
  }

})();
