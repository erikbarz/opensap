jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"es4products/test/integration/NavigationJourneyPhone",
		"es4products/test/integration/NotFoundJourneyPhone",
		"es4products/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});