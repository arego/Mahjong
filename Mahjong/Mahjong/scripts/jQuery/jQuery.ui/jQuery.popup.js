function Popup(params) {

	var popup = $('<popup>').attr({ id: params.id }).append(params.dimLayer),
		titlebar = $('<titlebar>').append(params.titlebar),
		content = $('<content>').append(params.content),
		buttonbar = $('<buttonbar>').append(params.buttonbar);

	popup.append(titlebar, content, buttonbar);

	popup.show = function () {
		this.style.display = open ? 'block' : 'none';
	}
	return popup;
}