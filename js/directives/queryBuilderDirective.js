(function() {
  'use strict';

  angular.module("ngQuery")
         .directive("queryBuilder", queryBuilder);

  queryBuilder.$inject = ["queryOptionsProvider"];

  function queryBuilder(queryOptions) {
    return {
      restrict: "E",
      templateUrl: "js/views/query-builder-view.html"
      // This is probably not right, we might need a service to get the options
    };
  }

})();
