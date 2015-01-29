(function() {
  "use strict";

  angular.module('ngQuery')
         .controller('saveModal', function ($scope, $modalInstance, items) {

    $scope.queryName = new Date();

    $scope.ok = function () {
      $modalInstance.close($scope.queryName);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
})();
