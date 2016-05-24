angular.module('lists', [
  'list.services',
  'list.links',
  'ngRoute'
  ]);

.config(($routeProvider, $httpProivder) => {
  $routeProvider
  .when('/', {
    templateUrl:'app/templates/links.html',
    controller:'linkCtrl'
  });
});
