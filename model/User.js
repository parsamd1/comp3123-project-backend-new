var mongoose=require('mongoose')

var userSchema=mongoose.Schema({
    username:{
        type:String,
        maxlength:100,
        unique:true,
        required:true
    },
    email:{
        type:String,
        maxlength:50,
        unique: true,
        required: true
    },
    password:{
        type: String,
        maxlength: 50,
        required: true
    }
})

// pushing the schema into the database
module.exports=mongoose.model('user', userSchema)