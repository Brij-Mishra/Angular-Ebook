var eventModule = angular.module("eventModule", ['ngRoute'])
.config(function ($routeProvider) {
                        //Path - it should be same as href link
    $routeProvider.when('/Talks', { templateUrl: '/Templates/Talk.html', controller: 'eventController' });
    $routeProvider.when('/Speakers', { templateUrl: '/Templates/Speaker.html', controller: 'speakerController' });
    $routeProvider.when('/AddTalk', { templateUrl: '/Templates/AddTalk.html', controller: 'talkController' });
    //$locationProvider.html5Mode(true);
});

//eventModule.config(['$routeProvider',
//  function ($routeProvider) {
//      $routeProvider.
//        when('/Talks', {
//            templateUrl: '/Templates/Talk.html',
//            controller: 'eventController'
//        }).
//        when('/Speakers', {
//            templateUrl: '/Templates/Speaker.html',
//            controller: 'speakerController'
//        }).
//        otherwise({
//            redirectTo: '/Events'
//        });
//  }]);