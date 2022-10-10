/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"moovi/m06a03/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
