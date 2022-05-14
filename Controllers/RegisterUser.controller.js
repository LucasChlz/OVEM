const UserModel = require('../Models/UserModel');

module.exports = {
    create: async (req, res) => {
        const { name, email, password } = req.body;

        const verifyEmail = await UserModel.findOne({email: email});
        if(verifyEmail)
        {
            res.send({
                message: "this email already used"
            });
        } else
        {
            await UserModel.create({
                name: name,
                email: email,
                password: password
            });

            res.send({name,email,password});
        }
    } 
}