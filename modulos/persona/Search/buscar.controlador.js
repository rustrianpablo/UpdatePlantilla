/**
 * Created by juan on 5/10/17.
 */
app.controller('ModuloController',

    ['$scope', 'InsertResource','UpdateResource','DeleteResource',

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

        },

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

        },
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



