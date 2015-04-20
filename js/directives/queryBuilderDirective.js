(function() {
  'use strict';

  angular.module("ngQuery")
         .directive("queryBuilder", QueryBuilderDirective);

  function QueryBuilderDirective() {
    return {
      restrict: "E",
      template: '<div class="row"><div class="col-md-9">
        <rule-group query-options="ctrl.queryOptions" rules="ctrl.groups"></rule-group>

        <button type="button" class="btn btn-warning" ng-click="ctrl.clearQuery()"
                ng-disabled="ctrl.groups.length == 0">Clear Query</button>
        <div class="btn-group pull-right" role="group">
          <button type="button" class="btn btn-primary" ng-click="ctrl.saveQuery()"
                  ng-disabled="ctrl.groups.length == 0">Save Query</button>
          <button type="button" class="btn btn-success"
                  ng-disabled="ctrl.groups.length == 0">Exectute Query</button>
        </div>
      </div>
      <div class="col-md-3">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h3 class="panel-title">Saved Queries</h3>
          </div>
          <div class="panel-body">
            <span ng-if="ctrl.savedQueries.length == 0">Nothing Saved.</span>
            <div ng-repeat="save in ctrl.savedQueries">
              <button type="button" class="btn btn-default btn-sm btn-block saved-query"
                      ng-click="ctrl.restoreQuery(save.query)">
                {{ save.name }}
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>',
      scope: {},
      controller: "queryBuilder as ctrl"
    };
  }
})();
