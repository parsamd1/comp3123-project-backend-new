// importing express module
var express=require('express')

const mongoose = require('mongoose')


// import user
var userRoute=require('./route/userRouter')

//import employee
var empRoute=require('./route/empRouter')

//configuring the server port
var SERVER_PORT=8089

var app=express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Replace '*' with your frontend domain if known
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });

// adjust the header content-type to application/json
app.use(express.json())

app.use(express.urlencoded({extended:true}))

// user middleware
app.use('/api/v1/user', userRoute)
// employee middleware
app.use('/api/v1/emp', empRoute)


// CONNECTING TO MONGODB SERVER BELOW!!!!!! ---------------------------------------------
const uri = "mongodb+srv://john123:john123@cluster0.sqtw7uq.mongodb.net/comp3123%5Fassignment1?retryWrites=true&w=majority"; // Replace with your MongoDB connection string
mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("Database connection successful")
}).catch((err)=>{
    console.log(`Database connection failed -> ${err}`)
    process.exit()
})


// initialize the server at the specified server (localhost) and port number
app.listen(SERVER_PORT, ()=>{
    console.log(`Server is listening at http://localhost:${SERVER_PORT}`)
})
