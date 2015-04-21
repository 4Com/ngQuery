(function () {
  "use strict";

  angular.module("ngQuery")
    .factory("queryRepository", queryRepository);

  function queryRepository() {
    var service = {
      getQueries: getQueries,
      storeQuery: storeQuery,
      removeQuery: removeQuery
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

  function removeQuery(query) {
    var index = queries.indexOf(query);
    queries.splice(index, 1);
  }

})();