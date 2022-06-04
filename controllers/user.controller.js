const User = require('../schemas/user.schema');

function getUsers(req, res){
    User.find({}, (error, users) => {
        console.log(users);
        return res.status(200).send({
            message: `Usuarios obtenidos correctamente`,
            users
        })
    })
}

function getUser(req, res){
    return res.send({user: {
        name: "Jose",
        lastname: "Perez",
        age: 40,
        active: true
    }
    });
}

function createUser(req, res){
    return res.status(200).send({
        message: 'Se creara NUEVO USUARIO'
    });
}

function deleteUser(req, res){
    return res.status(200).send({
        message: 'El usuario sera BORRADO'
    });
}

function updateUser(req, res){
    return res.status(200).send({
        message: 'El ususario sera ACTUALIZADO'
    })
}

function login(req, res){
    return res.send({ message: 'Login de Usuario' });
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    login
}