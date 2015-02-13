/*
 * Intercept all requests /responses
 * Ej. use to auth-tokens in headers
 */

angular.module('cInterceptor', [])
        .factory('cInterceptor', ['$q', '$rootScope', function ($q, $rootScope) {
                return {
                    'request': function (config) {
                        config.headers = config.headers || {};

                        //Get saved data of your custom header from sessionStorage
                        $rootScope.customHeader = sessionStorage.getItem(CUSTOM_HEADER);

                        config.headers = {
                            'Content-type': 'application/json;charset=UTF-8'
                        };

                        //Add custom header/data to request
                        config.headers[CUSTOM_HEADER] = $rootScope.customHeader;

                        return config;
                    },
                    'response': function (response) {
                        //Save data custom header to send in next request
                        if (response.headers(CUSTOM_HEADER) !== null) {
                            $rootScope.customHeader = response.headers(CUSTOM_HEADER);
                            sessionStorage.setItem(CUSTOM_HEADER, response.headers(CUSTOM_HEADER));
                        } else {
                            $rootScope.customHeader = sessionStorage.getItem(CUSTOM_HEADER);
                        }
                        response.headers('Allow', '*');
                        return response;
                    },
                    'responseError': function (rejection) {
                        var getUrlParam= function(parameterName) {
                            parameterName += "=";
                            var parameterValue = (location.hash.indexOf(parameterName)) ? location.hash.substring(location.hash.indexOf(parameterName) + parameterName.length) : null;
                            if (parameterValue !== null && parameterValue.indexOf('&') >= 0) {
                                parameterValue = parameterValue.substring(0, parameterValue.indexOf('&'));
                            }
                            return parameterValue;
                        };
                        
                        console.log('Reject::');
                        var code = getUrlParam('code');
                        console.log(code);
                        console.log(rejection);
                        return $q.reject(rejection);
                    }
                };
            }
        ]);

