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
        "topLevelOperators": [
          {
            "displayText": "AND",
            "systemIdentifier": "And"
    },
          {
            "displayText": "OR",
            "systemIdentifier": "Or"
    }
  ],
        "fields": [
          {
            "display": "Property1",
            "systemIdentifier": "Property1",
            "type": "text",
            "validEntries": [

      ],
            "validOperators": [
              {
                "displayText": "==",
                "systemIdentifier": "Equals"
        },
              {
                "displayText": "!=",
                "systemIdentifier": "NotEquals"
        },
              {
                "displayText": "IN",
                "systemIdentifier": "In"
        },
              {
                "displayText": "NOT IN",
                "systemIdentifier": "NotIn"
        }
      ]
    },
          {
            "display": "Property2",
            "systemIdentifier": "Property2",
            "type": "text",
            "validEntries": [

      ],
            "validOperators": [
              {
                "displayText": "==",
                "systemIdentifier": "Equals"
        },
              {
                "displayText": "!=",
                "systemIdentifier": "NotEquals"
        },
              {
                "displayText": "IN",
                "systemIdentifier": "In"
        },
              {
                "displayText": "NOT IN",
                "systemIdentifier": "NotIn"
        }
      ]
    },
          {
            "display": "Property3",
            "systemIdentifier": "Property3",
            "type": "text",
            "validEntries": [

      ],
            "validOperators": [
              {
                "displayText": "==",
                "systemIdentifier": "Equals"
        },
              {
                "displayText": "!=",
                "systemIdentifier": "NotEquals"
        },
              {
                "displayText": "IN",
                "systemIdentifier": "In"
        },
              {
                "displayText": "NOT IN",
                "systemIdentifier": "NotIn"
        }
      ]
    },
          {
            "display": "Property4",
            "systemIdentifier": "Property4",
            "type": "numeric",
            "validEntries": [

      ],
            "validOperators": [
              {
                "displayText": "==",
                "systemIdentifier": "Equals"
        },
              {
                "displayText": "!=",
                "systemIdentifier": "NotEquals"
        },
              {
                "displayText": ">",
                "systemIdentifier": "GreaterThan"
        },
              {
                "displayText": ">=",
                "systemIdentifier": "GreaterThanOrEqualTo"
        },
              {
                "displayText": "<",
                "systemIdentifier": "LessThan"
        },
              {
                "displayText": "<=",
                "systemIdentifier": "LessThanOrEqualTo"
        },
              {
                "displayText": "IN",
                "systemIdentifier": "In"
        },
              {
                "displayText": "NOT IN",
                "systemIdentifier": "NotIn"
        }
      ]
    },
          {
            "display": "Property5",
            "systemIdentifier": "Property5",
            "type": "date",
            "validEntries": [

      ],
            "validOperators": [
              {
                "displayText": "==",
                "systemIdentifier": "Equals"
        },
              {
                "displayText": "!=",
                "systemIdentifier": "NotEquals"
        },
              {
                "displayText": ">",
                "systemIdentifier": "GreaterThan"
        },
              {
                "displayText": ">=",
                "systemIdentifier": "GreaterThanOrEqualTo"
        },
              {
                "displayText": "<",
                "systemIdentifier": "LessThan"
        },
              {
                "displayText": "<=",
                "systemIdentifier": "LessThanOrEqualTo"
        },
              {
                "displayText": "IN",
                "systemIdentifier": "In"
        },
              {
                "displayText": "NOT IN",
                "systemIdentifier": "NotIn"
        }
      ]
    },
          {
            "display": "Property6",
            "systemIdentifier": "Property6",
            "type": "text",
            "validEntries": [

      ],
            "validOperators": [
              {
                "displayText": "==",
                "systemIdentifier": "Equals"
        },
              {
                "displayText": "!=",
                "systemIdentifier": "NotEquals"
        },
              {
                "displayText": "IN",
                "systemIdentifier": "In"
        },
              {
                "displayText": "NOT IN",
                "systemIdentifier": "NotIn"
        }
      ]
    }
  ]
      };

      return queryOptions;
    }
  }

})();