app.controller(
    'editorialController',
    [
        '$scope',
        function ($scope) {
            $scope.editoriales = [{
                id: '1',
                nombre: 'editorial 1'
            },
            {
                id: '2',
                nombre: 'editorial 2'
            },
            {
                id: '3',
                nombre: 'editorial 3'
            }];
            $scope.editorialActual = {
                id: '123',
                nombre:'editorial 123'
            };
        }
    ]
    );