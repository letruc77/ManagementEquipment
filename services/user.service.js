const User = require('../models/model_user');
const Equipment = require('../models/model_equipment');
const connection = require('../database/connection');
const bcrypt = require('bcrypt');

// const login = async (body) => {
//     try {
//         connection.connection();
//         const user = await findOneUser(body.email);
//         if (!user) { return new Error('User not found!'); }
//         await bcrypt.compare(body.password, user.password).then(
//           (valid) => {
//             if (!valid) {
//               return new Error('Incorrect password!');
//             }
//             const token = jwt.sign({ email: user.email },process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '24h' });
//             return {
//               email: user.email,
//               token: token
//             };
//           }
//         )
//       }
//     catch (error) {
//       return error;
//     }
// }

const createUser = async (body) => {
    try {
      connection.connection();
      const user = await findOneUser(body.email)
      if(user === null) {
        const user = new User(body);
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(body.password, salt);
        user.password = hash;
        return user.save();
      }else{
          return 'Email has been used';
      }
    } catch (error) {
      return error;
    }
}

const findOneUser = async (email) => {
  return await User.findOne({email: email});
}

const getEquipmentByUserId = async (params) => {
    try {
      connection.connection();
      console.log(params);
      return Equipment.find({ userId: params.userId });
    } catch (error) {
      return error;
    }
}

module.exports =  { createUser, getEquipmentByUserId, findOneUser };