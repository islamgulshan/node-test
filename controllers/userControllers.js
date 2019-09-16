const UserSchema=require('../models/userModel');
var jwt= require("jsonwebtoken");


// save data 
 const login =( req,res)=>{
	UserSchema.findOne({ email: req.body.email }, function(err, user) {
		if(err){
			res.status(500).json({
				message: "error",
				err
			})
		}
		else{  
			
			user.comparePassword(req.body.password, function(err, isMatch) {
				  if (isMatch) {
					jwt.sign(
					  { result },
					  "secretKey",
					  { expiresIn: "30000s" },
					  (err, token) => {
						if (err) {
						  err.status(403).send(err);
						} else {
						  res.status(200).json({
							result,
							token
						  });
						}
					  }
					);
				  } else {
					res.json({
					  msg: "Username/Password is not correct",
					  isMatch: isMatch
					});
				  }
				
			});
	
		 
			
		}

	
	});
 }

//   Get all result
const signup =( req,res)=>{
	let NewUserSchema = new UserSchema(); 
	NewUserSchema.name=req.body.name;
	NewUserSchema.email=req.body.email;
	NewUserSchema.phone=req.body.phone;
	NewUserSchema.user_type=req.body.user_type;
	NewUserSchema.password=req.body.password;
	NewUserSchema.save( (err,userinfo) => {
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "data save successfully",
				userinfo
			})
		}
	})	
}

module.exports={
	login,
	signup
}