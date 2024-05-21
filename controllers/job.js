const jobModel = require("../model/job")

const createJob = async(req,res) => {
    try {
        const jobObj = req.body;
        const newJob = jobModel(jobObj);
        const newlyJob = await newJob.save();
        res.json({
            success : true,
            message : "Job Created Successfully"
        })   
    } 
    catch (error) {
        res.json({
            success : false,
            message : "Error in Job Creation"
        })    
    }
}

const listJob = async(req,res) => {
    try {
        const {minSalary,maxSalary} = req.query;
        const jobList = await jobModel.find({
            $and : [
                {salary : {$gte : minSalary}},
                {salary : {$lte : maxSalary}}
            ]
        })
        res.json({
            success : true,
            message : "List_Job Successfully",
            result_length : jobList.length,
            result : jobList
        })   
    } 
    catch (error) {
        res.json({
            success : false,
            message : "Error in Job List"
        })    
    }
}

const editJob = async(req,res) => {
    try {
        const jobId = req.params.id;
        await jobModel.findByIdAndUpdate(jobId,req.body)
        res.json({
            success : true,
            message : "Edit Job Successfully"
        })   
    } 
    catch (error) {
        res.json({
            success : false,
            message : "Error in Job Edition"
        })    
    }
}


const deleteJob = async(req,res) => {
    try {
        const jobId = req.params.id;
        await jobModel.findByIdAndDelete(jobId)
        res.json({
            success : true,
            message : "Job Deleted Successfully"
        })   
    } 
    catch (error) {
        res.json({
            success : false,
            message : "Error in Job Delete"
        })    
    }
}


const jobController = {
    createJob,listJob,editJob,deleteJob
}

module.exports = jobController;