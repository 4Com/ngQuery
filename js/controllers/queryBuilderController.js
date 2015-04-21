(function () {
  "use strict";

  angular.module("ngQuery")
    .controller("queryBuilder", QueryBuilderController);

  QueryBuilderController.$inject = ["queryOptions", "queryRepository", "$modal"];

  function QueryBuilderController(queryOptions, queryRepository, $modal) {
    var vm = this;

    vm.queryOptions = queryOptions.getOptions();
    vm.groups = {};

    vm.clearQuery = function () {
      vm.groups.list.length = 0;
    };

    vm.saveQuery = function () {
      openSaveModal();
    };

    vm.restoreQuery = function (query) {
      vm.groups.list.length = 0;
      angular.copy(query, vm.groups);
    };

    function openSaveModal() {

      var modalInstance = $modal.open({
        templateUrl: "js/widgets/saveModal/save-modal.html",
        controller: 'saveModal as ctrl'
      });

      modalInstance.result.then(function (name) {
        if (name.length > 30 || name.length < 1) {
          alert("Invalid name!");
        } else {
          queryRepository.storeQuery(name, angular.copy(vm.groups));
        }
      }, function () {

      });
    }
  }

})();