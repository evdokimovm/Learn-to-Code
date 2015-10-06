(function() {
	var app = angular.module('store', []);

	app.controller('Controller', function(){
		this.products = gem;
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

	app.controller('ReviewController', function() {
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	app.directive('productTitle', function(){
		return {
			// restrict: 'E',
			restrict: 'A',
			templateUrl: 'product-title.html'
		};
	});

	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html'
		};
	});

	app.directive('productGallery', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-gallery.html'
		};
	});

	app.directive('productPanels1', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-panels1.html'
		};
	});
	
	var gem = 
	[
			{
				name: 'Awesome Multi-touch Keyboard',
				price: 250.00,
				description: "Lorem ipsum Duis ad amet. Lorem ipsum Aute qui in.",
				images: 
				[
						"images/gem-02.gif",
						"images/gem-05.gif",
						"images/gem-09.gif"
				],
				reviews: 
				[
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

})();