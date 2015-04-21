(function() {
  'use strict';

  angular.module("ngQuery", ["ui.sortable", "ui.bootstrap"]);

})();

(function () {
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
          }],
          validEntries: [{
              identifier: 1,
              display: "1"
          },
            {
              identifier: 2,
              display: "2"
          }]
        }]
      };

      return queryOptions;
    }
  }

})();
(function() {
	'use strict';

})();

(function () {
  'use strict';

  angular.module("ngQuery")
    .directive("queryBuilder", QueryBuilderDirective);

  function QueryBuilderDirective() {
    return {
      restrict: "E",
      templateUrl: "js/views/query-builder-view.html",
      scope: {
        onExecute: "&"
      },
      controller: "queryBuilder as ctrl"
    };
  }
})();

(function () {
  "use strict";

  angular.module("ngQuery")
    .controller("queryBuilder", QueryBuilderController);

  QueryBuilderController.$inject = ["queryOptions", "queryRepository", "$modal"];

  function QueryBuilderController(queryOptions, queryRepository, $modal) {
    var vm = this;

    vm.queryOptions = queryOptions.getOptions();
    vm.groups = [];
    vm.savedQueries = queryRepository.getQueries();

    vm.clearQuery = function () {
      vm.groups.length = 0;
    };

    vm.saveQuery = function () {
      openSaveModal();
    };

    vm.restoreQuery = function (query) {
      vm.groups.length = 0;
      angular.copy(query, vm.groups);
    };

    function openSaveModal() {

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

(function () {
  "use strict";

  angular.module("ngQuery")
    .directive("rule", RuleDirective);

  RuleDirective.$inject = ["$compile"];

  function RuleDirective($compile) {
    return {
      restrict: "EA",
      templateUrl: "js/directives/ruleDirective/rule-view.html",
      scope: {
        queryOptions: "=",
        queryData: "=",
        onRemove: "&"
      },
      controller: "ruleDirectiveController as ctrl",
      link: function (scope, element) {
        if (angular.isArray(scope.ctrl.model)) {
          element.html("<rule-group class='nested-group' query-options='ctrl.queryOptions' rules='ctrl.model' on-remove='ctrl.onRemove()' is-nested='true'></rule-group>");
          $compile(element.contents())(scope);
        }
      }
    };
  }

})();

(function () {
  "use strict";

  angular.module("ngQuery")
         .controller("ruleDirectiveController", RuleDirectiveController);

  RuleDirectiveController.$inject = [ "$scope" ];

  function RuleDirectiveController($scope) {
    var vm = this;

    vm.queryOptions = $scope.queryOptions;
    vm.model = $scope.queryData;
    vm.onRemove = $scope.onRemove;

    vm.availableOperators = [];
    vm.validEntries = null;

    vm.setAvailableOperators = function() {
      for(var i=0; i<vm.queryOptions.fields.length; i++) {
        var field = vm.queryOptions.fields[i];

        if (field.identifier === vm.model.selectedField) {
          vm.availableOperators = field.validOperators;
          vm.validEntries = field.validEntries || null;
          break;
        }
      }
    };

    vm.setAvailableOperators();
    vm.isArray = angular.isArray;
  }

})();

(function() {
  "use strict";

  angular.module("ngQuery")
         .controller("ruleGroupDirectiveController", RuleGroupDirectiveController);

  RuleGroupDirectiveController.$inject = [ "$scope" ];

  function RuleGroupDirectiveController($scope) {
    var vm = this;

    vm.queryOptions = $scope.queryOptions;
    vm.rules = $scope.rules;
    vm.onRemove = $scope.onRemove;
    vm.isNested = $scope.isNested;

    vm.selectedTopLevelOperator = vm.queryOptions.topLevelOperators[0].name;

    vm.setTopLevelOperator = function(op) {
      vm.selectedTopLevelOperator = op;
    };

    vm.addRule = function() {
      vm.rules.push({});
    };

    vm.removeRule = function(rule) {
      var index = vm.rules.indexOf(rule);
      vm.rules.splice(index, 1);
    };

    vm.addGroup = function() {
      vm.rules.push([{}]);
    };

    vm.removeGroup = function(group) {
      if(group) {
        var index = vm.rules.indexOf(group);
        vm.rules.splice(index, 1);
      }
    };
  }

})();

(function () {
  "use strict";

  angular.module("ngQuery")
    .directive("ruleGroup", RuleGroupDirective);

  function RuleGroupDirective() {
    return {
      restrict: "EA",
      templateUrl: "js/directives/ruleGroupDirective/rule-group-view.html",
      scope: {
        queryOptions: "=",
        rules: "=",
        isNested: "=",
        onRemove: "&"
      },
      controller: "ruleGroupDirectiveController as ctrl"
    };
  }
})();

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
    queries.push({
      name: name,
      query: query
    });
  }

})();
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
