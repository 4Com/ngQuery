(function() {
  'use strict';

  angular.module("ngQuery")
         .provider("queryOptions", QueryOptions);

  function QueryOptions() {
    var provider = this;
    provider.options = {};

    function get() {
      var optionsCopy = angular.copy(provider.options);

      return {
        options: optionsCopy
      };
    }

    function setOptions(options) {
      provider.options = options;
    }

    return {
      $get: get,
      setOptions: setOptions
    };
  }

})();
