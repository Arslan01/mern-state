import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    const {username, email, password} = req.body;
    const hashedPassword =  bcryptjs.hashSync(password, 10);
    const newUser = new User({username, email, password: hashedPassword});
    try {
    await newUser.save();
    res.status(200).json({message: "User created successfully"});
    console.log(req.body);
}catch(err) {
    res.status(500).json({message: err.message});
}
}

// export const test = (req, res) => {
//     res.json({
//         message: 'Auth Api route is working'
//     });
// } 