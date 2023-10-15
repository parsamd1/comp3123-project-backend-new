var mongoose=require('mongoose')

var empSchema=mongoose.Schema({
    first_name:{
        type:String,
        maxlength:100,
        required:true
    },
    last_name:{
        type:String,
        maxlength:50,
        required: true
    },
    email:{
        type:String,
        maxlength:50,
        unique:true
    },
    gender:{
        type:String,
        maxlength:25,
        enum:['Male', 'Female', 'Other']
    },
    salary:{
        type:Number,
        required:true
    }
})

// pushing the schema into the database
module.exports=mongoose.model('employee', empSchema)