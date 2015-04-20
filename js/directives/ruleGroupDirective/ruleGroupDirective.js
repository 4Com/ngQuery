(function () {
  "use strict";

  angular.module("ngQuery")
    .directive("ruleGroup", RuleGroupDirective);

  function RuleGroupDirective() {
    return {
      restrict: "EA",
      templateUrl: "js/directives/ruleGroupDirective/rule-group-view.html",
      scope: {
        queryOptions: "=",
        rules: "=",
        isNested: "=",
        onRemove: "&"
      },
      controller: "ruleGroupDirectiveController as ctrl"
    };
  }
})();
