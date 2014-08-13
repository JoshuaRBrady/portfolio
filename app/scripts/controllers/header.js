'use strict';

/**
 * @ngdoc function
 * @name <%= scriptAppName %>.controller:<%= classedName %>Ctrl
 * @description
 * # <%= classedName %>Ctrl
 * Controller of the <%= scriptAppName %>
 */

angular.module('portfolioApp')
    .controller('HeaderCtrl', function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });
