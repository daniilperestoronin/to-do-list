(function () {
    angular.module('ToDoList', [])

        .controller('ToDoListCtrl', function ($scope) {

            $scope.tasksList = [
                {
                    id:1,
                    name: 'List 1',
                    active: true,
                    done: false,
                    progress: 0,
                    tasks: [
                        {
                            name: 'Lists 1 Example task 1',
                            done: false
                        },
                        {
                            name: 'Lists 1 Example task 2',
                            done: false
                        }
                    ]
                },
                {
                    id:2,
                    name: 'List 2',
                    active: false,
                    done: false,
                    progress: 0,
                    tasks: [
                        {
                            name: 'Lists 2 Example task 1',
                            done: false
                        },
                        {
                            name: 'Lists 2 Example task 2',
                            done: false
                        }
                    ]
                }
            ];

            $scope.activeTaskList;

            $scope.createdTask = {
                name: null
            };

            $scope.createdList = {
                name: null
            }

            $scope.newTask = function () {
                if ($scope.createdTask.name) {
                    $scope.activeTaskList.tasks.push({name: $scope.createdTask.name, done: false});
                    $scope.activeTaskList.progress = $scope.changeProgress($scope.activeTaskList.tasks);
                    $scope.createdTask.name = '';
                } else {
                    alert('Enter task name!');
                }
            };

            $scope.newList = function () {
                if ($scope.createdList.name) {
                    $scope.tasksList.push({name: $scope.createdList.name, progress: 0, done: false, tasks: []});
                    $scope.createdList.name = '';
                } else {
                    alert('Enter list name!');
                }
            };

            $scope.clearAllTasks = function () {
                $scope.activeTaskList.tasks = [];
                $scope.activeTaskList.progress = 0;
            };

            $scope.clearAllLists = function () {
                $scope.tasksList = [];
                $scope.activeTaskList = {};
            };

            $scope.deleteTask = function (task) {
                var index = $scope.activeTaskList.tasks.indexOf(task);
                $scope.activeTaskList.tasks.splice(index, 1);
                $scope.activeTaskList.progress = $scope.changeProgress($scope.activeTaskList.tasks);
            };

            $scope.changeActiveTaskList = function (list) {
                $scope.activeTaskList = list;
                $scope.activeTaskList.progress = $scope.changeProgress(list.tasks);
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
        });
})();