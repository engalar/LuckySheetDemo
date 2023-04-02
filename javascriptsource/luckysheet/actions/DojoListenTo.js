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
// END EXTRA CODE

/**
 * @param {string} targetId
 * @param {string} config
 * @param {string} eventName
 * @param {Nanoflow} eventHandler
 * @returns {Promise.<void>}
 */
export async function DojoListenTo(targetId, config, eventName, eventHandler) {
	// BEGIN USER CODE
	const [on, lang] = await injectDeps(["dojo/on", "dojo/_base/lang"]);
	const container = document.querySelector('#' + targetId);

	on(container, eventName, (e) => {
		const data = e.data;
		const param = {};
		config.split(';').forEach(f => {
			const d = f.split(':');
			let v = d[1];
			if (v.startsWith('$')) {
				switch (v) {
					case '$widgetid':
						v = targetId;
						break;
					case '$payload':
						v = data;
						break;
					default:
						break;
				}
				param[d[0]] = v;
			} else {
				param[d[0]] = JSON.stringify(lang.getObject(v, false, data));
			}
		})
		eventHandler(param);
	});
	// END USER CODE
}
