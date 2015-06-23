/**
 * Receives an express application instance and sets the routes on it
 * @param app
 */
var routes = function(app){

    app.get('/', function(req, res){
        res.render('index.html', {
            title: 'Hola :P'
        });
    });

    app.use(function(req, res, next){
        res.status(404).send('<h1>File not found</h1>');
    });

};

module.exports = routes;