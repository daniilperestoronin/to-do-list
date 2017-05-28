(function () {
    'use strict';

    angular.module('ToDoList')

        .factory('ToDoListService', function () {
            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();

            var tasksList = [
                {
                    id: 1,
                    name: 'List 1',
                    active: true,
                    done: false,
                    progress: 0,
                    startDate: new Date(),
                    endDate: new Date(),
                    tasks: [
                        {
                            id: 1,
                            name: 'Lists 1 Example task 1',
                            done: false,
                            startDate: new Date(y, m, d - 5),
                            endDate: new Date(y, m, d + 3)
                        },
                        {
                            id: 2,
                            name: 'Lists 1 Example task 2',
                            done: false,
                            startDate: new Date(y, m, d - 1),
                            endDate: new Date(y, m, d + 2)
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'List 2',
                    active: false,
                    done: false,
                    progress: 0,
                    startDate: new Date(),
                    endDate: new Date(),
                    tasks: [
                        {
                            id: 1,
                            name: 'Lists 2 Example task 1',
                            done: false,
                            startDate: new Date(y, m, d),
                            endDate: new Date(y, m, d + 5)
                        },
                        {
                            id: 2,
                            name: 'Lists 2 Example task 2',
                            done: false,
                            startDate: new Date(y, m, d - 2),
                            endDate: new Date(y, m, d - 1)
                        }
                    ]
                }
            ];

            var service = {};

            service.createTaskList = createTaskList;
            service.getTaskList = getTaskList;
            service.updateTaskList = updateTaskList;
            service.deleteTaskList = deleteTaskList;
            service.getAllTaskLists = getAllTaskLists;
            service.deleteAllTaskLists = deleteAllTaskLists;

            service.createTask = createTask;
            service.getTask = getTask;
            service.updateTask = updateTask;
            service.deleteTask = deleteTask;
            service.getAllTask = getAllTask;
            service.deleteAllTasks = deleteAllTasks;

            return service;

            function createTaskList(taskList) {
                tasksList.push(taskList)
            };

            function getTaskList(listId) {
                for (var i = 0; i < tasksList.length; i++) {
                    if (tasksList[i].id == listId) return tasksList[i];
                }
            };

            function updateTaskList(taskList) {
                for (var i = 0; i < tasksList.length; i++) {
                    if (tasksList[i].id == taskList.id) tasksList[i] = taskList;
                }
            };

            function deleteTaskList(listId) {
                for (var i = 0; i < tasksList.length; i++) {
                    if (tasksList[i].id == listId) tasksList.splice(i, 1);
                    ;
                }
            };

            function getAllTaskLists() {
                return tasksList;
            };

            function deleteAllTaskLists() {
                tasksList = [];
            }

            function createTask(listId, task) {
                getTaskList(listId).tasks.push(task);
            };

            function getTask(listId, taskId) {
                for (var i = 0; i < getTaskList(listId).tasks.length; i++) {
                    if (getTaskList(listId).tasks[i].id == taskId)
                        return getTaskList(listId).tasks[i];
                }
            };

            function updateTask(listId, task) {
                for (var i = 0; i < getTaskList(listId).tasks.length; i++) {
                    if (getTaskList(listId).tasks[i].id == task.id)
                        getTaskList(listId).tasks[i] = task;
                }
            };

            function deleteTask(listId, taskId) {
                var tasksList = getTaskList(listId).tasks;
                for (var i = 0; i < tasksList.length; i++) {
                    if (tasksList[i].id == taskId)
                        tasksList.splice(i, 1);
                }
            };

            function deleteAllTasks(listId) {
                getTaskList(listId).tasks = [];
            };

            function getAllTask(listId) {
                return getTaskList(listId).tasks;
            };
        });
})();