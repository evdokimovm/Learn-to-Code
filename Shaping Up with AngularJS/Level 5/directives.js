(function() {
	var app = angular.module('store-products', []);

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
})();