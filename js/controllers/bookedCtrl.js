// You will need to write a function that checks the url params and then loops over the data object in the service and then returns
// the object the matches the id being passed in the url params. Do this in your controller

angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv){

    console.log($stateParams.id)
    // var id = $stateParams.location.id

    console.log('mainSrv.travelInfo', mainSrv.travelInfo)
    $scope.locations = mainSrv.travelInfo

    for (var i = 0; i < $scope.locations.length; i++){
      console.log("scope locations id", $scope.locations[i].id)
      console.log("state params", $stateParams.id)
      if($scope.locations[i].id == $stateParams.id){
        console.log("IF BLOCK RUNNING")
        $scope.locationChosen = $scope.locations[i];
      }

      console.log($scope.locationChosen)
    }



    // $scope.locations.forEach(function(location){
    //   if(location.id === $stateParams.id){
    //     $scope.locationChosen = location;
    //   }
    //   console.log($scope.locationChosen)
    //   return $scope.locationChosen;
    // });


});
