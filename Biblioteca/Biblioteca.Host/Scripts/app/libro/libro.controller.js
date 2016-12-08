app.controller(
    'libroController',
    [
        '$scope',
        'libroService',
        function ($scope,libroService) {
            $scope.libros=[];

            $scope.libroActual = {
                Id: '0',
                Nombre:'',
                Anio: 0
            };

            $scope.accionActual = 'Agregar'

            $scope.obtenerLibros = function () {
                libroService.obtenerLibros()
                    .then(function (response) {
                        $scope.libros = response.data;
                    })
            }

            $scope.salvarLibro = function () {
                if($scope.accionActual==='Agregar'){
                    libroService.agregarLibro($scope.libroActual)
                    .then(function(response){
                        $scope.obtenerLibros();
                        $scope.limpiar();
                        alert('Editorial Agregada!');
                    })
                } else if ($scope.accionActual === 'Editar') {
                    libroService.editarLibro($scope.libroActual)
                    .then(function (response) {
                        $scope.obtenerLibros();
                        $scope.limpiar();
                        alert('Editorial Editada!');
                    })
                }
            }

            $scope.eliminar = function (libro) {
                libroService.eliminarLibro(libro)
                    .then(function (response) {
                        $scope.obtenerLibros();
                        $scope.limpiar();
                        alert('Editorial Eliminada!');
                    })
            }

            $scope.limpiar = function () {
                $scope.accionActual = 'Agregar';
                $scope.libroActual = {
                    Id: '0',
                    Nombre: '',
                    Anio: 0
                }
            }

            $scope.editar = function (libro) {
                $scope.accionActual = 'Editar';
                $scope.libroActual = JSON.parse(JSON.stringify(libro)); //clonar objetos
            }

            $scope.obtenerLibros();

        }
    ]
);