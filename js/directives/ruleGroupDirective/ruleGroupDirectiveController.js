(function() {
  "use strict";

  angular.module("ngQuery")
         .controller("ruleGroupDirectiveController", RuleGroupDirectiveController);

  RuleGroupDirectiveController.$inject = [ "$scope" ];

  function RuleGroupDirectiveController($scope) {
    var vm = this;

    vm.queryOptions = $scope.queryOptions;
    vm.rules = $scope.rules;

    vm.selectedTopLevelOperator = vm.queryOptions.topLevelOperators[0].name;

    vm.setTopLevelOperator = function(op) {
      vm.selectedTopLevelOperator = op;
    };

    vm.addRule = function() {
      vm.rules.push({});
    };

    vm.removeRule = function(rule) {
      var index = vm.rules.indexOf(rule);
      vm.rules.splice(index, 1);
    };
  }

})();