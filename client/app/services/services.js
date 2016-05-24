angular.module('list.services', [])

.factory('Link', ($http) => {

  var getLinks = () => {
    return $http ({
      method: 'GET',
      url:'/api/links'
    }).then( resp => resp.data);
  };

  return {
    getLinks: getLinks
  } 
});