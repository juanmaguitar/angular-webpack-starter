'use strict';

class DashboardController {
  constructor(gh) {
  	this.github = '';
  	gh.getStatus().success( (status) => this.github = status );
  }
}
DashboardController.$inject = ['GithubStatusService'];
module.exports = DashboardController;