(function () {
    'use strict';

    angular.module('Calendar')
        .controller('CalendarController', ['$scope', 'CalendarService',
            function ($scope, CalendarService) {

                $scope.events = CalendarService.getAllEvents();

                $scope.uiConfig = {
                    calendar: {
                        height: 800,
                        editable: true,
                        header: {
                            left: 'title',
                            center: '',
                            right: 'today prev,next'
                        }
                    }
                };

                $scope.eventSources = [$scope.events]
            }]);
})();
