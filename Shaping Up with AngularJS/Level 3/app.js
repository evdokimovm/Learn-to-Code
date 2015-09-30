(function() {
	var app = angular.module('store', []);

	app.controller('Controller', function(){
		this.product = gem;
	});

	app.controller('Controller', function(){
		this.products = [
			{
				name: 'Awesome Multi-touch Keyboard',
				price: 250.00,
				description: "...",
				images: [
					        "images/gem-02.gif",
							"images/gem-05.gif",
							"images/gem-09.gif"
						],
				reviews: [
					{
						stars: 5,
						body: "I love this product!",
						author: "joe@thomas.com"
					},
					{
						stars: 1,
						body: "This product sucks",
						author: "tim@hater.com"
					}
				]
			},
		];
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