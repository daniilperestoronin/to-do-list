(function () {
    angular.module('ToDoList', [])

        .controller('ToDoListCtrl', function ($scope) {

            $scope.tasksList = [
                {
                    name: 'Lists 1',
                    active: true,
                    done: false,
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
                    name: 'Lists 2',
                    active: false,
                    done: false,
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

            $scope.tasks = [];

            $scope.createdTask = {
                name: null
            };

            $scope.progress = 0;

            $scope.newTask = function () {
                if ($scope.createdTask.name) {
                    $scope.tasks.push({name: $scope.createdTask.name, done: false});
                    $scope.changeProgress()
                    console.log('added new task');
                } else {
                    alert('Enter file name!');
                }
            };

            $scope.checkProgress = function () {
                var all = $scope.tasks.length;
                console.log(all);
                var done = $scope.tasks.filter(function (element) {
                    return element.done == true;
                }).length
                console.log(done);
                $scope.progress = done / all * 100;
            };

            $scope.changeProgress = function () {
                if ($scope.progress != 0) {
                    $scope.checkProgress();
                }
            };

            $scope.clearAllTasks = function () {
                $scope.tasks = [];
                $scope.progress = 0;
            };

            $scope.deleteTask = function (task) {
                var index = $scope.tasks.indexOf(task);
                $scope.tasks.splice(index, 1);
                $scope.changeProgress();
            };

            $scope.changeActiveTaskList = function (list) {
                list.active = true;
                $scope.tasks = list.tasks;
            };
        });
})();