const supplierschema=require('../models/supplier');

// Reservation insert 
const addsuppler =( req,res)=>{
	let Newsupplierschema = new supplierschema(); 
	Newsupplierschema.company_name=req.body.company_name;
	Newsupplierschema.email=req.body.email;
	Newsupplierschema.name=req.body.name;
	Newsupplierschema.phone=req.body.phone;
	Newsupplierschema.status_user=req.body.status_user;
	Newsupplierschema.save( (err,suppliers) => {
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({ 
				suppliers
			})
		}
	})
}

// //   Get all result
const get_all_suppler =( req,res)=>{

	supplierschema.find( (err,supper) =>{
		if(err){
			res.send(err);
		}
		else{
			res.send(supper);
		}
			
	})
	
}
 

const deletesupplair=  (req,res) => {
	supplierschema.findByIdAndRemove(req.params.id, (err,suppleir)=>{
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "delete one   successfully",
				suppleir
			})
		}
	})
}


 const updatsuppleir = (req,res)=>{
	 
	supplierschema.findByIdAndUpdate(req.body.id, req.body.contact,{ new :true}, (err,supper)=>{
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({ 
				supper
			})
		}
	})
}




module.exports={
	addsuppler,
	deletesupplair,
	get_all_suppler, 
	updatsuppleir
}