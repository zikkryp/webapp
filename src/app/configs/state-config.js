angular.module("blogapp").config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/feed");

    $stateProvider
        .state("feed", {
            url: "/feed",
            templateUrl: "app/components/feed/feed.html",
            controller: "FeedController"
        })
        .state("about", {
            url: "/about",
            templateUrl: "app/components/about/about.html"
        });
}]);