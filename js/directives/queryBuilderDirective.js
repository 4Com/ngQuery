(function() {
  'use strict';

  angular.module("ngQuery")
         .directive("queryBuilder", ["queryOptions", function(queryOptions) {
            return {
              restrict: "E",
              templateUrl: "js/views/query-builder-view.html",
              scope: true,
              link: function($scope, $element) {
                $scope.queryOptions = queryOptions.getOptions();
              }
            };
          }]);
})();
