jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/es4/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/es4/test/integration/pages/App",
	"com/es4/test/integration/pages/Browser",
	"com/es4/test/integration/pages/Master",
	"com/es4/test/integration/pages/Detail",
	"com/es4/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "es4salesorders.view."
	});

	sap.ui.require([
		"com/es4/test/integration/NavigationJourneyPhone",
		"com/es4/test/integration/NotFoundJourneyPhone",
		"com/es4/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});