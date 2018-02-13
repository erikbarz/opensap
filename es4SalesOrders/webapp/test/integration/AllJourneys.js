jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SalesOrderSet in the list
// * All 3 SalesOrderSet have at least one ToLineItems

sap.ui.require([
	"sap/ui/test/Opa5",
	"es4salesorders/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"es4salesorders/test/integration/pages/App",
	"es4salesorders/test/integration/pages/Browser",
	"es4salesorders/test/integration/pages/Master",
	"es4salesorders/test/integration/pages/Detail",
	"es4salesorders/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "es4salesorders.view."
	});

	sap.ui.require([
		"es4salesorders/test/integration/MasterJourney",
		"es4salesorders/test/integration/NavigationJourney",
		"es4salesorders/test/integration/NotFoundJourney",
		"es4salesorders/test/integration/BusyJourney",
		"es4salesorders/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});