var appModules = angular.module('appModule',['ngRoute']);

appModules.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl : 'app/components/home/homeView.html',
        controller : 'homeController'
    })                                                                      
    .when('/about',{
        templateUrl : 'app/components/about/aboutView.html',
        controller : 'aboutController'
    })
    .when('/contact',{
        templateUrl : 'app/components/contact/contactView.html',
        controller : 'contactController'
    });
});

appModules.controller('routeController',function($scope){
    $scope.message = 'This is E-Commerce Appplication';
});

appModules.controller('homeController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});


appModules.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

appModules.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});