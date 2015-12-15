const cm = require('sdk/context-menu');
const _ = require('sdk/l10n').get;
const { getMostRecentBrowserWindow } = require('sdk/window/utils')
const data = require("sdk/self").data;
const prefs = require("sdk/simple-prefs").prefs;

cm.Item({
	context: cm.SelectorContext('img'),
	label: _('context_menu_search'),
	contentScriptFile: data.url('context-menu-action.js'),
	onMessage: function(imageUrl) {
		const url = 'http://www.google.com/searchbyimage?image_url=' + encodeURIComponent(imageUrl) + '&encoded_image=&image_content=&filename=&hl=&bih=&biw=';
		const browser = getMostRecentBrowserWindow().gBrowser;
		const tab = browser.loadOneTab(url, {relatedToCurrent: true});
		if (!prefs.loadInBackground) {
			browser.selectedTab = tab;
		}
	}
});
