


myapp.directive('myDirective', function () {
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */
    directive.template = "<textarea /> ";

    return directive;
});