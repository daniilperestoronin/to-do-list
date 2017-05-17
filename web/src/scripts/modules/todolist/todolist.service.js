(function () {
    'use strict';

    angular.module('ToDoList')

        .factory('ToDoListService', function () {

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
                            name: 'Lists 1 Example task 1',
                            done: false,
                            startDate: new Date(),
                            endDate: new Date()
                        },
                        {
                            name: 'Lists 1 Example task 2',
                            done: false,
                            startDate: new Date(),
                            endDate: new Date()
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
                            name: 'Lists 2 Example task 1',
                            done: false,
                            startDate: new Date(),
                            endDate: new Date()
                        },
                        {
                            name: 'Lists 2 Example task 2',
                            done: false,
                            startDate: new Date(),
                            endDate: new Date()
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

            service.createTask = createTask;
            service.getTask = getTask;
            service.updateTask = updateTask;
            service.deleteTask = deleteTask;
            service.getAllTask = getAllTask;

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
                    if (tasksList[i].id == listId) delete tasksList[i];
                }
            };

            function getAllTaskLists() {
                return tasksList;
            };


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
                for (var i = 0; i < getTaskList(listId).tasks.length; i++) {
                    if (getTaskList(listId).tasks[i].id == taskId)
                        delete getTaskList(listId).tasks[i];
                }
            };

            function getAllTask(listId) {
                return getTaskList(listId).tasks;
            };
        });
})();