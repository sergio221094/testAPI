const { response, request } = require('express');
const products = require('../assets/data/products');
const usrToken = process.env.TOKEN;

const getProducts = (req = request, res = response) => {
    const { token } = req.headers;
    if(usrToken === token){
        res.json({
            products, 
            msg:'The request was completed successfully'
        });
    }else{
        res.statusCode = 401;
        res.json({
            products: [], 
            msg:'Invalid access token'
        });
    }
    console.log(token);
}

module.exports = getProducts;