(function() {
  'use strict';

  angular.module("ngQuery")
         .directive("queryBuilder", QueryBuilderDirective);

  function QueryBuilderDirective() {
    return {
      restrict: "E",
      templateUrl: "js/views/query-builder-view.html",
      scope: true,
      controller: "queryBuilder as ctrl"
    };
  }
})();
