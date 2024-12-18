import userModel from "../models/userModel.js";
import { hashPassword } from "./../helpers/authHelper.js";

export const registerController = async (req, res) => {
    try {
        const {name, email, password} = req.body
        //validations
        if(!name) {
            return res.send({error: 'Name is Required'})
        }   
        if(!email){
            return res.send({error: 'Email is Required'})
        }
        if(!password){
            return res.send({error: 'Password is Required'})
        }
        //check user
        const exisitingUser = await userModel.findOne({ email })
        //exisiting user
        if(exisitingUser){
            return res.status(200).send({
                success: true,
                message: 'Already Register please login',
            })
        }
        //register user
        const hashedPassword = await hashPassword(password)
        // save
        const user = new userModel( {name, email, password:hashedPassword}).save()
        res.status(201).send({
            success: true,
            message: 'User Register Successfully',
            user
        })

    } catch (error) {
        console.log(error)
        res.status(500). send({
            success: false,
            message: 'Errro in Registeration',
            error   
        })
    }
};

