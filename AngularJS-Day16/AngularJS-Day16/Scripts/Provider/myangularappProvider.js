myangularapp.provider('RequestProcessor', function () {

    var requestId = '00000000';

    this.setrequestId = function (value) {
        requestId = value;
    };

    this.$get = function () {
        return "Processing Request Id : " + requestId;
    };
});