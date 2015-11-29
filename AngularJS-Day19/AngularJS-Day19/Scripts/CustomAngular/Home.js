function Add(firstnum, secondnum) {
    return firstnum + secondnum;
}

var homeModule = angular.module("homeModule", []);

homeModule.controller("talkController", ['$scope', 'TalksService', function ($scope, TalksService) {

    $scope.talks = [
        { id: '1001', name: 'Real Time Web Applications with SignalR', speaker: 'Brij Bhushan Mishra', venue: 'Hall 1', duration: '45' },
        { id: '1002', name: 'Power of Node.js', speaker: 'Dhananjay Kumar', venue: 'Hall 2', duration: '75' },
        { id: '1003', name: 'Getting started with AngularJS', speaker: 'Brij Bhushan Mishra', venue: 'Hall 1', duration: '60' },
        { id: '1004', name: 'Microsoft Azure - Your cloud destination', speaker: 'Gaurav mantri', venue: 'Hall 1', duration: '45' }
    ];

    //TalksService.getTalks().then(function(talks) { $scope.talks = talks; }, function() {
    //    alert('error while fetching talks from server');
    //});

    $scope.talk = { name: 'Building modern web apps with ASP.NET5', duration: '60m' };
}]);


homeModule.factory("TalksService", function ($http, $q) {
    return {
        getTalks: function () {
            // Get the deferred object
            var deferred = $q.defer();
            // Initiates the AJAX call
            $http({ method: 'GET', url: '/home/GetTalkDetails' }).success(deferred.resolve).error(deferred.reject);
            // Returns the promise - Contains result once request completes
            return deferred.promise;
        }
    }
});

homeModule.directive('myelementdirective', function () {
    var directive = {};
    directive.restrict = 'E'; //restrict this directive to elements
    directive.template = "Hello {{name}} !! Welcome to this Angular App";
    return directive;
});


homeModule.directive('bindcustomdirective', function () {
    var directive = {
        restrict: 'E', // restrict this directive to elements
        scope: { talkinfo: '=' },
        template: "<input type='text' ng-model='talkinfo.name'/>" +
            "<div>{{talkinfo.name}} : {{talkinfo.duration}}</div> ",
    };
    return directive;
});

homeModule.filter('ConvertoPhone', function () {
    return function (item) {
        var temp = ("" + item).replace(/\D/g, '');
        var temparr = temp.match(/^(\d{3})(\d{3})(\d{4})$/);
        return (!temparr) ? null : "(" + temparr[1] + ") " + temparr[2] + "-" + temparr[3];
    };
});