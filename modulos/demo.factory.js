app.factory('EstudianteResource', function ($resource) {
    var baseURL = "http://localhost:8765/prueba/";
    var resource = $resource(baseURL,
        {},
        {
            findAll:{
                url: baseURL + 'estudiantes/all',
                method: 'GET',
                isArray: false,
                transformResponse: function (data) {

                    var itemsConverted= null;
                    var redirect = false;

                    try {
                            itemsConverted = angular.fromJson(data)
                    }catch (e){
                        if (typeof data === 'string'){
                            if (data.indexOf instanceof Function){
                                if (data.indexOf('<div class="login-form">') !== -1) {
                                    redirect =true;
                                }
                            }
                        }else {
                            itemsConverted = null;
                        }
                    }

                    var result = {
                        items: itemsConverted,
                        redirectToLogin: redirect
                    };

                    //console.log("parse:" + JSON.stringify(result));
                    return result;

                }
            }
        });
    return resource;

});