eventModule.controller("speakerController", function ($scope, EventsService) {
    EventsService.getSpeakers().then(function (speakers) { $scope.speakers = speakers }, function ()
    { alert('error while fetching speakers from server') })
});