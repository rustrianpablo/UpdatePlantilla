/**
 * Created by juan on 5/10/17.
 */
app.controller('personaDController',

    ['$scope', 'DeleteResource',

        function ($scope, DeleteResource) {


            $scope.borrar = function () {
                console.log("Persona:"+JSON.stringify($scope.persona));

                var successCallback = function (response) {
                    /*                  console.log("result persona insert:" + JSON.stringify(response));*/
                    alert("Registro Eliminado");


                };
                var errorCallback = function (response) {
                    console.log("error persona Delete:" + JSON.stringify(response));
                };

                DeleteResource.delete($scope.persona, successCallback, errorCallback);



            };

        }]);
