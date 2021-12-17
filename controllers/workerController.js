const db = require('../models')

// create main Model

const Worker = db.workers

// main work

// 1. Create worker

const addWorker = async (req, res) => {
    let info = {
        job_ID: req.body.job_ID,
        owner_ID: req.body.owner_ID || "",
        firstname: req.body.firstname || "",
        lastname: req.body.lastname || "",
        position: req.body.position || "",
        location: req.body.location || "",
        gender: req.body.gender || "",
        working: req.body.working ? req.body.working : false,
        CIN: req.body.CIN || "",
        birthday: req.body.birthday || "",
        phone1: req.body.phone1 || 0,
        phone2: req.body.phone2 || 0,
    }

    const worker = await Worker.create(info)
    res.status(200).send(worker)
    console.log(worker)
}

// 2. Get all Worker

const getAllWorker = async (req, res)=>{
    let workers = await Worker.findAll({}) // {attributes: ['title','price']}
    res.status(200).send(workers)
}

// 3. Get single Worker

const getOneWorker = async (req, res)=>{
    let id = req.params.id
    let worker = await Worker.findOne({where: {id: id}})
    res.status(200).send(worker)
}

// 4. Update Worker

const updateWorker = async (req, res)=>{
    let id = req.params.id
    let worker = await Worker.update(req.body, {where: {id: id}})
    res.status(200).send(worker)
}

// 5. Delete Worker by id

const deleteWorker = async (req, res)=>{
    let id = req.params.id
    await Worker.destroy({where: {id: id}})
    res.status(200).send('Worker is deleted!')
}

// 6. Get Workers on site

const getActiveWorker = async (req, res)=>{
    const workers = await Worker.findAll({where: {working: true}})
    res.status(200).send(workers)
}

module.exports = {
    addWorker,
    getAllWorker,
    getOneWorker,
    updateWorker,
    deleteWorker,
    getActiveWorker
}
