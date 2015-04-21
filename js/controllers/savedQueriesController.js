(function () {
  "use strict";

  angular.module("ngQuery")
    .controller("SavedQueriesController", SavedQueriesController);

  SavedQueriesController.$inject = ["queryRepository"];

  function SavedQueriesController(queryRepository) {
    var vm = this;

    vm.savedQueries = queryRepository.getQueries();

    vm.removeQuery = queryRepository.removeQuery;
  }

})();