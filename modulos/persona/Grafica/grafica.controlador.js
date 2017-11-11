/**
 * Created by juan on 24/10/17.
 */
app.controller('graficoController',

    ['$scope', function ($scope) {

            $scope.labels = ["1/10/17","02/10/17", "03/10/17", "04/10/17", "05/10/17", "06/10/17", "07/10/17"];
            $scope.series = ['Producto A', 'Producto B'];
            $scope.data = [
                [50, 20, 230, 81, 56, 55, 40],
                [50, 20, 500, 19, 86, 27, 90]
            ];
            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };

        }]);