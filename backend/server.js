const express = require( 'express')
const path  = require('path')
const port = process.env.PORT || 8084;


//set up routes
const router = express.Router()

    //set up dist as static folder
    //dist is the directory created by webpack build
    router.use( express.static(path.join(__dirname, '../dist')));


    //Route setup

    router.get('/', (req, res) => {
        res.sendFile('index.html', {root: __dirname});
    })
    router.get('*', (req, res) => {
         res.sendFile('index.html', {root: path.resolve(__dirname, '../dist')});
    })

//set up express server
const app = express()
    //wire the routes
    app.use(router)


//Start server
app.listen(port, (req, res) => {
console.log(`server listening on port: ${port}`)
 });