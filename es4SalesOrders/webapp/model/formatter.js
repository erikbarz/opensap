sap.ui.define([], function() {
			"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue: function(sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(2);
		},
		
		formatAddress: function(Building, Street, City, PostalCode, Country){
			return Building + " " + Street + "\n" + City + " , " + PostalCode + "\n" + Country;
		},


		formatDate: function(value) {
			if (value) {
				var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
					pattern: "MM.dd.yyyy"
				});
				return oDateFormat.format(new Date(value));
			} else {
				return value;
			}
		}
	};


});