(function () {
    'use strict';

    angular.module('ToDoList')

        .controller('ToDoListController', ['$scope', 'ToDoListService', function ($scope, ToDoListService) {

            $scope.tasksList = ToDoListService.getAllTaskLists();

            $scope.activeTaskList;

            $scope.createdTask = {
                name: null,
                startDate: new Date(),
                endDate: new Date()
            };

            $scope.createdList = {
                name: null,
                startDate: new Date(),
                endDate: new Date(),
            }

            $scope.newTask = function () {
                if ($scope.createdTask.name) {
                    ToDoListService.createTask($scope.activeTaskList.id,
                        {
                            name: $scope.createdTask.name, done: false,
                            startDate: $scope.createdList.startDate, endDate: $scope.createdList.endDate
                        }
                    )
                    $scope.activeTaskList.progress = $scope.changeProgress($scope.activeTaskList.tasks);
                    $scope.createdTask.name = '';
                } else {
                    alert('Enter task name!');
                }
            };

            $scope.newList = function () {
                if ($scope.createdList.name) {
                    ToDoListService.createTaskList({
                        name: $scope.createdList.name, startDate: $scope.createdList.startDate,
                        endDate: $scope.createdList.endDate, progress: 0, done: false, tasks: []
                    })
                    $scope.createdList.name = '';
                } else {
                    alert('Enter list name!');
                }
            };

            $scope.clearAllTasks = function () {
                ToDoListService.deleteAllTasks($scope.activeTaskList.id);
                $scope.activeTaskList.tasks = [];
            };

            $scope.clearAllLists = function () {
                ToDoListService.deleteAllTaskLists();
                $scope.tasksList = [];
            };

            $scope.deleteList = function (list) {
                ToDoListService.deleteTaskList(list.id);
            }

            $scope.deleteTask = function (task) {
                ToDoListService.deleteTask($scope.activeTaskList.id, task.id);
                $scope.activeTaskList.progress = $scope.changeProgress($scope.activeTaskList.tasks);
            };

            $scope.changeActiveTaskList = function (list) {
                $scope.activeTaskList = ToDoListService.getTaskList(list.id);
            };

            $scope.checkProgress = function () {
                $scope.activeTaskList.progress = $scope.changeProgress($scope.activeTaskList.tasks);
            }

            $scope.changeProgress = function (tasks) {
                if (!tasks.length)
                    return 0;
                var all = tasks.length;
                var done = tasks.filter(function (element) {
                    return element.done == true;
                }).length
                return done / all * 100;
            };
        }]);
})();