browser.contextMenus.create({
	title: browser.i18n.getMessage('context_menu_search'),
	contexts: ['image'],
	onclick: info => {
		browser.storage.local.get(null, prefs => {
			const url = 'http://www.google.com/searchbyimage?image_url=' + encodeURIComponent(info.srcUrl) + '&encoded_image=&image_content=&filename=&hl=&bih=&biw=';
			browser.tabs.create({
				'active': !prefs.loadInBackground,
				'url': url
			});
		});
	}
});
