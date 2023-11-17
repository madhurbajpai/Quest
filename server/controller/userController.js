import Connection from "../database/db.js";
import User from "../model/User.js";
import Admin from "../model/Admin.js";

export const addUser = async (req,res) => {
    try{
        const {name, email, password, attemptedQuizes} = req.body;
        if(!name || !email || !password){
            return res.status(422).json({message: "Some Field is missing"});
        }

        const userExist = await User.findOne({email: email});
        if(userExist){
            return res.json({error: "User already Exist"});
        }

        const adminExist = await Admin.findOne({email: email});

        if(adminExist){
            return res.status(422).json({message: "Already registered as Admin"});
        }

        const user = new User({name,email,password});
        const userRegister = await user.save();
        if(userRegister){
            return res.status(201).json({message: "User registered successfully"});
        }
        else return res.status(500).json({message: "Cannot Register"});
    }catch(error){
        return res.status(500).json(error.message);
    }
}

export const getUser = async (req,res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(200).json({message: "Something is missing"});
        }

        const user = await User.findOne({email: email});

        if(!user){
            return res.status(200).json({message: "User does not exist"});
        }

        const isPasswordValid = await user.password === password;
        if(!isPasswordValid){
            return res.status(200).json({message: "Invalid Password"});
        }
        return res.status(201).json({message: "User login successfully"});

    }catch(error){
        console.log('Some error occured during getting user', error);
    }
}