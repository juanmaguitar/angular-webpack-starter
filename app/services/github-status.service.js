'use strict';

/* @ngInject */
class GithubStatusService {
  constructor($http) {
    this.getStatus = () => {
        return $http({
            method: 'jsonp',
            url: 'https://status.github.com/api/status.json?callback=JSON_CALLBACK',
            transformResponse: appendTransform($http.defaults.transformResponse, (value) => (value.status === 'good') )
        });
    };
  }
}

function appendTransform(defaults, transform) {
  defaults = angular.isArray(defaults) ? defaults : [defaults];
  return defaults.concat(transform);
}

module.exports = GithubStatusService;