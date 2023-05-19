const dboperations = require('./dboperations');
var Db = require('./dboperations');
var Employee = require('./employee');


var express= require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var router = express.Router();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors())
app.use('/api',router);


router.use((request,response,next)=>{
    console.log('middleware is created')
    next();
});


router.route('/employee').get((request,response)=>{

    dboperations.getEmployees().then(result =>{
        response.json(result[0]);
    });
});


router.route('/employee/:id').get((request,response)=>{

    dboperations.getEmployee(request.params.id).then(result =>{
        response.json(result[0]);
    });
});



router.route('/employee').post((request,response)=>{

    let employee = {...request.body}
    
    dboperations.addEmployee(employee).then(result =>{
        response.status(201).json(result);
    });
});




var port = process.env.PORT || 8090;
app.listen(port);
console.log('Employee api is running at '+ port);







