var TradeListApp = angular.module('TradeListApp', ['ngMaterial']);



TradeListApp.controller('TradeListCtrl', function ($scope) {

	  $scope.title = 'List';
	  $scope.trades = [
	    {
	     "curs": "HTML",
 		 "money": 20},
	    {
	     "curs": "JS",
		 "money": 50},
	    {
	     "curs": "Html5+Css3",
		 "money": 10}
	  ];

	  $scope.AddNewCurs = function () {

	  	if($scope.curs!= "") {
	  		$scope.trades.push({
	  			curs:$scope.curs,
	  			money:$scope.money
	  		})
	  		$scope.money="";
	  		$scope.curs="";
	  	}
	  }

	  $scope.deleteCurs = function ( id ) {
	    $scope.trades.splice( id, 1 );
	    console.log(id);
	  }

	  $scope.getTotal = function(){
	      var total = 0;
	      for(var i = 0; i < $scope.trades.length; i++){
	          total += trades.money;
	      }
	      return total;
	  }

	  $scope.total = function() {
	          var total = 0;
	          angular.forEach($scope.carts, function(item) {
              total += trades.money;
});


