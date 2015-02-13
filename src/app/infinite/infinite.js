(function (app) {
    app.config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                    .state('root.infinite', {
                        url: '/infinite',
                        parent: 'root',
                        views: {
                            "container@": {
                                controller: 'InfiniteController',
                                templateUrl: 'infinite/infinite.tpl.html'
                            }
                        },
                        data: {
                            pageTitle: 'Infinite Scroll'
                        }
                    });
        }]);

    app.run(['$rootScope', '$log', function ($rootScope,$log) {
            
            //Control of $stateChanes of UI-Router
            $rootScope.$on('$stateChangeError', function (event) {
                //$log.info('UI-Router:: $stateChangeError');
            });

            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                //$log.info('UI-Router:: $stateChangeStart');
            });

            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                //$log.info('UI-Router:: $stateChangeSuccess');
            });
        }]);

    app.controller('InfiniteController', ['$scope', '$log', '$state', '$timeout', 'infiniteService', '$http', function ($scope, $log, $state, $timeout, infiniteService, $http) {
            $log.info('App:: Starting InfiniteController');

            var init = function () {
                $scope.model = {};
                $scope.model.pageTitle = $state.current.data.pageTitle;
                $scope.scroll = {};
                $scope.scroll.ipsum = "Lucas ipsum dolor sit amet porkins latter unduli sidious thennqora djo lowbacca plo garm sullustan. Yuzzum panaka jagged teevan. Aayla -lom chadra-fan dodonna muun keyan fel xanatos. Yarael gorog hapan tibor jubnuk chagrian. Antilles ferroans vulptereen mirax triclops bibble chagrian ziro calrissian. Cody tarasin ferroans choka. Jango bib kyle rahm olié halla binks jango. Nute veers yuuzhan binks fode polis tc-14 rahn ponda. Unu wol hutt billaba beru yaddle mimbanite. Bajic b'omarr raynar dexter";
                $scope.random_words = $scope.scroll.ipsum.split(' ');
                $scope.scroll.items = [{name: 'KRAngular'}, {name: 'AngularJS'}, {name: 'Boilerplate'}];
                $scope.scroll.loading = false;
            };

            init();


            //Load data from service
            $scope.scroll.loadMore2 = function () {
                $log.info('InfiniteScroll:: Loading more...');

                var items = {};

                $scope.scroll.loading = true;
                infiniteService.getBacon().then(function (data) {
                    console.log(data);
                    items.desc = data.data.lorem;
                    items.name = 'Ramon';
                    items.surname = 'Alberti';
                    items.placeholder = data.placeholder;
                    $scope.scroll.items.push(items);
                    $scope.scroll.loading = false;
                });
            };

            $scope.scroll.loadMore = function () {
                $log.info('InfiniteScroll:: Loading more...');


                $scope.scroll.loading = true;

                $http.get('http://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=0').
                        success(function (data, status, headers, config) {
                            var items = {};
                            var ipsum = data[0];
                            var split_ipsum = ipsum.split(' ');
                            var index = Math.floor(Math.random() * (split_ipsum.length - 0 + 1)) + 0;

                            if (split_ipsum[index]) {
                                items.name = split_ipsum[index].replace('.', '');
                            } else {
                                items.name = 'testImage' + index;
                            }

                            $scope.scroll.items.push(items);
                            $scope.scroll.loading = false;
                        }).
                        error(function (data, status, headers, config) {
                            // called asynchronously if an error occurs
                            // or server returns response with an error status.
                        });
            };



        }]);

}(angular.module("KRAngular.infinite", [
    'ui.router',
    'infinite-scroll',
    'infiniteService'
])));