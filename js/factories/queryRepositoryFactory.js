(function () {
  "use strict";

  angular.module("ngQuery")
    .factory("queryRepository", queryRepository);

  function queryRepository() {
    var service = {
      getQueries: getQueries,
      storeQuery: storeQuery
    };

    return service;
  }

  // ***********************************************//

  var queries = [];

  function getQueries() {
    return queries;
  }

  function storeQuery(name, query) {
    console.log(query);
    queries.push({
      name: name,
      query: query
    });
  }

})();