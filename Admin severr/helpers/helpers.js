const bcrypt=require('bcrypt')
const Users=require('../schema/users')

async function getUserByEmail(email){
     return await Users.findOne({email:email});
}

async function hashPassword(password){
    return await bcrypt.hash(password,10);
}

async function deleteUserByEmail(email){
    return await Users.findOneAndDelete({email:email});
}

async function getUserById(id){
    return await Users.findById(id);
}

module.exports={
    getUserByEmail,
    hashPassword,
    deleteUserByEmail,
    getUserById
}