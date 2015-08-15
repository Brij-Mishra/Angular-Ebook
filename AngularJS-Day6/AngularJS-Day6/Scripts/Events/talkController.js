eventModule.controller("talkController", function ($scope, $location, EventsService) {
    $scope.add = function (talk) {
        EventsService.addTalk(talk).then(function () {
           $location.url('/Talks'); }, function ()
        { alert('error while adding talk at server') });
    };
});
