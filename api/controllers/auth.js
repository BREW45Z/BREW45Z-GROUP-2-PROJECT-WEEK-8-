const User = require('../models/User');
const bcrypt = require('bcryptjs')
const bcryptSalt = bcrypt.genSaltSync(10);


//@desc Register User
//@route POST /api/v1/auth/register
//@access Public


exports.register = async (req, res)=>{
    try {
        const {name, email, password} = req.body;
        const user = await User.create({
                name,
                email,
                password: bcrypt.hashSync(password, bcryptSalt)
            });
            res.json(user);
        } catch (error) {
            res.status(500).json({success:false, message:error.message})
            }
}



//@desc Login User
//@route POST /api/v1/auth/login
//@access Public

exports.login = async (req,res)=>{
    const {email, password} = req.body;
    try{
    const user = await User.findOne({email});
    if(!user){
        return res.status(422).json({success:false, message:'Invalid credentials'})
    }
    if (bcrypt.compareSync(password, user.password)){
         jwt.sign({email:user.email, id:user._id}, process.env.SECRET_KEY, {}, (err, token)=>{
            if(err){
               return res.status(500).json({success:false, message:'Error signing token'})
            }
            res.cookie('token', token).json(user)
        })
}   else {
        res.status(422).json({success:false, message:'Invalid credentials'})
    }
} catch (error) {
    console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}



