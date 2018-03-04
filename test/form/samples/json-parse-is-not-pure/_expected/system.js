System.register([], function (exports, module) {
	'use strict';
	return {
		execute: function () {

			var main = exports('default', (input) => {
				try {
					JSON.parse(input);
					return true;
				} catch (e) {
					return false;
				}
			});

		}
	};
});
