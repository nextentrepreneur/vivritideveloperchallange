angular.module('vivriti', [])
.controller('beerListController', function($scope, $http) {
    $http.get('http://starlord.hackerearth.com/beercraft').
        then(function(response) {
            $scope.beerList = response.data;

        });
});


