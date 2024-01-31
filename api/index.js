const express = require ('express');
const app = express();
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT;

const authRoute = require('./routes/auth');

app.use(express.json());

app.use('/auth', authRoute);

module.exports.start = function () {
    app.listen(port, ()=>{
        console.log(`Server listenig at port ${port}`);
    })
}
