/**
 * Created by juan on 26/10/17.
 */
app.factory('TransaccionDeleteResource',

    function ($resource) {

        var baseURL = "http://localhost:8765/nodejs/";

        var resource = $resource(baseURL,
            {},
            {
                delete: {
                    url: baseURL + 'transaction/:_id',
                    method: 'DELETE',
                    isArray: false,
                    transformResponse: function (data) {

                        var itemsConverted = null;
                        var redirect = false;

                        try {
                            itemsConverted = angular.fromJson(data)
                        } catch (e) {
                            if (typeof data === 'string') {
                                if (data.indexOf instanceof Function) {
                                    if (data.indexOf('<div class="login-form">') !== -1) {
                                        redirect = true;
                                    }
                                }
                            } else {
                                itemsCoverted = null;
                            }
                        }

                        var result = {
                            items: itemsConverted,
                            redirectToLogin: redirect
                        };

                        console.log("parse:" + JSON.stringify(result));
                        return result;
                    }
                }
            });

        return resource;
    });