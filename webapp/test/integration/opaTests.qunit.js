/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["project1ui5/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
