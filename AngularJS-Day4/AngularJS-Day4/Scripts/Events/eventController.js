eventModule.controller("eventController", function ($scope, EventsService) {
    EventsService.getTalks().then(function (talks) { $scope.talks = talks }, function ()
    { alert('error while fetching talks from server') })
});