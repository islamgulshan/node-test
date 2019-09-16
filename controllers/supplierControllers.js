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

const getReservationId =  (req,res) => {


	reservationschema.findById(req.body.id, (err,reservationn)=>{
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "get ones successfully",
				reservationn
			})
		}
	})
}


const deleteReservation=  (req,res) => {
	reservationschema.findByIdAndRemove(req.params.id, (err,reservationn)=>{
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "delete one   successfully",
				reservationn
			})
		}
	})
}


 const updatReservation = (req,res)=>{
	console.log(req.body);
	reservationschema.findByIdAndUpdate(req.body.id, req.body.contact,{ new :true}, (err,reservationn)=>{
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "update  save successfully",
				reservationn
			})
		}
	})
}




module.exports={
	addsuppler,
	get_all_suppler,
	getReservationId,
	deleteReservation,
	updatReservation,
}