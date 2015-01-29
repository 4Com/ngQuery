(function() {
  "use strict";

  angular.module("ngQuery")
         .factory("queryRepository", queryRepository);

  function queryRepository() {
    var service = {
      getQuery: getQuery
    };

    return service;
  }

  // ***********************************************//

  function getQuery() {
    // TODO: This is just a holding area. This will need to
    //       be able to handle many stored queries.

    return [
    {
      selectEntry: 1,
      selectedField: "NoHandsets",
      selectedOperator: "equals"
    }, {
      selectEntry: "Stuart%",
      selectedField: "CFirstName",
      selectedOperator: "like"
    },
    [
      {
        selectEntry: 1,
        selectedField: "NoHandsets",
        selectedOperator: "equals"
      }, {
        selectEntry: "Stuart%",
        selectedField: "CFirstName",
        selectedOperator: "like"
      }
    ]];
  }

})();
