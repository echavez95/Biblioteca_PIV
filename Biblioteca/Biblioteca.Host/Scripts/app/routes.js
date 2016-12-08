app.config(['$routeProvider',
function ($routerProvider) {
    $routerProvider
        .when('/', {
            templateUrl: "/Scripts/app/home/home.template.html",
            controller: "homeController"
        })
        .otherwise({
            redirectTo:'/'
        })
        .when('/editoriales', {
            templateUrl: "/Scripts/app/editorial/editorial.template.html",
            controller: "editorialController"
        })
        .otherwise({
            redirectTo: '/'
        })
        .when('/libros', {
            templateUrl: "/Scripts/app/libro/libro.template.html",
            controller: "libroController"
        })
        .otherwise({
            redirectTo: '/'
        })
}
]);
