(function () {
  "use strict";

  angular.module("ngQuery")
         .controller("ruleDirectiveController", RuleDirectiveController);

  RuleDirectiveController.$inject = [ "$scope" ];

  function RuleDirectiveController($scope) {
    var vm = this;

    vm.queryOptions = $scope.queryOptions;
    vm.model = $scope.queryData;
    vm.onRemove = $scope.onRemove;

    vm.availableOperators = [];
    vm.validEntries = null;

    vm.setAvailableOperators = function() {
      for(var i=0; i<vm.queryOptions.fields.length; i++) {
        var field = vm.queryOptions.fields[i];

        if (field.identifier == vm.model.selectedField) {
          vm.availableOperators = field.validOperators;
          vm.validEntries = field.validEntries || null;
          break;
        }
      }
    };

    vm.setAvailableOperators();
  }

})();
