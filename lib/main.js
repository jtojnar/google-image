var cm = require('sdk/context-menu');
var _ = require('sdk/l10n').get;
var tabs = require('sdk/tabs');
var data = require("sdk/self").data;

cm.Item({
	context: cm.SelectorContext('img'),
	label: _('context_menu_search'),
	contentScriptFile: data.url('context-menu-action.js'),
	onMessage: function(url) {
		tabs.open('http://www.google.com/searchbyimage?image_url=' + encodeURIComponent(url) + '&encoded_image=&image_content=&filename=&hl=&bih=&biw=');
	}
});
