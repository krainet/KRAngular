/* 
 * Global Services Test Módule
 */
angular.module('globalService', [])
        .factory('globalService', ['$resource', '$q', '$log',
            function ($resource, $q, $log) {
                return {
                    api: function (extra_route) {
                        if (!extra_route) {
                            extra_route = '';
                        }
                        return $resource(API_URL + '/' + extra_route, {}, {
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
                    testFunction: function () {
                        alert('testFunction');
                    },
                    getUrlParam: function (parameterName) {
                        parameterName += "=";
                        var parameterValue = (location.hash.indexOf(parameterName)) ? location.hash.substring(location.hash.indexOf(parameterName) + parameterName.length) : null;
                        if (parameterValue !== null && parameterValue.indexOf('&') >= 0) {
                            parameterValue = parameterValue.substring(0, parameterValue.indexOf('&'));
                        }
                        return parameterValue;
                    }
                };
            }]);



