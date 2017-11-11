/**
 * Created by juan on 5/10/17.
 */
app.controller('personaController',

    ['$scope', 'InsertResource',

        function ($scope, InsertResource) {
            $scope.persona = {
                id: null,
                name: null,
                email: null
            };

            $scope.procesar = function () {
                console.log("Persona:"+JSON.stringify($scope.persona));

                var successCallback = function (response) {
  /*                  console.log("result persona insert:" + JSON.stringify(response));*/
                    alert("Registro Insertado");

                };
                var errorCallback = function (response) {
                    console.log("error persona insert:" + JSON.stringify(response));
                };

                InsertResource.save($scope.persona, successCallback, errorCallback);



            };

        }]);

