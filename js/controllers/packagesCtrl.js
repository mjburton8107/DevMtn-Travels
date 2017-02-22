angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv){

  $scope.locations = mainSrv.travelInfo;

});
