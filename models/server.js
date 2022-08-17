const express = require('express')
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Midlewares
        this.middlewares();
        //Routes
        this.routes();
    }

    middlewares() {
        //public directorty
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.get('/', (req, res) => {
            res.send('Hello World')
        })
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Server runningn on PORT:', this.port);
        });
    }
}

module.exports = Server;