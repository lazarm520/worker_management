const db = require('../models')

// create main Model

const Product = db.products
const Review = db.reviews

// main work

// 1. Create product

const addProduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)
}

// 2. Get all Product

const getAllProduct = async (req, res)=>{
    let products = await Product.findAll({}) // {attributes: ['title','price']}
    res.status(200).send(products)
}

// 3. Get single Product

const getOneProduct = async (req, res)=>{
    let id = req.params.id
    let product = await Product.findOne({where: {id: id}})
    res.status(200).send(product)
}

// 4. Update Product

const updateProduct = async (req, res)=>{
    let id = req.params.id
    let product = await Product.update(req.body, {where: {id: id}})
    res.status(200).send(product)
}

// 5. Delete Product by id

const deleteProduct = async (req, res)=>{
    let id = req.params.id
    await Product.destroy({where: {id: id}})
    res.status(200).send('Product is deleted!')
}

// 6. Get published Product

const getPublishedProduct = async (req, res)=>{
    const products = await Product.findAll({where: {published: true}})
    res.status(200).send(products)
}

module.exports = {
    addProduct,
    getAllProduct,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct
}
