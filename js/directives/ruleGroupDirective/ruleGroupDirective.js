(function() {
  "use strict";

  angular.module("ngQuery")
         .directive("ruleGroup", RuleGroupDirective);

  function RuleGroupDirective() {
    return {
      restrict: "EA",
      template: '<div class="rule-group-container">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="btn-group group-conditions" role="group">
            <label ng-repeat="op in ctrl.queryOptions.topLevelOperators"
                   class="btn btn-xs btn-primary toggle-button"
                   ng-class="{\'active\': ctrl.selectedTopLevelOperator == op.name }">
              <input name="{{op.name}}_cond" type="radio" value="{{op.name}}"
                     ng-click="ctrl.setTopLevelOperator(op.name)">
                {{ op.name }}
              </input>
            </label>
          </div>

          <div class="btn-group pull-right group-actions">
            <button type="button" class="btn btn-success btn-xs" ng-click="ctrl.addRule()">
              <i class="glyphicon glyphicon-plus"></i>
              Add Rule
            </button>
            <button type="button" class="btn btn-success btn-xs" ng-click="ctrl.addGroup()">
              <i class="glyphicon glyphicon-log-in"></i>
              Add Group
            </button>
            <button type="button" class="btn btn-danger btn-xs" ng-click="ctrl.onRemove()"
                    ng-show="ctrl.isNested">
              <i class="glyphicon glyphicon-trash"></i>
              Remove Group
            </button>
          </div>

          <div class="rules-container" ui-sortable ng-model="ctrl.rules">
            <div ng-repeat="rule in ctrl.rules">
              <rule query-options="ctrl.queryOptions" query-data="rule"
                    on-remove="ctrl.removeRule(rule)" class="draggable sortable"></rule>
            </div>
          </div>
        </div>
      </div>
      </div>
',
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
