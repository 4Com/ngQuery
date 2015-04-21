(function () {
  "use strict";

  angular.module("ngQuery")
    .controller("ruleGroupDirectiveController", RuleGroupDirectiveController);

  RuleGroupDirectiveController.$inject = ["$scope"];

  function RuleGroupDirectiveController($scope) {
    var vm = this;

    vm.queryOptions = $scope.queryOptions;
    vm.rules = $scope.rules;
    vm.onRemove = $scope.onRemove;
    vm.isNested = $scope.isNested;

    vm.rules.selectedTopLevelOperator = vm.rules.selectedTopLevelOperator || vm.queryOptions.topLevelOperators[0].name;

    vm.setTopLevelOperator = function (op) {
      vm.rules.selectedTopLevelOperator = op;
    };

    vm.addRule = function () {
      if (vm.rules.list === undefined) {
        vm.rules.list = [];
      }
      vm.rules.list.push({});
    };

    vm.removeRule = function (rule) {
      var index = vm.rules.list.indexOf(rule);
      vm.rules.list.splice(index, 1);
    };

    vm.addGroup = function () {
      if (vm.rules.list === undefined) {
        vm.rules.list = [];
      }
      vm.rules.list.push({
        list: []
      });
    };

    vm.removeGroup = function (group) {
      if (group) {
        var index = vm.rules.list.indexOf(group);
        vm.rules.list.splice(index, 1);
      }
    };
  }

})();