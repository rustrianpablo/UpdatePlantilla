/**
 * Created by juan on 26/10/17.
 */
app.controller('TransaccionUpdateController',

    ['$scope', 'TransaccionUpdateResource',

        function ($scope, TransaccionUpdateResource) {


            $scope.actu = function () {
                console.log("Transaccion:"+JSON.stringify($scope.transaccion));
                console.log("_id:" +$scope.transaccion._id);

                var successCallback = function (response) {
                    console.log("result persona update:" + JSON.stringify(response));

                };
                var errorCallback = function (response) {
                    console.log("error transaction update:" + JSON.stringify(response));
                };

                TransaccionUpdateResource.update($scope.transaccion, successCallback, errorCallback);
            };

        }]);


