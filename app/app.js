    (function() {
    
    var app = angular.module('jobsApp', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'NewsController',
                templateUrl: 'app/views/newsView.html'
            })
            .when('/snz', {
                controller: 'SNZController',
                templateUrl: 'app/views/snz.html'
            })
            .when('/profile/:userId', {
                controller: 'ProfilController',
                templateUrl: 'app/views/profil.html'
            })
            .when('/login', {
                controller: 'js/login.js',
                templateUrl: 'app/views/login.html'
        })
        .when('/register', {
            controller: 'js/register.js',
            templateUrl: 'register.html'
        })
            .when('/register', {
                controller: 'js/register.js',
                templateUrl: 'register.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());