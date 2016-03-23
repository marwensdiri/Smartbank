'use strict';

angular.module('smartbankApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


