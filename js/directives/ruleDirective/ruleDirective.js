(function() {
  "use strict";

  angular.module("ngQuery")
         .directive("rule", RuleDirective);

  function RuleDirective() {
    return {
      restrict: "EA",
      templateUrl: "js/directives/ruleDirective/rule-view.html",
      scope: {
        queryOptions: "="
      },
      controller: "ruleDirectiveController as ctrl"
    };
  }

})();
