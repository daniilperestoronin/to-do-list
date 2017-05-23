(function () {
    'use strict';

    angular.module('Calendar')

        .factory('CalendarService', ['ToDoListService', function (ToDoListService) {

            var tasksList = ToDoListService.getAllTaskLists();

            var service = {};

            service.getAllEvents = getAllEvents;

            return service;

            function getAllEvents() {
                var tasksEvents = [];
                for (var i = 0; i < tasksList.length; i++) {
                    for (var j = 0; j < tasksList[i].tasks.length; j++) {
                        if (!tasksList[i].tasks[j].done) {
                            tasksEvents.push({
                                title: tasksList[i].tasks[j].name,
                                start: tasksList[i].tasks[j].startDate,
                                end: tasksList[i].tasks[j].endDate
                            })
                        }
                    }
                }
                return tasksEvents;
            };
        }]);
})();