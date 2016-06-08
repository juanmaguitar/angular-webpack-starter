webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('dashboard', []);

	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(7);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(2);

	angular.module('dashboard').directive('yepNope', __webpack_require__(4));

/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	'use strict';

	var YepNopeDirective = function YepNopeDirective() {
	  return {
	    restrict: 'E',
	    link: function link(scope, element, attrs) {
	      scope.$watch(attrs.check, function (val) {
	        var words = val ? 'Yep' : 'Nope';
	        element.text(words);
	      });
	    }
	  };
	};

	module.exports = YepNopeDirective;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(2);

	angular.module('dashboard').service('GithubStatusService', __webpack_require__(6));

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	/* @ngInject */

	_classCallCheck.$inject = ["instance", "Constructor"];
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GithubStatusService = function GithubStatusService($http) {
	  _classCallCheck(this, GithubStatusService);

	  this.getStatus = function () {
	    return $http({
	      method: 'jsonp',
	      url: 'https://status.github.com/api/status.json?callback=JSON_CALLBACK',
	      transformResponse: appendTransform($http.defaults.transformResponse, function (value) {
	        return value.status === 'good';
	      })
	    });
	  };
	};

	function appendTransform(defaults, transform) {
	  defaults = angular.isArray(defaults) ? defaults : [defaults];
	  return defaults.concat(transform);
	}

	module.exports = GithubStatusService;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(2);

	angular.module('dashboard').controller('dashboardController', __webpack_require__(8));

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DashboardController = function DashboardController(gh) {
	  var _this = this;

	  _classCallCheck(this, DashboardController);

	  this.github = '';
	  gh.getStatus().success(function (status) {
	    return _this.github = status;
	  });
	};

	DashboardController.$inject = ['GithubStatusService'];
	module.exports = DashboardController;

/***/ }
]);