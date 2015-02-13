(function (app) {
    app.config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                    .state('root.uibootstrap', {
                        url: '/uibootstrap',
                        parent: 'root',
                        views: {
                            "container@": {
                                controller: 'UibootstrapController',
                                templateUrl: 'uibootstrap/uibootstrap.tpl.html'
                            }
                        },
                        data: {
                            pageTitle: 'Uibootstrap'
                        }
                    });
        }]);

    app.controller('UibootstrapController', ['$log', '$scope','$state', function ($log, $scope,$state) {
            $log.info('App:: Starting AboutController');

            var init = function () {
                $scope.model = {};
                $scope.model.pageTitle = $state.current.data.pageTitle;
            };

            init();

            //Bootstrap
            $scope.singleModel = 1;

            $scope.radioModel = 'Middle';

            $scope.checkModel = {
                left: false,
                middle: true,
                right: false
            };

        }]);

}(angular.module("KRAngular.uibootstrap", [
    'ui.router'
])));