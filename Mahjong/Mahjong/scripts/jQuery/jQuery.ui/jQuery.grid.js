function GridView(params) {
	'use strict';
	var grid = $('<table>'),
		gridCaption = $('<caption>').text(params.caption),
		gridHead = $('<thead>'),
		gridHeadRow = $('<tr>'),
		gridFoot = $('<tfoot>'),
		gridBody = $('<tbody>'),
		names = params.header.names;
	for (let i = 0; i < names.length; i++) {
		gridHeadRow.append($('<th>').text(names[i].caption));
	}
	gridHead.append(gridHeadRow);

	for (let i = 0; i < params.data.length; i++) {
		let gridRow = $('<tr>'),
			data = params.data[i];
		for (let j = 0; j < names.length; j++) {
			let name = names[j],
				cell = $('<td>'),
				cellText = data[name.field];
			if (name.template) {
				let template = $(name.template.tagName);
				if ('function' == typeof name.click) {
					template.on('click', name.click);
				}
				if (name.template.attr) {
					for (var label in name.template.attr)
						template.attr(name.template.attr);
				}
				
				cell.append(template.content(cellText));
			} else {
				cell.content(cellText);
				if ('function' == typeof name.click) {
					cell.on('click', name.click);
				}
			}
			gridRow.append(cell);
		}
		gridBody.append(gridRow);
	}
	return grid.append(gridCaption, gridHead, gridBody, gridFoot);
}