(function() {
  "use strict";

  angular.module("ngQuery")
         .directive("rule", RuleDirective);

  RuleDirective.$inject = [ "$compile" ];

  function RuleDirective($compile) {
    return {
      restrict: "EA",
      templateUrl: "js/directives/ruleDirective/rule-view.html",
      scope: {
        queryOptions: "=",
        queryData: "=",
        onRemove: "&"
      },
      controller: "ruleDirectiveController as ctrl",
      link: function(scope, element, attrs) {
        if(angular.isArray(scope.ctrl.model)) {
          element.html("<rule-group class='nested-group' query-options='ctrl.queryOptions' rules='ctrl.model' on-remove='ctrl.onRemove()' is-nested='true'></rule-group>");
          $compile(element.contents())(scope);
        }
      }
    };
  }

})();
