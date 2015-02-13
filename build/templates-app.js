angular.module('templates-app', ['about/about.tpl.html', 'animate/animate.tpl.html', 'apitest/apitest.tpl.html', 'auth/auth-facebook.tpl.html', 'auth/auth.tpl.html', 'home/home.tpl.html', 'infinite/infinite.tpl.html', 'uibootstrap/uibootstrap.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<h1>KRAngular - NCC1701 Enterprise</h1>\n" +
    "\n" +
    "<p>Code it up for module : <strong>{{model.pageTitle}}</strong></p>\n" +
    "\n" +
    "<button class=\"btn btn-primary\" ng-click=\"\" ui-sref=\"root.home\">go Home</button>\n" +
    "<p>&nbsp;</p>\n" +
    "");
}]);

angular.module("animate/animate.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("animate/animate.tpl.html",
    "<h1>KRAngular - NCC1701 Enterprise</h1>\n" +
    "\n" +
    "<p>Code it up for module : <strong>{{model.pageTitle}}</strong></p>\n" +
    "\n" +
    "<button class=\"btn btn-primary\" ng-click=\"\" ui-sref=\"root.home\">go Home</button>\n" +
    "<p><hr></p>\n" +
    "<button class=\"btn btn-primary\" ng-click=\"showH1()\">Show H1</button>\n" +
    "<button class=\"btn btn-primary\" ng-click=\"showSearch()\">Search!</button>\n" +
    "\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "    <div>\n" +
    "        <hr />\n" +
    "        <h1 class=\"my-animation\" ng-show=\"showDiv1\">\n" +
    "            Wellcome to ngAnimate! :D\n" +
    "        </h1>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"well my-animation\" style=\"margin-top: 30px; width: 90%; overflow: hidden;\" ng-show=\"showDiv2\">\n" +
    "    <form class=\"form-search\"> \n" +
    "    <div class=\"input-group\">\n" +
    "        <input type=\"search\" ng-model=\"q\" class=\"form-control\" placeholder=\"Search\" name=\"srch-term\" id=\"srch-term\">\n" +
    "        <div class=\"input-group-btn\">\n" +
    "            <button class=\"btn btn-default\" type=\"submit\"><i class=\"fa fa-search\"></i></button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <ul class=\"nav nav-pills nav-stacked\">\n" +
    "        <li class=\"animate-repeat\" ng-repeat=\"friend in friends| filter:q as results\">\n" +
    "            {{friend.name}}\n" +
    "        </li>\n" +
    "        <li class=\"animate-repeat\" ng-if=\"results.length == 0\">\n" +
    "            <strong>No results found...</strong>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("apitest/apitest.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apitest/apitest.tpl.html",
    "<h1>KRAngular - NCC1701 Enterprise</h1>\n" +
    "\n" +
    "<p>Code it up for module : <strong>{{model.pageTitle}}</strong></p>\n" +
    "\n" +
    "<button class=\"btn btn-primary\" ng-click=\"\" ui-sref=\"root.home\">go Home</button>\n" +
    "<p>&nbsp;</p>");
}]);

angular.module("auth/auth-facebook.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/auth-facebook.tpl.html",
    "<h1>KRAngular - NCC1701 Enterprise</h1>\n" +
    "\n" +
    "<p>Code it up for module : <strong>{{model.pageTitle}}</strong></p>\n" +
    "\n" +
    "\n" +
    "<p>&nbsp;</p>\n" +
    "<button class=\"btn btn-warning\" ng-click=\"\" ui-sref=\"root.home\">go Home</button>\n" +
    "\n" +
    "<p>&nbsp;</p>");
}]);

angular.module("auth/auth.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/auth.tpl.html",
    "<h1>KRAngular - NCC1701 Enterprise</h1>\n" +
    "\n" +
    "<p>Code it up for module : <strong>{{model.pageTitle}}</strong></p>\n" +
    "\n" +
    "<button type=\"button\" class=\"btn btn-primary\" id=\"login\" ng-click=\"login()\">\n" +
    "        <i class=\"fa fa-facebook-official\"></i> Login with Facebook\n" +
    "</button>\n" +
    "<button type=\"button\" class=\"btn btn-primary\" id=\"api\" ng-click=\"api()\">\n" +
    "    <i class=\"fa fa-user\"></i> Get Username from Api\n" +
    "</button>\n" +
    "<button type=\"button\" class=\"btn btn-primary\" id=\"remove_auth\" ng-click=\"removeAuth()\">\n" +
    "    <i class=\"fa fa-sign-out\"></i> Log Out\n" +
    "</button>\n" +
    "\n" +
    "<p>&nbsp;</p>\n" +
    "\n" +
    "<pre>isReady: <span id=\"is_ready\" ng-bind=\"facebookIsReady\"></span></pre>\n" +
    "<pre>status: <span id=\"login_status\" ng-bind=\"loginStatus\"></span></pre>\n" +
    "<pre>\n" +
    "    <span>Username:</span>\n" +
    "    <span id=\"api_first_name\" ng-bind=\"user.first_name\"></span>\n" +
    "    <span id=\"api_first_name\" ng-bind=\"user.email\"></span>\n" +
    "</pre>\n" +
    "\n" +
    "\n" +
    "<p>&nbsp;</p>\n" +
    "<button class=\"btn btn-warning\" ng-click=\"\" ui-sref=\"root.home\">go Home</button>\n" +
    "\n" +
    "<p>&nbsp;</p>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<h1>KRAngular - NCC1701 Enterprise</h1>\n" +
    "\n" +
    "<p>Code it up for module : <strong>{{model.pageTitle}}</strong></p>\n" +
    "\n" +
    "<button class=\"btn btn-primary\" ng-click=\"\">Click Me</button>\n" +
    "");
}]);

