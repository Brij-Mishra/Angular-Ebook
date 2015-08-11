eventModule.factory("EventsService", function ($http, $q) {
    return {
        getTalks: function () {
            // Get the deferred object
            var deferred = $q.defer();
            // Initiates the AJAX call
            $http({ method: 'GET', url: '/events/GetTalkDetails' }).success(deferred.resolve).error(deferred.reject);
            // Returns the promise - Contains result once request completes
            return deferred.promise;
        }
    }
});