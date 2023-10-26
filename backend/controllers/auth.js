import { db } from "../connect.js"
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

export const register = (req,res) => {
//check if user exists
const q = "SELECT * FROM users WHERE username = ?"

db.query(q, [req.body.username], (err, data) => {
  if(err)
    return res.status(500).json(err);

  if(data.length)
    return res.status(409).json("User already exists!");
    
    //create a new user
      //hash the password
    
      //method to hash the password with the variable salt
      const salt = bcrypt.genSaltSync(10);
      //have to generate the salt to pass to the hashedpassword
      const hashedPassword = bcrypt.hashSync(req.body.password, salt);

      const q = "INSERT INTO users (`username`, `email`, `password`, `name`) VALUES (?)";

      const values = [req.body.username, req.body.email, hashedPassword, req.body.name]

      db.query(q, [values], (err,data) => {
        if(err)
          return res.status(500).json(err);
        return res.status(200).json("User has been created!");
      })
});

}

export const login = (req,res) => {
//check if user exists if not send an error
const q = "SELECT * FROM users WHERE username = ?";

db.query(q,[req.body.username], (err,data) => {
  if(err)
    return res.status(500).json(err);

  if(data.length === 0)
    return res.status(404).json("User not found!");

    //check if password matches
  const checkPassword = bcrypt.compareSync(req.body.password, data[0].password);

  if(!checkPassword)
    return res.status(400).json("Wrong password or username!");

    //send a token for security

    //if userId == to post id than we can delete the post
    const token = Jwt.sign({id:data[0].id}, "secretkey");
  //send everything but the password using ...others
  const {password, ...others} = data[0];
    
    res.cookie("accessToken", token,{
      httpOnly: true,
    }).status(200).json(others);

});


}


export const logout = (req,res) => {
  res.clearCookie("accessToken", {
    secure: true,
    sameSite: "none"
  }).status(200).json("User has been logged out.");

}