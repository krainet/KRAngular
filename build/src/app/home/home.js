(function (app) {
    app.config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                    .state('root.home', {
                        url: '/',
                        parent: 'root',
                        views: {
                            "container@": {
                                controller: 'HomeController',
                                templateUrl: 'home/home.tpl.html'
                            }
                        },
                        data: {
                            pageTitle: 'Home'
                        }
                    });                               
        }]);

    app.controller('HomeController', ['$log','$scope','$state', function ($log,$scope,$state) {

            var init = function () {
                $log.info('App:: Starting HomeController');
                $scope.model={};
                $scope.model.pageTitle=$state.current.data.pageTitle;
            };

            init();

        }]);
}(angular.module("KRAngular.home", [
    'ui.router'
])));