/**
 * Created by juan on 26/10/17.
 */
app.controller('TransaccionController',

    ['$scope', '$q','TransaccionResource', 'NgTableParams',

        function ($scope, $q,TransaccionResource, NgTableParams) {



            $scope.getTransaccionData = function (params) {
                var deferred = $q.defer(params);
                TransaccionResource.mostrar(params, function (response) {
                    deferred.resolve(response);
                });
                return deferred.promise;
            };


            $scope.tableParams = new NgTableParams({
                page: 1,
                count: 7,
                sorting: {}
            }, {
                getData: function (params) {
                    var queryParams = {
                        count: params.count(),
                        page: params.page()
                    };

                    return $scope.getTransaccionData(queryParams).then(function (response) {
                        console.log("JSON Response:" + JSON.stringify(response));
                        params.total(response.items.total);
                        return response.items.results;
                    });
                }
            });


        }]);
