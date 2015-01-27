(function() {
  'use strict';

  angular.module("ngQuery")
         .factory("queryOptions", queryOptionsFactory);

  function queryOptionsFactory() {
    var service = {
      getOptions: getOptions
    };

    return service;

    // ***********************************************//

    function getOptions() {
      var queryOptions = {
        topLevelOperators: [{
          name: "AND"
        }, {
          name: "OR"
        }],
        fields: [{
          identifier: "CFirstName",
          display: "Contact First Name",
          type: "text",
          validOperators: [{
            identifier: "equals",
            display: "=="
          }, {
            identifier: "notequal",
            display: "!="
          }, {
            identifier: "like",
            display: "like"
          }]
        }, {
          identifier: "NoHandsets",
          display: "Number of Handsets",
          type: "number",
          validOperators: [{
            identifier: "equals",
            display: "=="
          }, {
            identifier: "notequal",
            display: "!="
          }, {
            identifier: "greaterthan",
            display: ">"
          }]
        }]
      };

      return queryOptions;
    }
  }

})();
