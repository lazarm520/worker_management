const db = require('../models')

// create main Model

const Worker = db.workers
const Review = db.reviews

// main work

// 1. Create worker

const addWorker = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
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

// 6. Get published Worker

const getPublishedWorker = async (req, res)=>{
    const workers = await Worker.findAll({where: {published: true}})
    res.status(200).send(workers)
}

module.exports = {
    addWorker,
    getAllWorker,
    getOneWorker,
    updateWorker,
    deleteWorker,
    getPublishedWorker
}
