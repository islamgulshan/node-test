var mongoose= require('mongoose');

const supplierschema=mongoose.Schema({
	
	company_name: {
		type:String,
		require:true
	},
	name: {
		type:String,
		require:true,
		
	},
	email: {
		type:String,
		require:true,
		index: {unique:true}
	},

	phone: {
		type:String,
		require:false
	},
	status_user: {
		type:String,
		require:false
	},
	createdDate: { 
		type: Date, 
		default: Date.now()
     }
},

	{
		timestamps:true

	}	


)

module.exports= mongoose.model('supplier',supplierschema);