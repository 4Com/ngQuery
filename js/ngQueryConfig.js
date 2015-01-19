(function() {
	'use strict';

	angular.module("ngQuery")
		.config(QueryOptionsConfig);

	function QueryOptionsConfig(queryOptionsProvider) {
		QueryOptionsProvider.setOptions(configOptions);
	}

	var configOptions = {
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
			name: "Number of Handsets",
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

})();
