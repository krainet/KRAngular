(function (app) {
    app.config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                    .state('root.animate', {
                        url: '/animate',
                        parent: 'root',
                        views: {
                            "container@": {
                                controller: 'AnimateController',
                                templateUrl: 'animate/animate.tpl.html'
                            }
                        },
                        data: {
                            pageTitle: 'Animate'
                        }
                    });
        }]);

    app.controller('AnimateController', ['$scope', '$log', '$state', '$animate', function ($scope, $log, $state, $animate) {
            $log.info('App:: Starting AnimateController');

            var init = function () {
                $scope.model = {};
                $scope.model.pageTitle = $state.current.data.pageTitle;
                
                
                $scope.names = ['Igor Minar', 'Brad Green', 'Dave Geddes',
                    'Naomi Black', 'Greg Weber', 'Dean Sofer', 'Wes Alvaro',
                    'John Scott', 'Daniel Nadasi'
                ];

                $scope.friends = [
                    {name: 'John', age: 25, gender: 'boy'},
                    {name: 'Jessie', age: 30, gender: 'girl'},
                    {name: 'Johanna', age: 28, gender: 'girl'},
                    {name: 'Joy', age: 15, gender: 'girl'},
                    {name: 'Mary', age: 28, gender: 'girl'},
                    {name: 'Peter', age: 95, gender: 'boy'},
                    {name: 'Sebastian', age: 50, gender: 'boy'},
                    {name: 'Erika', age: 27, gender: 'girl'},
                    {name: 'Patrick', age: 40, gender: 'boy'},
                    {name: 'Samantha', age: 60, gender: 'girl'}
                ];

                $scope.showDiv1 = false;
                $scope.showDiv2 = false;

            };
            init();

            $scope.showH1 = function () {
                $scope.showDiv1 = ($scope.showDiv1) ? false : true;
            };
            
            $scope.showSearch = function() {
                $scope.showDiv2 = ($scope.showDiv2) ? false : true;
            };



        }]);

}(angular.module("KRAngular.animate", [
    'ui.router',
    'ngAnimate'
])));