document.addEventListener('DOMContentLoaded', () => {
	[...document.querySelectorAll('.i18n')].forEach(el => {
		el.textContent = browser.i18n.getMessage(el.textContent);
	});

	browser.storage.local.get(null, (prefs) => {
		document.querySelector('#loadInBackground').checked = prefs.loadInBackground;
	});
});

document.querySelector('#loadInBackground').addEventListener('change', e => {
	browser.storage.local.set({
		loadInBackground: e.target.checked
	});
});
