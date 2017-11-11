/**
 * Created by juan on 26/10/17.
 */
app.controller('TransaccionInsertController',

    ['$scope', 'TransaccionInsertResource',

        function ($scope, TransaccionInsertResource) {
            $scope.transaccion = {
                _id: null,
                id: null,
                fecha: null,
                cantidad1: null,
                cantidad2: null
            };

            $scope.procesar = function () {
                console.log("Transaccion:"+JSON.stringify($scope.transaccion));

                var successCallback = function (response) {
                    /*                  console.log("result persona insert:" + JSON.stringify(response));
                    alert("Registro Insertado");*/




                };
                var errorCallback = function (response) {
                    console.log("error transaction insert:" + JSON.stringify(response));
                };

                TransaccionInsertResource.save($scope.transaccion, successCallback, errorCallback);



            };

        }]);