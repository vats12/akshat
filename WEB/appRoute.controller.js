var appModule = angular.module('appModule',['ngRoute']);

appModule.config(($routeProvider)=>{
    $routeProvider.when('/',{
        templateUrl : 'components/home/homeView.html',
        controller : 'homeController'
    })                                                                      
    .when('/about',{
        templateUrl : 'components/about/aboutView.html',
        controller : 'aboutController'
    })
    .when('/contact',{
        templateUrl : 'components/contact/contactView.html',
        controller : 'contactController'
    });
});

appModule.controller('routeController',($scope)=>{
    $scope.message = 'This is E-Commerce Appplication';
});

appModule.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

appModule.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});