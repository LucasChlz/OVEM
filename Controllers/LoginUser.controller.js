const UserModel = require('../Models/UserModel');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


module.exports = {
    login: async (req, res) => {
        const { email, password} = req.body;

        const findUser = await UserModel.findOne({email: email});

        if (findUser)
        {
            const passwordCompare = await bcrypt.compareSync(password, findUser.password);

            if(passwordCompare)
            {
                var sess = req.session;
                sess.name = findUser.name;
                sess.email = findUser.email;
                sess.login = true;

                return res.send({
                    name: sess.name,
                    email: sess.email,
                    login: sess.login
                });
            } else
            {
                return res.send({ message: "invalid password" });   
            }
        } else {
            return res.send({ message: "email not found" });
        }
    } 
}