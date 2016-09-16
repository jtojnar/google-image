const defaultPrefs = {
	loadInBackground: true
};

browser.contextMenus.create({
	title: browser.i18n.getMessage('context_menu_search'),
	contexts: ['image'],
	onclick: (info, tab) => {
		browser.storage.local.get(null, currentPrefs => {
			const prefs = Object.assign({}, defaultPrefs, currentPrefs);
			const url = 'http://www.google.com/searchbyimage?image_url=' + encodeURIComponent(info.srcUrl) + '&encoded_image=&image_content=&filename=&hl=&bih=&biw=';
			browser.tabs.create({
				'active': !prefs.loadInBackground,
				'url': url,
				'openerTabId': tab.id
			});
		});
	}
});
