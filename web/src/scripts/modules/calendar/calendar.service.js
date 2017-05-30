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
                    var tasksListEvent = {
                        color: getRandomColor(),
                        events: []
                    }
                    for (var j = 0; j < tasksList[i].tasks.length; j++) {
                        if (!tasksList[i].tasks[j].done) {
                            tasksListEvent.events.push({
                                title: tasksList[i].tasks[j].name,
                                start: tasksList[i].tasks[j].startDate,
                                end: tasksList[i].tasks[j].endDate
                            })
                        }
                    }
                    tasksEvents.push(tasksListEvent);
                }
                return tasksEvents;
            };

            function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }

        }]);
})();