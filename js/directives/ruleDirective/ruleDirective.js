(function() {
  "use strict";

  angular.module("ngQuery")
         .directive("rule", RuleDirective);

  RuleDirective.$inject = [ "$compile" ];

  function RuleDirective($compile) {
    return {
      restrict: "EA",
      template: '<div class="rule-container" ng-if="!ctrl.isArray(ctrl.model)">
        <form class="form-inline" aria-hidden="true">

          <select ng-model="ctrl.model.selectedField" class="form-control input-sm"
                  ng-change="ctrl.setAvailableOperators()"
                  ng-options="field.identifier as field.display for field in ctrl.queryOptions.fields">
          </select>

          <select ng-model="ctrl.model.selectedOperator" class="form-control input-sm"
                  ng-options="op.identifier as op.display for op in ctrl.availableOperators">
          </select>

          <input type="text" class="form-control input-sm" ng-if="!ctrl.validEntries"
                 ng-model="ctrl.model.selectEntry"></input>
          <select ng-model="ctrl.model.selectEntry" class="form-control input-sm" ng-if="ctrl.validEntries"
                  ng-options="entry.identifier as entry.display for entry in ctrl.validEntries">
          </select>

          <button type="button" class="btn btn-danger btn-sm pull-right" ng-click="ctrl.onRemove()">
            <i class="glyphicon glyphicon-trash"></i>
          </button>
        </form>
      </div>
',
      scope: {
        queryOptions: "=",
        queryData: "=",
        onRemove: "&"
      },
      controller: "ruleDirectiveController as ctrl",
      link: function(scope, element) {
        if(angular.isArray(scope.ctrl.model)) {
          element.html("<rule-group class='nested-group' query-options='ctrl.queryOptions' rules='ctrl.model' on-remove='ctrl.onRemove()' is-nested='true'></rule-group>");
          $compile(element.contents())(scope);
        }
      }
    };
  }

})();
