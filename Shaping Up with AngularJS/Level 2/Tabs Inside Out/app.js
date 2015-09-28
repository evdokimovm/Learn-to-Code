(function() {
	var app = angular.module('store', []);

	app.controller('Controller', function(){
		this.product = gem;
	});

	var gem = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Lorem ipsum Amet esse nulla Duis in eiusmod in enim sint elit sint sed incididunt dolore qui enim Excepteur aute ea nulla amet dolor nulla voluptate laboris eu aute qui proident est aute eiusmod reprehenderit fugiat minim quis cillum magna exercitation.',
		canPurchase: true,
		// soldOut: true,
	},
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Rorem ipsum Amet esse nulla Duis in eiusmod in enim sint elit sint sed incididunt dolore qui enim Excepteur aute ea nulla amet dolor nulla voluptate laboris eu aute qui proident est aute eiusmod reprehenderit fugiat minim quis cillum magna exercitation.',
		canPurchase: true,
		// soldOut: true,
	},
	];

})();