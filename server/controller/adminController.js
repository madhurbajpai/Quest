import Admin from "../model/Admin.js";
import Quiz from "../model/Quiz.js";
import User from "../model/User.js";

export const addAdmin = async (req,res) => {
    try{
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(422).json({error: "Something is missing"});
        }

        const adminExist = await Admin.findOne({email: email});

        if(adminExist){
            return res.status(422).json({error: "Admin already registered"});
        }
        
        const userExist = await User.findOne({email: email});
        if(userExist){
            return res.json({error: "Alreday registered as User"});
        }
        
        const admin = new Admin({name, email, password});
        const adminRegister = await admin.save();

        if(adminRegister){
            return res.status(201).json({message: "Admin registered successfully"});
        }
        return res.status(422).json({error: "Cannot registered Admin"});


    }catch(error){
        console.log('Error while adding admin', error);
    }
}

export const getAdmin = async (req,res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(200).json({message: "Something is missing"});
        }

        const admin = await Admin.findOne({email: email});
        // console.log(admin);

        if(!admin){
            return res.status(200).json({message: "Admin does not exist"});
        }

        const isPasswordValid = await admin.password === password;
        if(!isPasswordValid){
            return res.status(200).json({message: "Invalid Password"});
        }

        const quizHistory = await Quiz.find({ createdBy: admin._id });
        const quizIds = quizHistory.map((quiz) => quiz._id);
        // console.log(quizIds);
        return res.status(201).json({adminId: admin._id,adminName: admin.name, adminEmail: admin.email,quizIds: quizIds,message: "Admin login successfully"});
    } catch(error){
        console.log('Some error occured while getting admin', error);
    }
}