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
		window.dojoDynamicRequire(deps, function() { resolve(Array.from(arguments)) });
	});
}
// END EXTRA CODE

/**
 * @param {string} containerId
 * @param {string} event
 * @param {string} msg
 * @returns {Promise.<void>}
 */
export async function DojoEmitMsg(containerId, event, msg) {
	// BEGIN USER CODE
	//https://dojotoolkit.org/reference-guide/1.9/dojo/on.html#emit
	const [on] = await injectDeps(["dojo/on"]);
	const container = document.querySelector('#' + containerId);

	on.emit(container, event, { data: msg });
	// END USER CODE
}
