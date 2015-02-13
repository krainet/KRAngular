(function (app) {
    app.config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                    .state('root.about', {
                        url: '/about',
                        parent: 'root',
                        views: {
                            "container@": {
                                controller: 'AboutController',
                                templateUrl: 'about/about.tpl.html'
                            }
                        },
                        data: {
                            pageTitle: 'About'
                        }
                    });
        }]);

    app.controller('AboutController', ['$scope', '$log','$state', function ($scope, $log,$state) {
            $log.info('App:: Starting AboutController');

            var init = function () {
                $scope.model = {};
                $scope.model.pageTitle = $state.current.data.pageTitle;

            };
            init();
        }]);

}(angular.module("KRAngular.about", [
    'ui.router'
])));