angular.module("infinite/infinite.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("infinite/infinite.tpl.html",
    "<h1>KRAngular - NCC1701 Enterprise</h1>\n" +
    "\n" +
    "<p>Code it up for module : <strong>{{model.pageTitle}}</strong></p>\n" +
    "\n" +
    "\n" +
    "<button class=\"btn btn-primary\" ng-click=\"\" ui-sref=\"root.home\">go Home</button>\n" +
    "<p>&nbsp;</p>\n" +
    "\n" +
    "<div infinite-scroll='scroll.loadMore()' infinite-scroll-disabled='scroll.loading' infinite-scroll-distance='0'>\n" +
    "    <div ng-repeat='item in scroll.items'>\n" +
    "        <div>{{item.name}}</div>\n" +
    "        <div>\n" +
    "            <img src=\"http://lorempixel.com/400/200/sports/{{item.name}}\" style=\"max-width:100%;height:auto;\">\n" +
    "        </div>\n" +
    "        <div style='clear: both;'></div>\n" +
    "        <p>&nbsp;</p>\n" +
    "    </div>\n" +
    "    <div ng-show='scroll.loading' style=\"text-align: center\">\n" +
    "        <div id=\"circularG\">\n" +
    "            <div id=\"circularG_1\" class=\"circularG\">\n" +
    "            </div>\n" +
    "            <div id=\"circularG_2\" class=\"circularG\">\n" +
    "            </div>\n" +
    "            <div id=\"circularG_3\" class=\"circularG\">\n" +
    "            </div>\n" +
    "            <div id=\"circularG_4\" class=\"circularG\">\n" +
    "            </div>\n" +
    "            <div id=\"circularG_5\" class=\"circularG\">\n" +
    "            </div>\n" +
    "            <div id=\"circularG_6\" class=\"circularG\">\n" +
    "            </div>\n" +
    "            <div id=\"circularG_7\" class=\"circularG\">\n" +
    "            </div>\n" +
    "            <div id=\"circularG_8\" class=\"circularG\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div id=\"loading\">Loading ...</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("uibootstrap/uibootstrap.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uibootstrap/uibootstrap.tpl.html",
    "<h1>Bootstrap UI</h1>\n" +
    "\n" +
    "<div>\n" +
    "    <h4>Single toggle</h4>\n" +
    "    <pre>{{singleModel}}</pre>\n" +
    "    <button type=\"button\" class=\"btn btn-primary\" ng-model=\"singleModel\" btn-checkbox btn-checkbox-true=\"1\" btn-checkbox-false=\"0\">\n" +
    "        Single Toggle\n" +
    "    </button>\n" +
    "    <h4>Checkbox</h4>\n" +
    "    <pre>{{checkModel}}</pre>\n" +
    "    <div class=\"btn-group\">\n" +
    "        <label class=\"btn btn-primary\" ng-model=\"checkModel.left\" btn-checkbox>Left</label>\n" +
    "        <label class=\"btn btn-primary\" ng-model=\"checkModel.middle\" btn-checkbox>Middle</label>\n" +
    "        <label class=\"btn btn-primary\" ng-model=\"checkModel.right\" btn-checkbox>Right</label>\n" +
    "    </div>\n" +
    "    <h4>Radio &amp; Uncheckable Radio</h4>\n" +
    "    <pre>{{radioModel|| 'null'}}</pre>\n" +
    "    <div class=\"btn-group\">\n" +
    "        <label class=\"btn btn-primary\" ng-model=\"radioModel\" btn-radio=\"'Left'\">Left</label>\n" +
    "        <label class=\"btn btn-primary\" ng-model=\"radioModel\" btn-radio=\"'Middle'\">Middle</label>\n" +
    "        <label class=\"btn btn-primary\" ng-model=\"radioModel\" btn-radio=\"'Right'\">Right</label>\n" +
    "    </div>\n" +
    "    <div class=\"btn-group\">\n" +
    "        <label class=\"btn btn-success\" ng-model=\"radioModel\" btn-radio=\"'Left'\" uncheckable>Left</label>\n" +
    "        <label class=\"btn btn-success\" ng-model=\"radioModel\" btn-radio=\"'Middle'\" uncheckable>Middle</label>\n" +
    "        <label class=\"btn btn-success\" ng-model=\"radioModel\" btn-radio=\"'Right'\" uncheckable>Right</label>\n" +
    "    </div>\n" +
    "</div>\n" +
    "&nbsp;<p>\n" +
    "<div>\n" +
    "    <code>\n" +
    "        {{myjson|json}}\n" +
    "    </code>\n" +
    "</div>\n" +
    "&nbsp;<p>");
}]);
