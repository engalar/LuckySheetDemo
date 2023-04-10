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

function datagridgrowth(data, addr, addc) {
	if (addr <= 0 && addc <= 0) {
		return data;
	}

	if (addr <= 0) {
		addr = 0;
	}

	if (addc <= 0) {
		addc = 0;
	}

	let dataClen = 0;
	if (data.length == 0) {
		data = [];
		dataClen = 0;
	}
	else {
		dataClen = data[0].length;
	}

	let coladd = [];//需要额外增加的空列
	for (let c = 0; c < addc; c++) {
		coladd.push(null);
	}

	let rowadd = [];//完整的一个空行
	for (let r = 0; r < dataClen + addc; r++) {
		rowadd.push(null);
	}

	for (let r = 0; r < data.length; r++) {
		data[r] = [].concat(data[r].concat(coladd));
	}

	for (let r = 0; r < addr; r++) {
		data.push([].concat(rowadd));
	}

	return data;
}
// END EXTRA CODE

/**
 * @param {string} containerId
 * @returns {Promise.<void>}
 */
export async function RenderSingle(containerId) {
	// BEGIN USER CODE
	const [html, aspect] = await injectDeps(['dojo/html', 'dojo/aspect']);
	var myWidget = dojo.dijit.registry.byId(containerId);

	myWidget.addOnDestroy(function () {
		console.log("Widget destroyed!");
		$(document).off("mousemove.luckysheetEvent mouseup.luckysheetEvent");
		//luckysheet.destroy();
	});
	aspect.after(myWidget, 'resize', function () {
		console.log("Widget resized!");

	});

	const luckysheet_id = dijit.registry.getUniqueId('luckysheet');
	const container = document.querySelector('#' + containerId);

	if (container.innerHTML == '') {

		//首次渲染

		html.set(container, `
		<div class="show-btn">
		<button>hide B C D</button>
		<button>show B C D</button>
		<button>add yellow</button>
		<button>remove yellow</button>
		<button>add ps</button>
		<button>remove ps</button>
		<button>more data</button>
		<button>scroll row15</button>
		<button>Formula</button>
		</div>
		<div id="${luckysheet_id}" style="margin:0px;padding:0px;width:100%;height:100%;min-height:500px;">
    </div>
		`);

		// 获取按钮的父元素
		const buttonParent = document.querySelector('div');

		// 添加点击事件监听器到父元素
		buttonParent.addEventListener('click', (event) => {
			// 检查点击的元素是否是一个按钮
			if (event.target.tagName === 'BUTTON') {
				// 获取与该按钮对应的文本
				const content = event.target.textContent;
				if (content == 'Formula') {
					luckysheet.setCellValue(0, 0, 1);
					luckysheet.setCellValue(0, 1, 'a');


					luckysheet.setCellValue(1, 0, 2);
					luckysheet.setCellValue(1, 1, 'b');


					luckysheet.setCellValue(2, 0, 3);
					luckysheet.setCellValue(2, 1, 'c');


					luckysheet.setCellValue(3, 0, 4);
					luckysheet.setCellValue(3, 1, 'd');


					luckysheet.setCellValue(0, 2, 2);

					luckysheet.setCellValue(0, 3, { f: "=VLOOKUP(c1,A1:B17,2)", bg: "#00FF00" });
					luckysheet.refreshFormula();

					// open filter
					$('#luckysheet-icon-autofilter').click();
					$('[itemvalue="filter"]').click();
				}
				if (content == 'scroll row15') {
					luckysheet.scroll({ targetRow: 14 });
					// $("#luckysheet-scrollbar-y") 用jquery监听滚动事件
				}
				if (content == 'more data') {
					// TODO big data
					const data = luckysheet.getluckysheetfile()[0].data;
					const rl = data.length, cl = data[0].length;

					datagridgrowth(luckysheet.getluckysheetfile()[0].data, 100 - rl - 1, 80 - cl - 1);

					//luckysheet.luckysheetextendData(0, []);
					luckysheet.updataSheet({ data: luckysheet.getluckysheetfile() })

					const rows = 90;
					const columns = 70;

					for (let i = 0; i < rows; i++) {
						for (let j = 0; j < columns; j++) {
							//luckysheet.setCellValue(i, j, i + '' + j, { isRefresh: false });
							luckysheet.getluckysheetfile()[0].data[i][j] = {
								"v": i + '_' + j,
								"ct": { "fa": "General", "t": "n" },
								"m": i + '' + j
							}
						}
					}

					luckysheet.refresh();
				}
				// TODO 列和行的隐藏一级展开收缩功能
				if (content == 'hide B C D') {
					luckysheet.hideColumn(1, 3)
				} else {
					luckysheet.showColumn(1, 3)
				}

				if (content == 'add yellow') {
					// create
					luckysheet.setRangeConditionalFormatDefault("betweenness", [2, 10], {
						cellrange: 'a1:d5', format: {
							"textColor": "#000000",
							"cellColor": "#ffff00"
						}
					});

				} else if (content == 'remove yellow') {
					// luckysheet.getluckysheetfile()[0].luckysheet_conditionformat_save
					luckysheet.deleteRangeConditionalFormat(0)
				}
				if (content == 'add ps') {
					luckysheet.setCellValue(0, 0, 3);
					luckysheet.getluckysheetfile()[0].data[0][0].ps = { isshow: true, left: 10, top: 10, width: 50, height: 50, value: 'some note' }
					luckysheet.refresh();

					$('.luckysheet-iconfont-zhushi').click();
					$('[itemvalue="showHideAllPs"]').click();
				} else if (content == 'remove ps') {
					delete luckysheet.getluckysheetfile()[0].data[0][0].ps;
					luckysheet.refresh();

					$('.luckysheet-iconfont-zhushi').click();
					$('[itemvalue="showHideAllPs"]').click();
				}
			}
		});


		// According to the browser language
		var lang = mx.session.sessionData.locale.code.split('_')[0];
		var options = {
			row: 10,
			column: 5,
			container: luckysheet_id,
			lang: lang,
			showinfobar: false,
			showsheetbar: true,
			enableAddRow: false,
			showtoolbar: true,
			allowUpdate: true,
			enableAddBackTop: false,
			forceCalculation: false,
			cellRightClickConfig: {
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
			sheetFormulaBar: true,
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
				postil: true, //'comment'
				pivotTable: false, //'PivotTable'
				function: true, //'formula'
				frozenMode: false, //'freeze mode'
				sortAndFilter: true, //'Sort and filter'
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
					// TODO Comment
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

					// 将字符串解析为DOM元素
					var parser = new DOMParser();
					var doc = parser.parseFromString(data, "text/html");

					// 获取表格元素
					var tableElem = doc.getElementsByTagName("table")[0];

					if (tableElem) {

						// 创建一个空数组来存储提取的数据
						var data2 = [];

						// 遍历表格中的每一行和每一列，将单元格中的数字存储到数组中
						for (var i = 0, row; row = tableElem.rows[i]; i++) {
							data2[i] = [];
							for (var j = 0, col; col = row.cells[j]; j++) {
								data2[i][j] = parseInt(col.innerText);
							}
						}

						// TODO 从线下excel中批量复制数据粘贴至线上excel插件中
						console.log(luckysheet.getcellvalue(range[0].row[0], range[0].column[0]), data2);
					} else {
						// 普通 字符串
						console.log(data);
					}

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
