eventModule.controller("eventController", function ($scope, InitialLoadService) {
    $scope.talks = InitialLoadService.talks;
  
  
    $scope.update = function () {
        $scope.talks[0].name = 'Talk Name updated';
    };
    // Enable below for two way binding only and also go in Views folder and rename Index_twowaybinding to Index and current index file to Index_onewaybinding

    //$scope.editDuration = false;

    //$scope.ShowEdit = function () {
    //    $scope.editDuration = true;
    //};

    //$scope.HideEdit = function () {
    //    $scope.editDuration = false;
    //};

    //$scope.deleteItem = function (index) {
    //    $scope.talks.splice(index, 1);
    //}
    //$scope.TotalDuration = function () {
    //    var sumofDuration = 0;
    //    for (var i in $scope.talks) {
    //        sumofDuration += parseInt($scope.talks[i].duration);
    //    }
    //    return sumofDuration;
    //}
});
