(function() {
  "use strict";

  angular.module('ngQuery')
         .controller('saveModal', saveModalController);

  saveModalController.$inject = [ "$modalInstance" ];

  function saveModalController($modalInstance) {
    /* jshint validthis: true */
    var vm = this;

    vm.queryName = new Date();

    vm.save = function () {
      $modalInstance.close(vm.queryName);
    };

    vm.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }

})();
