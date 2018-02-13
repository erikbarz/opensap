jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ProductSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"es4products/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"es4products/test/integration/pages/App",
	"es4products/test/integration/pages/Browser",
	"es4products/test/integration/pages/Master",
	"es4products/test/integration/pages/Detail",
	"es4products/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "es4products.view."
	});

	sap.ui.require([
		"es4products/test/integration/MasterJourney",
		"es4products/test/integration/NavigationJourney",
		"es4products/test/integration/NotFoundJourney",
		"es4products/test/integration/BusyJourney",
		"es4products/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});