// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
async function injectDeps(deps) {
	return await new Promise((resolve, reject) => {
		if (!Array.isArray(deps)) {
			deps = [deps];
		}
		window.dojoDynamicRequire(deps, function () { resolve(Array.from(arguments)) });
	});
}
function onDestroy(containerId, cb) {
	var myWidget = dojo.dijit.registry.byId(containerId);

	myWidget.addOnDestroy(cb);
}
// END EXTRA CODE

/**
 * @param {string} targetId
 * @returns {Promise.<void>}
 */
export async function DojoListenTo_2(targetId) {
	// BEGIN USER CODE
	const [on, lang] = await injectDeps(["dojo/on", "dojo/_base/lang"]);
	const container = document.querySelector('#' + targetId);

	const disp = on(container, 'updated', ({data: {operate}}) => {
	});

	onDestroy(targetId, () => {
		disp.remove();
	})
	// END USER CODE
}
