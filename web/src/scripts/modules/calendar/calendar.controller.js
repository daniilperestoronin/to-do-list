(function () {
    'use strict';

    angular.module('Calendar')
        .controller('CalendarController',
            function ($scope) {
                /* config object */
                $scope.uiConfig = {
                    calendar: {
                        height: 450,
                        editable: true,
                        header: {
                            left: 'title',
                            center: '',
                            right: 'today prev,next'
                        },
                        defaultDate: new Date()
                    }
                };
            });
})();
