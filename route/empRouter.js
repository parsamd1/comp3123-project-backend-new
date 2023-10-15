// this is the emp http request handler
var express=require('express')
var empModel=require('../model/Employee')
var route = express.Router()

route.route("/employees").get(async (req, res)=>{
    // GET ----> /api/v1/emp/employees
    try {
        var empList = await empModel.find()
        res.status(200).json(empList)
    }catch (e) {
        res.status(500).json(e)
    }

}).post(async (req, res)=>{
    //POST ---> /api/v1/emp/employees
    try {
        var newEmp=new empModel({
            // creating a new object using the request body to push into database
            ...req.body
        })
        // push into database
        await newEmp.save()
        res.status(201).json({message:"employee added successfully"})
    }catch (e){
        res.status(500).json(e)
    }
}).delete(async (req, res)=>{
    //DELETE -> /api/v1/emp/employee?eid=???
    try {
        var emp = req.query
        await empModel.findByIdAndDelete(emp.eid)
        res.status(204).json({})
    }catch (e) {
        res.status(500).json(e)
    }
})

route.route("/employees/:eid").put(async (req, res)=>{
    try {
        var eid = req.params.eid
        // code to update employee's details go HERE!!!!
        // delete employee by ID
        await empModel.findByIdAndUpdate(eid, req.body)
        res.status(200).json(await empModel.findById(eid))
    }catch (e) {
        res.status(500).json(e)
    }
}).get(async (req, res)=>{
    try {
        var eid = req.params.eid
        // code to get employee's details go HERE!!!!!
        // find the employee by ID
        var employee=await empModel.findById(eid)
        res.status(200).json(employee)
    }catch (e) {
        res.status(500).json(e)
    }
})

module.exports=route