angular.module('list.services', []);

.factory('Link', ($http) => {

  var getLinks = () => {
    return $http ({
      method: 'GET',
      url:'/api/fetch'
    }).then( resp => resp.data);
  };

  return {
    getLinks: getLinks
  } 
});