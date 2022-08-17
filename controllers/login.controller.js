const { response, request } = require('express');
const users = require('../assets/data/users');
const token = process.env.TOKEN;

const login = (req, res = response) => {
    const { userName, password } = req.body;
    const userFound = users.find(found => found.userName === userName);
    if (userFound?.pass === password) {
        console.log('Login successful');
        delete userFound.password;
        res.json({
            userInfo: userFound, 
            token,
            msg:'Login successful'
        })
    } else {
        res.status(401);
        console.error('Login fail');
        res.json({
            userInfo: {},
            msg:'Incorrect user or password'
        });
    }
}

module.exports = login;