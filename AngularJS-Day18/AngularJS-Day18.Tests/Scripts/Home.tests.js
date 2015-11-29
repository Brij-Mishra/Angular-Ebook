
/// <reference path="../../angularjs-day18/scripts/angular.js" />
/// <reference path="angular-mocks.js" />
/// <reference path="jasmine.js" />
/// <reference path="../../angularjs-day18/scripts/customangular/home.js" />



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