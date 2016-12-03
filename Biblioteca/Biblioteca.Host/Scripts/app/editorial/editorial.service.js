app.service('editorialService',
    [
        '$http',
        'miConfiguracion',
        function ($http, miConfiguracion) {
            function obtenerEditoriales() {
                return $http.get(miConfiguracion.urlBackend+'/api/Editorial');
            }

            function agregarEditorial(nuevaEditorial) {
                return $http.post(miConfiguracion.urlBackend+'/api/Editorial', nuevaEditorial);
            }

            function editarEditorial(editorial) {
                return $http.put(miConfiguracion.urlBackend + '/api/Editorial/' + editorial.Id, editorial);
            }

            function eliminarEditorial(editorial) {
                return $http.delete(miConfiguracion.urlBackend + '/api/Editorial/' + editorial.Id)
            }

            return {
                obtenerEditoriales: obtenerEditoriales,
                agregarEditorial: agregarEditorial,
                editarEditorial: editarEditorial,
                eliminarEditorial:eliminarEditorial
            }
        }
    ]
);