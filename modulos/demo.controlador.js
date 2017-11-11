app.controller('DemoController',

    ['$scope', '$q', 'EstudianteResource',
        'AsignacionesResource','PersonaResource', 'NgTableParams',

        function ($scope, $q, EstudianteResource,
                  AsignacionesResource, PersonaResource, NgTableParams) {

            $scope.persona = {
                id: 1,
                nombre: "pablo",
                edad: 31
            };


            $scope.getEstudiantesData = function () {
                var deferred = $q.defer();
                EstudianteResource.findAll(null, function (response) {
                    deferred.resolve(response);
                });
                return deferred.promise;
            };

            $scope.getEstudiantesData().then(function (response) {
                console.log("JSON Response:" + JSON.stringify(response));
                //params.total(response.items.totalElements);
                return response.items;
            });

            $scope.getAsignacionesData = function (params) {
                var deferred = $q.defer(params);
                AsignacionesResource.find(params, function (response) {
                    deferred.resolve(response);
                });
                return deferred.promise;
            };


            $scope.tableParams = new NgTableParams({
                page: 1,
                count: 4,
                sorting: {}
            }, {
                getData: function (params) {
                    var queryParams = {
                        length: params.count(),
                        start: params.page() - 1
                    };

                    return $scope.getAsignacionesData(queryParams).then(function (response) {
                        //console.log("JSON Response:" + JSON.stringify(response));
                        params.total(response.items.totalElements);
                        return response.items.content;
                    });
                }
            });






        }]);


