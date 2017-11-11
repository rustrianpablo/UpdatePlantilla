/**
 * Created by juan on 29/09/17.
 */
app.controller('NodeController',

    ['$scope', '$q','PersonaResource', 'NgTableParams',

        function ($scope, $q,PersonaResource, NgTableParams) {



            $scope.getPersonaData = function (params) {
                var deferred = $q.defer(params);
                PersonaResource.mostrar(params, function (response) {
                    deferred.resolve(response);
                });
                return deferred.promise;
            };


            $scope.tableParams = new NgTableParams({
                page: 1,
                count: 6,
                sorting: {}
            }, {
                getData: function (params) {
                    var queryParams = {
                        count: params.count(),
                        page: params.page()
                    };

                    return $scope.getPersonaData(queryParams).then(function (response) {
                        console.log("JSON Response:" + JSON.stringify(response));
                        params.total(response.items.total);
                        return response.items.results;
                    });
                }
            });


        }]);


