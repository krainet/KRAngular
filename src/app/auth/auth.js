(function (app) {
    app.config(['$stateProvider', 'FacebookProvider',
        function ($stateProvider, FacebookProvider) {
            $stateProvider
                    .state('root.auth', {
                        url: '/auth',
                        parent: 'root',
                        views: {
                            "container@": {
                                controller: 'AuthController',
                                templateUrl: 'auth/auth.tpl.html'
                            }
                        },
                        data: {
                            pageTitle: 'Auth'
                        }
                    })
                    .state('root.authfacebook', {
                        url: '/auth/facebook?code',
                        parent: 'root',
                        resolve: {
                            specialday: (['globalService', '$stateParams', '$rootScope', '$q', '$state', '$timeout', '$log',
                                function (globalService, $stateParams, $rootScope, $q, $state, $timeout, $log) {
                                    var code = $stateParams.code;
                                    $stateParams.access_token = code;
                                    sessionStorage.setItem('access_token', code);
                                }])
                        },
                        views: {
                            "container@": {
                                controller: 'AuthFacebookController',
                                templateUrl: 'auth/auth-facebook.tpl.html'
                            }
                        },
                        data: {
                            pageTitle: 'Auth Facebook'
                        }
                    });

            FacebookProvider.init('357912714370104');

        }]);

    app.controller('AuthController', ['$scope', '$log', '$state', 'Facebook', function ($scope, $log, $state, Facebook) {
            $log.info('App:: Starting AuthController');
            var init = function () {
                $scope.model = {};
                $scope.model.pageTitle = $state.current.data.pageTitle;

            };

            init();

            $scope.loginStatus = 'disconnected';
            $scope.facebookIsReady = false;
            $scope.user = {
                first_name : '',
                email : ''
            };

            $scope.login = function () {
                Facebook.login(function (response) {
                    $scope.loginStatus = response.status;
                });
            };

            $scope.removeAuth = function () {
                Facebook.logout(function (response) {
                    Facebook.getLoginStatus(function (response) {
                        $scope.loginStatus = response.status;
                        $scope.user.first_name='';
                        $scope.user.email='';
                    });
                });
            };


            $scope.api = function () {
                Facebook.api('/me', function (response) {
                    $scope.user = response;
                });
            };

            $scope.$watch(function () {
                return Facebook.isReady();
            }, function (newVal) {
                if (newVal) {
                    $scope.facebookIsReady = true;
                }
            }
            );

        }]);

    app.controller('AuthFacebookController', ['$scope', '$log', '$state', '$auth', '$stateParams',
        function ($scope, $log, $state, $auth, $stateParams) {
            $log.info('App:: Starting AuthFacebookController');
            var init = function () {
                $scope.model = {};
                $scope.model.pageTitle = $state.current.data.pageTitle;
                localStorage.setItem('tmp_code', $stateParams.access_token);
            };

            init();
        }]);

}(angular.module("KRAngular.auth", [
    'ui.router',
    'globalService',
    'facebook'
])));