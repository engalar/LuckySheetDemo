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
export async function OnLuckySheetScroll(targetId) {
	// BEGIN USER CODE
	const [on, lang] = await injectDeps(["dojo/on", "dojo/_base/lang"]);
	const container = document.querySelector('#' + targetId);

	const disp = on(container, '_loaded', () => {
		// Your logic start
		var horizontalScrollBar = container.querySelector('.luckysheet-scrollbar-y');
		horizontalScrollBar.addEventListener('scroll', function (e) {
			const from = Math.ceil(horizontalScrollBar.scrollTop / 20) + 1;
			const to = Math.ceil((horizontalScrollBar.scrollTop + horizontalScrollBar.clientHeight) / 20) - 1;
			const isScrollbarAtBottom = horizontalScrollBar.scrollTop + horizontalScrollBar.clientHeight >= horizontalScrollBar.scrollHeight;
			console.log(from, to, isScrollbarAtBottom);
		});
		// Your logic end
	});

	onDestroy(targetId, () => {
		console.log('dispose widget ' + targetId);
		disp.remove();
		horizontalScrollBar.removeEventListener('scroll');
	})
	// END USER CODE
}
