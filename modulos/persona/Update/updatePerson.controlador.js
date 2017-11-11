/**
 * Created by juan on 5/10/17.
 */
app.controller('UpdateController',

    ['$scope', 'UpdateResource',

        function ($scope, UpdateResource) {
            $scope.personaupdate = {
                id: null,
                name: null,
                email: null
            };


            $scope.actualizar = function () {
                console.log("Persona:"+JSON.stringify($scope.personaupdate));

                var successCallback = function (response) {
                    /*                  console.log("result persona insert:" + JSON.stringify(response));*/
                alert("Registro Actualizado");

                };
                var errorCallback = function (response) {
                    console.log("error persona update:" + JSON.stringify(response));
                };

                UpdateResource.update($scope.personaupdate, successCallback, errorCallback);



            };



        }]);
