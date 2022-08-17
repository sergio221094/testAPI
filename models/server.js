const express = require('express')
const cors = require('cors')
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.productPath = '/api/products'
        this.loginPath = '/api/login'
        
        //Midlewares
        this.middlewares();
        //Routes
        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use(cors());
        this.app.use( express.json());

        //public directorty
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.productPath, require('../routes/product'));
        this.app.use(this.loginPath, require('../routes/login'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Server runningn on PORT:', this.port);
        });
    }
}

module.exports = Server;