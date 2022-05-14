const UserModel = require('../Models/UserModel');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

module.exports = {
    create: async (req, res) => {
        const { name, email, password } = req.body;

        let formatEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!formatEmail.test(email))
        {
            return res.send({
                message: "this email format is invalid, please try again"
            });
        }

        const verifyEmail = await UserModel.findOne({email: email});
        if(verifyEmail)
        {
            return res.send({
                message: "this email already used"
            });
        } else
        {
            const hashPassword = bcrypt.hashSync(password);

            await UserModel.create({
                name: name,
                email: email,
                password: hashPassword
            });

            return res.send({name,email});
        }
    } 
}