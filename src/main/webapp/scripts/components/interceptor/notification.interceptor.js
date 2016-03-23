 'use strict';

angular.module('smartbankApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-smartbankApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-smartbankApp-params')});
                }
                return response;
            }
        };
    });
