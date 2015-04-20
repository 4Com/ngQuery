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
        template: '<div class="modal-header">
          <h3 class="modal-title">Give your query a name...</h3>
        </div>
        <div class="modal-body">
          <input type="text" class="form-control" ng-model="ctrl.queryName"></input>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" ng-click="ctrl.save()">Save</button>
          <button class="btn btn-warning" ng-click="ctrl.cancel()">Cancel</button>
        </div>',
        controller: 'saveModal as ctrl'
      });

      modalInstance.result.then(function (name) {
        queryRepository.storeQuery(name, angular.copy(vm.groups));
      }, function () {

      });
    }
  }

})();
