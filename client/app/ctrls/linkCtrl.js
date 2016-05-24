angular.module('list.links', []);

.controller('linkCtrl', ($scope, Link,) => {

  $scope.info = {};

  Link.getLinks().then( info => {
    $scope.info.links = info;
  });

});