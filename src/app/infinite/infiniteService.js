/* 
 * Api Test Módule
 */
angular.module('infiniteService', [])
        .factory('infiniteService', ['$resource', '$q', '$timeout', '$state','$log',
            function ($resource, $q, $timeout, $state,$log) {
                return {
                    api: function (extra_route) {
                        if (!extra_route) {
                            extra_route = '';
                        }
                        return $resource(API_URL + '/infinite.php', {}, {
                            query: {
                                timeout: 15000
                            },
                            save: {
                                timeout: 15000,
                                method: 'POST'
                            },
                            get: {
                                timeout: 15000,
                                method: 'GET'
                            }
                        });
                    },
                    getAction: function () {
                        //Service action with promise resolve (then)
                        var def = $q.defer();
                        this.api().get({}, {}, function (data) {
                            $log.warn('Api::data:: ');
                            $log.warn(data);
                            def.resolve(data);
                        }, function (err) {
                            def.reject(err);
                        });
                        return def.promise;
                    },
                    getBacon: function() {
                        var myData = {};
                        var def = $q.defer();
                        this.api().get({},{}, function(data) {
                            $log.warn('Api::infinite:: ');
                            $log.warn(data);
                            def.resolve(data);
                        });
                        return def.promise;
                    },
                    testFunction: function () {
                        alert('testFunction');
                    }
                };
            }]);



