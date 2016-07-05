var ServiceApp = angular.module('ServiceApp',[]);

ServiceApp.controller('ServiceController', function($scope){
	this.pomme = "yolo";
	$scope.frite = "une fois";



	var products = [
{
    name: 'Web Development',
    price: 300,
    active:true
},{
    name: 'Design',
    price: 400,
    active:false
},{
    name: 'Integration',
    price: 250,
    active:false
},{
    name: 'Formation',
    price: 220,
    active:false
}
];

	$scope.products = products;
	$scope.serviceCount = 1;
	$scope.total = 300;

	// var countService = function(){
	// 	var count = 0;
	// 	if (product.active = true) {
	// 		count += 1;
	// 		return 'atchoum';
	// 	}
	// 	else {
	// 		count -= 1;
	// 		return 'snif';
	// 	}
	// };

	$scope.validation = function (product) {
		 if (product.active == false) {
		 	product.active = true;
		 	$scope.serviceCount += 1;
		 	$scope.total += product.price;
		 	console.log('false to true');
		 }
		 else if (product.active == true) {
		 	product.active = false;
		 	$scope.serviceCount -= 1;
		 	$scope.total -= product.price;
		 	console.log('true to false');
		 };

};




});




