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
 * @param {string} containerId
 * @returns {Promise.<void>}
 */
export async function Render(containerId) {
	// BEGIN USER CODE
	const container = document.querySelector('#' + containerId);

	if (container.innerHTML == '') {

		//首次渲染
		const [html] = await injectDeps('dojo/html');
		html.set(container, `
		<div id="luckysheet" style="margin:0px;padding:0px;position:absolute;width:100%;height:100%;left: 0px;top: 0px;">
    </div>
		`);

		// According to the browser language
		var lang = mx.session.sessionData.locale.code.split('_')[0];
		var options = {
			container: 'luckysheet',
			lang: lang,
			showinfobar: false,
			showsheetbar: true,
			enableAddRow: false,
			showtoolbar: true,
			allowUpdate: true,
			enableAddBackTop: false,
			forceCalculation: false, cellRightClickConfig: {
				copy: false, // copy
				copyAs: false, // copy as
				paste: false, // paste
				insertRow: false, // insert row
				insertColumn: false, // insert column
				deleteRow: false, // delete the selected row
				deleteColumn: false, // delete the selected column
				deleteCell: false, // delete cell
				hideRow: false, // hide the selected row and display the selected row
				hideColumn: false, // hide the selected column and display the selected column
				rowHeight: false, // row height
				columnWidth: false, // column width
				clear: false, // clear content
				matrix: false, // matrix operation selection
				sort: false, // sort selection
				filter: false, // filter selection
				chart: false, // chart generation
				image: false, // insert picture
				link: false, // insert link
				data: false, // data verification
				cellFormat: false // Set cell format
			},
			sheetFormulaBar: false,
			showinfobar: false,
			showsheetbar: false,
			showstatisticBar: false,
			showtoolbarConfig: {
				undoRedo: false, //Undo redo
				paintFormat: false, //Format brush
				currencyFormat: false, //currency format
				percentageFormat: false, //Percentage format
				numberDecrease: false, //'Decrease the number of decimal places'
				numberIncrease: false, //'Increase the number of decimal places
				moreFormats: false, //'More Formats'
				font: false, //'font'
				fontSize: false, //'Font size'
				bold: false, //'Bold (Ctrl+B)'
				italic: false, //'Italic (Ctrl+I)'
				strikethrough: false, //'Strikethrough (Alt+Shift+5)'
				underline: false, // 'Underline (Alt+Shift+6)'
				textColor: false, //'Text color'
				fillColor: false, //'Cell color'
				border: false, //'border'
				mergeCell: false, //'Merge cells'
				horizontalAlignMode: false, //'Horizontal alignment'
				verticalAlignMode: false, //'Vertical alignment'
				textWrapMode: false, //'Wrap mode'
				textRotateMode: false, //'Text Rotation Mode'
				image: false, // 'Insert picture'
				link: false, // 'Insert link'
				chart: false, //'chart' (the icon is hidden, but if the chart plugin is configured, you can still create a new chart by right click)
				postil: false, //'comment'
				pivotTable: false, //'PivotTable'
				function: false, //'formula'
				frozenMode: false, //'freeze mode'
				sortAndFilter: false, //'Sort and filter'
				conditionalFormat: false, //'Conditional Format'
				dataVerification: false, // 'Data Verification'
				splitColumn: false, //'Split column'
				screenshot: false, //'screenshot'
				findAndReplace: false, //'Find and Replace'
				protection: false, // 'Worksheet protection'
				print: false, // 'Print'
			},
			fontList: [
				{
					"fontName": "HanaleiFill",
					"url": "resources/luckysheet/assets/iconfont/HanaleiFill-Regular.ttf"
				},
				{
					"fontName": "Anton",
					"url": "resources/luckysheet/assets/iconfont/Anton-Regular.ttf"
				},
				{
					"fontName": "Pacifico",
					"url": "resources/luckysheet/assets/iconfont/Pacifico-Regular.ttf"
				}
			],
			hook: {
				cellDragStop: function (cell, postion, sheetFile, ctx, event) {
					// console.info(cell, postion, sheetFile, ctx, event);
				},
				rowTitleCellRenderBefore: function (rowNum, postion, ctx) {
					// console.log(rowNum);
				},
				rowTitleCellRenderAfter: function (rowNum, postion, ctx) {
					// console.log(ctx);
				},
				columnTitleCellRenderBefore: function (columnAbc, postion, ctx) {
					// console.log(columnAbc);
				},
				columnTitleCellRenderAfter: function (columnAbc, postion, ctx) {
					// console.log(postion);
				},
				cellRenderBefore: function (cell, postion, sheetFile, ctx) {
					// console.log(cell,postion,sheetFile,ctx);
				},
				cellRenderAfter: function (cell, postion, sheetFile, ctx) {
					// console.log(postion);
				},
				cellMousedownBefore: function (cell, postion, sheetFile, ctx) {
					// console.log(postion);
				},
				cellMousedown: function (cell, postion, sheetFile, ctx) {
					// console.log(sheetFile);
				},
				sheetMousemove: function (cell, postion, sheetFile, moveState, ctx) {
					// console.log(cell,postion,sheetFile,moveState,ctx);
				},
				sheetMouseup: function (cell, postion, sheetFile, moveState, ctx) {
					// console.log(cell,postion,sheetFile,moveState,ctx);
				},
				cellAllRenderBefore: function (data, sheetFile, ctx) {
					// console.info(data,sheetFile,ctx)
				},
				updated: function (operate) {
					// console.info(operate)
				},
				cellUpdateBefore: function (r, c, value, isRefresh) {
					// console.info('cellUpdateBefore',r,c,value,isRefresh)
				},
				cellUpdated: function (r, c, oldValue, newValue, isRefresh) {
					// console.info('cellUpdated',r,c,oldValue, newValue, isRefresh)
				},
				sheetActivate: function (index, isPivotInitial, isNewSheet) {
					// console.info(index, isPivotInitial, isNewSheet)
				},
				rangeSelect: function (index, sheet) {
					// console.info(index, sheet)
				},
				commentInsertBefore: function (r, c) {
					// console.info(r, c)
				},
				commentInsertAfter: function (r, c, cell) {
					// console.info(r, c, cell)
				},
				commentDeleteBefore: function (r, c, cell) {
					// console.info(r, c, cell)
				},
				commentDeleteAfter: function (r, c, cell) {
					// console.info(r, c, cell)
				},
				commentUpdateBefore: function (r, c, value) {
					// console.info(r, c, value)
				},
				commentUpdateAfter: function (r, c, oldCell, newCell) {
					// console.info(r, c, oldCell, newCell)
				},
				cellEditBefore: function (range) {
					// console.info(range)
				},
				workbookCreateAfter: function (json) {
					// console.info(json)
				},
				rangePasteBefore: function (range, data) {
					// console.info('rangePasteBefore',range,data)
					// return false; //Can intercept paste
				},


			},
		}

		options.loading = {
			image: () => {
				return `<svg viewBox="25 25 50 50" class="circular">
					<circle cx="50" cy="50" r="20" fill="none"></circle>
					</svg>`
			},
			imageClass: "loadingAnimation"
		}
		options.cellRightClickConfig = {
			customs: [{
				title: 'test',
				onClick: function (clickEvent, event, params) {
					console.log('function test click', clickEvent, event, params)
				}
			}]
		}
		luckysheet.create(options);
	} else {

	}
	// END USER CODE
}
