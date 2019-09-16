
# Inventory System


 

## Signup New Supplier 
  

#### URL For access 


https://boiling-anchorage-33456.herokuapp.com/api/addsuppler
 


#### Json Fromat


{
	 
		{
 
		"company_name" : "iAgility",
		"email" : "salmanbukahri37sss@gmail.com",
		"name" : "4 Bed Rooms",
		"phone" : "0333333",
		"status_user" : "Active" 
		}
	 
}




## Git All Supplier 
  

#### URL For access 


 url 
 
 https://boiling-anchorage-33456.herokuapp.com/api/get_all_suppler


# Delete Supplier 

##  Get Id  and pass ID and Get paramter

#### URL For access 




 https://boiling-anchorage-33456.herokuapp.com/api/deletesupplair/id={}
 
 
 
 
## Edit Supplier  Supplier 
  

#### URL For access 


https://boiling-anchorage-33456.herokuapp.com/api/updatsuppleir
 


#### Json Fromat


{
	 
		{
	"id":"5d7f8b532419ca001757ac93",
	 "contact":{
		 	"company_name": "iAgility",
        	"email": "islam@gmail.com",
        	"name": "4 Bed Rooms",
        	"phone": "0333333",
        	"status_user": "Active"
		 }
	 
	}
	 
}


## Admin  login Through JWT Library
### Compare password with jwt and generate tokten URL For access login

#### Json Fromat
https://boiling-anchorage-33456.herokuapp.com/login

 {

					"email": "gulsh3@yopmail.com",
					"password":"123456"

}



## Admin  Signup  
### Compare password with jwt and generate tokten URL For access login

#### Json Fromat
https://boiling-anchorage-33456.herokuapp.com/signup

 {

					"email": "gulsash3@yopmail.com",
					"password":"123456"

}











