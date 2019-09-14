const reservationschema=require('../models/reservationform');


// Reservation insert 
const addreservation =( req,res)=>{
	let newreservation = new reservationschema(); 
	newreservation.name=req.body.name;
	newreservation.email=req.body.email;
	
	newreservation.room_type=req.body.room_type;
	newreservation.arrival_date=req.body.arrival_date;
	newreservation.deprate_date=req.body.deprate_date;
	newreservation.no_of_guest=req.body.no_of_guest;
	newreservation.free_packup=req.body.free_packup;
	newreservation.flight_number=req.body.flight_number;
	newreservation.specail_requests=req.body.specail_requests;
	
	newreservation.Student_id=req.auData.user._id;
	newreservation.save( (err,reservationn) => {
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({ 
				reservationn
			})
		}
	})
}

// //   Get all result
const get_all_reservation =( req,res)=>{

	reservationschema.find( (err,reservationn) =>{
		if(err){
			res.send(err);
		}
		else{
			res.send(reservationn);
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
	addreservation,
	get_all_reservation,
	getReservationId,
	deleteReservation,
	updatReservation,
}