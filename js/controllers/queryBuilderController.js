(function() {
  "use strict";

  angular.module("ngQuery")
         .controller("queryBuilder", QueryBuilderController);

  QueryBuilderController.$inject = ["queryOptions", "queryRepository", "$modal"];

  function QueryBuilderController(queryOptions, queryRepository, $modal) {
    var vm = this;

    vm.queryOptions = queryOptions.getOptions();
    vm.groups = [];
    vm.savedQueries = queryRepository.getQueries();

    vm.clearQuery = function() {
      vm.groups.length = 0;
    };

    vm.saveQuery = function() {
      openSaveModal();
    };

    vm.restoreQuery = function(query) {
      vm.groups.length = 0;
      angular.copy(query, vm.groups);
    };

    function openSaveModal () {

      var modalInstance = $modal.open({
        templateUrl: "js/widgets/saveModal/save-modal.html",
        controller: 'saveModal as ctrl'
      });

      modalInstance.result.then(function (name) {
        queryRepository.storeQuery(name, angular.copy(vm.groups));
      }, function () {

      });
    }
  }

})();
