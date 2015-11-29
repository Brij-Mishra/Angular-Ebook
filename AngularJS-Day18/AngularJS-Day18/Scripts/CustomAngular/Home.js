function Add(firstnum, secondnum) {
    return firstnum + secondnum;
}

var homeModule = angular.module("homeModule", []);

homeModule.controller("talkController", ['$scope', function ($scope) {

    $scope.talks = [
        { id: '1001', name: 'Real Time Web Applications with SignalR', speaker: 'Brij Bhushan Mishra', venue: 'Hall 1', duration: '45' },
        { id: '1002', name: 'Power of Node.js', speaker: 'Dhananjay Kumar', venue: 'Hall 2', duration: '75' },
        { id: '1003', name: 'Getting started with AngularJS', speaker: 'Brij Bhushan Mishra', venue: 'Hall 1', duration: '60' },
        { id: '1004', name: 'Microsoft Azure - Your cloud destination', speaker: 'Gaurav mantri', venue: 'Hall 1', duration: '45' }
    ];

}]);