angular.module("app").config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "app/templates/home.html"
    })
    .when("/comingsoon",{
        templateUrl: "app/templates/comingsoon.html"
    })
    .when("/contact",{
        templateUrl: "app/templates/contact.html"
    })
    .when("/faq",{
        templateUrl: "app/templates/faq.html"
    })
    .when("/gallery",{
        templateUrl: "app/templates/gallery.html"
    })
    .when("/info",{
        templateUrl: "app/templates/info.html"
    })
    .when("/privacy",{
        templateUrl: "app/templates/privacy.html"
    })
    .otherwise({
        templateUrl: "app/templates/error.html"
    });
});