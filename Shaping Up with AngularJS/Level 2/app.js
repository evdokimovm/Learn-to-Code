(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{ name: 'Azurite', price: 110.50 },
		{ name: 'Bloodstone', price: 22.90 },
		{ name: 'Zircon', price: 1100 },
	];
	// var gems = [
	//{
	//	name: 'Azurite',
	//	price: 110.50,
	//	images: [
	//	{
	//		full: 'image.jpg',
	//		thumb: 'image.jpg'
	//	},
	//	{
	//		full: 'image.jpg',
	//		thumb: 'image.jpg'
	//	},
	//	]
	//},
	//];
})();
