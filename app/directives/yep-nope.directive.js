let YepNopeDirective = () => {
  return {
    restrict: 'E',
    link: (scope, element, attrs) => {
      scope.$watch(attrs.check, (val) => {
        var words = val ? 'Yep' : 'Nope';
        element.text(words);
      });
    }
  };
};

module.exports = YepNopeDirective;