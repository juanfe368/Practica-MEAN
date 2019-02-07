var app = angular.module('practicamean', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            /*.when('/', {
                templateUrl: 'index.html',
                controller: 'controllerPraticaMean'
            })*/
            .when('/', {
                templateUrl: 'pages/prueba.html',
                controller: 'controllerLogin'
            })
    }])

app.controller('controllerPraticaMean', function ($scope, $http, $window) {
    $scope.submit = function () {
        var data = $.param({
            book: JSON.stringify({
                author: $scope.author,
                title: $scope.title,
                body: $scope.body
            })
        })

        $http({
            method: 'POST',
            url: '/api/book'
        })
            .then(function successCallback(response) {
                console.log('Respuest:', response);
                $window.location.href = '/user/login.html'
            },
                function errorCallBack(response) {
                    console.log('Error:', response);
                })

        /*$http.post('/api/book/', data).success(function (data, status) {
            console.log('Post successfull');
        })*/
    }

});

app.controller('controllerLogin', function ($scope) {
    console.log('Entro al login');
})