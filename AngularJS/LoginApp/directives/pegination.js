/// <reference path="../view/templateURL.html" />
/// <reference path="templateURL.html" />

myapp.directive('simplePagination', function () {
    return {
       
        restrict: 'E', /* restrict this directive to elements */
        //  currentPage: 1,
        //pageLimit: 5,
        //total: 20,
      
        templateUrl: "/LoginApp/directives/templateURL.html",



        //scope: false,
        //controller: function($scope, $element, $attrs, $transclude, otherInjectables) { ... },
        //controllerAs: 'simplePaginationController',
        //bindToController: false,

    };

    //return directive;
});
