app.controller('alphaController', function($scope){
	

	$scope.toDoList = [
		{
			itemName: 'Your Mom'
		},
		{
			itemName: 'Get dry cleaning'
		},
		{
			itemName: 'Go to grocery store'
		},
		{
			itemName: 'Eat all the pizza'
		},
		{
			itemName: 'Read all the JavaScript Books'
		},
		{
			itemName: 'Drink all the beer'
		},
		{
			itemName: 'Buy son all the lightsabers'
		},
		{
			itemName: 'Make all the SPA\'s'
		},
		{
			itemName: 'Be all the awesome'
		}
	];

	$scope.addItem = function(item) {

		for (var i = 0; i < $scope.toDoList.length; i++){
			if (item.name.toLowerCase() === $scope.toDoList[i].itemName.toLowerCase()){
				$scope.toDoList.splice(i, 1);
				return;
			};
		};
		$scope.toDoList.push({itemName: item.name});
	};

});