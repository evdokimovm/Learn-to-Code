(function() {
	var app = angular.module('store', []);

	app.controller('Controller', function(){
		this.product = gem;
	});

	app.controller('PanelController', function() {
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	var gem = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Lorem ipsum Magna velit incididunt amet amet. Lorem ipsum Proident ut ex.',
		canPurchase: true,
		// soldOut: true,
	},

	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Lorem ipsum Magna velit incididunt amet amet.',
		canPurchase: true,
		// soldOut: true,
	},
	];

})();