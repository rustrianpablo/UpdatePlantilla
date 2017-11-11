/**
 * Created by juan on 26/10/17.
 */
app.controller('TransaccionDeleteController',

    ['$scope', 'TransaccionDeleteResource',

        function ($scope, TransaccionDeleteResource) {


            $scope.borrar = function () {
                console.log("Transaccion:"+JSON.stringify($scope.transaccion));
                console.log("_id:" +$scope.transaccion._id);

                var successCallback = function (response) {
                             console.log("result persona Delete:" + JSON.stringify(response));
                    /*alert("Registro Eliminado");*/


                };
                var errorCallback = function (response) {
                    console.log("error transaction Delete:" + JSON.stringify(response));

                };

                TransaccionDeleteResource.delete($scope.transaccion, successCallback, errorCallback);



            };

        }]);