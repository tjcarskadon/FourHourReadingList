angular.module('list.links', []);

.controller('linkCtrl', ($scope, Link,) => {

  $scope.info = {};

  Link.getLinks().then( info => {
    console.lo('info from get', info);
    $scope.info.links = info;
  });

});