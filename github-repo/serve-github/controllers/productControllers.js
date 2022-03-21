const Product = require('../models/product');

// var fs = require('fs');
// var path = require('path');

const availableMimes = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml'];

// fetch all products
const getAllProducts = (req, res) => {
    Product.find()
        .then((result) => {
            res.status(200).json({ result: result })
        })
        .catch((err) => {
            console.log(err);
            res.json({ error: err });
        })
}


// add product
const addProduct = (req, res) => {
    console.log(req.body);
    console.log(req.files);

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ 'error': 'No file uploaded' });
    }

    if (!availableMimes.includes(req.files.image.mimetype)) {
        return res.status(400).json({ 'error': 'unsupported format, upload an image' });
    }

    // The name of the input field (i.e. "image") is used to retrieve the uploaded file
    const imgFile = req.files.image;

    // const imgNewName = new Date().getTime() + imgFile.name
    // const uploadPath = __dirname + '/../productsImages/' + imgNewName;

    let buff = imgFile.data;
    let base64data = buff.toString('base64');

    let imgSrc = "data:" + imgFile.mimetype + ";base64," + base64data

    // res.json({
    //     ...req.body,
    //     imgSrc: imgSrc,
    // })

    const product = new Product({
        ...req.body,
        image: imgSrc
    });

    product.save()
        .then((result) => {
            res.status(201).json({
                result
            });
        }).catch((err) => {
            console.log(err);
            res.status(400).json({ 'error': 'database error connection' });
        })


}


module.exports = {
    addProduct,
    getAllProducts
}