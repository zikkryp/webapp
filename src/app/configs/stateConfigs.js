angular.module("blogapp").config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/feed");

    $stateProvider
        .state("feed", {
            url: "/feed",
            templateUrl: "src/app/components/feed/feed.html",
            controller: "FeedController"
        })
        .state("about", {
            url: "/about",
            templateUrl: "src/app/components/about/about.html"
        });
}]);