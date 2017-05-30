(function () {
    'use strict';

    angular.module('Calendar')
        .controller('CalendarController', ['$scope', 'CalendarService',
            function ($scope, CalendarService) {

                $scope.uiConfig = {
                    calendar: {
                        height: 800,
                        header: {
                            left: 'prev,next today',
                            center: 'title',
                            right: 'listDay,listWeek,month, week, day'
                        },

                        // customize the button names,
                        // otherwise they'd all just say "list"
                        views: {
                            listDay: {buttonText: 'list day'},
                            listWeek: {buttonText: 'list week'}
                        },
                        defaultView: 'listWeek',
                        defaultDate: new Date(),
                        navLinks: true, // can click day/week names to navigate views
                        editable: true,
                        eventLimit: true, // allow "more" link when too many events
                    }
                };

                $scope.eventSources = CalendarService.getAllEvents()
            }]);
})();
