/**
 * Created by juan on 26/10/17.
 */
app.factory('TransaccionInsertResource',

    function ($resource) {

        var baseURL = "http://localhost:8765/nodejs/";


        var resource = $resource(baseURL,
            {},
            {
                save: {
                    url: baseURL + 'transaction',
                    method: 'POST',
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
