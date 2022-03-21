const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const dotenv = require('dotenv');
const productRouter = require('./routes/productRoutes');


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


const whitelist = ['http://localhost:3000', 'https://online-store-3689c.web.app']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());


const connection = mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log('connected to db..');

        app.listen(port, () => {
            console.log('listening at...' + port);
        })

    }).catch((err) => {
        console.log(err);
    })




app.get('/', (req, res) => {
    console.log(req.body);
    res.status(200).json({ done: 'all good and connected' });

})

app.use('/products', productRouter);
