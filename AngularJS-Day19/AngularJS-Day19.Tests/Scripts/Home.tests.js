
/// <reference path="../../angularjs-day19/scripts/angular.js" />
/// <reference path="angular-mocks.js" />
/// <reference path="jasmine.js" />
/// <reference path="../../angularjs-day19/scripts/customangular/home.js" />


describe("My First Test -> ", function () {

    it("Add with two positive num", function () {
        expect(Add(2, 3)).toEqual(5);
    });
});


describe("Talk Controller Tests -> ", function () {
    var scope;
    var $ctrlCreator;

    beforeEach(module("homeModule"));
    beforeEach(inject(function ($controller, $rootScope) {
        $ctrlCreator = $controller;
        scope = $rootScope.$new();
    }));


    it("It should have four talks", function () {
        $ctrlCreator("talkController", { $scope: scope });

        expect(scope.talks.length).toBe(4);
    });

});

describe("Talks Service Tests ->", function () {

    var TalksServiceFactory, httpBackend;

    beforeEach(module("homeModule"));

    beforeEach(inject(function ($httpBackend, TalksService) {
        httpBackend = $httpBackend;
        TalksServiceFactory = TalksService;
    }));

    it("Should Return four Talks", function () {
        var talks;

        // Setting the mock up mock http response 
        httpBackend
        .expect('GET', '/home/GetTalkDetails')
        .respond(200, [
            { id: '1001', name: 'Real Time Web Applications with SignalR', speaker: 'Brij Bhushan Mishra', venue: 'Hall 1', duration: '45' },
            { id: '1002', name: 'Power of Node.js', speaker: 'Dhananjay Kumar', venue: 'Hall 2', duration: '75' },
            { id: '1003', name: 'Getting started with AngularJS', speaker: 'Brij Bhushan Mishra', venue: 'Hall 1', duration: '60' },
            { id: '1004', name: 'Microsoft Azure - Your cloud destination', speaker: 'Gaurav mantri', venue: 'Hall 1', duration: '45' }
        ]);

        // calling service
        TalksServiceFactory.getTalks().then(function (response) {
            talks = response;
        });

        // Flushing httpBackend
        httpBackend.flush();

        // verification
        expect(talks.length).toBe(4);
    });
});

describe("Filter Tests ->", function () {

    var filter;
    beforeEach(module('homeModule'));

    beforeEach(inject(function (_$filter_) {
        filter = _$filter_;
    }));

    it('if the number formatted', function () {
        var phoneFilter = filter('ConvertoPhone');

        expect(phoneFilter('1234567891')).toEqual('(123) 456-7891');
    });

});

describe("Custom Directive Tests ->", function () {

    var compileService, rootScope;

    beforeEach(module('homeModule'));

    // Store references to $compile and $rootScope so they can
    // be uses in all tests in this describe block
    beforeEach(inject(function (_$compile_, _$rootScope_) {
        compileService = _$compile_;
        rootScope = _$rootScope_;
        rootScope.talk = {
            name: 'abc', duration: '25m'
        };
        rootScope.name = 'Brij';
    }))

    it('My element Custom Directive defined', function () {

        var compiledDirective = compileService(angular.element('<myelementdirective/>'))(rootScope);

        rootScope.$digest();

        expect(compiledDirective).toBeDefined();

    });

    it('My element Custom Directive renders proper html', function () {

        var compiledDirective = compileService(angular.element('<myelementdirective/>'))(rootScope);

        rootScope.$digest();

        expect(compiledDirective.html()).toContain("Hello Brij !! Welcome to this Angular App");
    });


    it('Bind Custom Directive defined', function () {

        var compiledDirective = compileService(angular.element(' <bindcustomdirective talkinfo="talk" />'))(rootScope);

        rootScope.$digest();

        var isolatedScope = compiledDirective.isolateScope();

        expect(isolatedScope.talkinfo).toBeDefined();
    });

    it('Bind Custom Directive two way binding check', function () {
        var compiledDirective = compileService(angular.element(' <bindcustomdirective talkinfo="talk" />'))(rootScope);

        rootScope.$digest();

        compiledDirective.isolateScope().talkinfo.name = "Building modern web apps with ASP.NET2";

        expect(rootScope.talk.name).toEqual("Building modern web apps with ASP.NET2");
    });

});