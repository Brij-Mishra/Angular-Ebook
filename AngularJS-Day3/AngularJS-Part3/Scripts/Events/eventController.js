eventModule.controller("eventController", function ($scope, InitialLoadService) {
    $scope.talks = InitialLoadService.talks;
});
