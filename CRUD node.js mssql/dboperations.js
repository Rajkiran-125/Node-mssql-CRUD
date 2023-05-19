var config = require('./dbconfig')
const sql  = require('mssql')

async function getEmployees(){
    try{
        let pool =  await sql.connect(config);
        let employee = await pool.request().query("select * from emp")
        return employee.recordsets
    }
    catch (error){
        console.log(error)
    }
};


async function getEmployee(id){
    try{
        let pool = await sql.connect(config)
        let employee = await pool.request()
            .input('input_parameter',sql.Int, id)
            .query("select * from emp where id = @input_parameter")
        return employee.recordsets;
    }
    catch (error){
        console.log(error)
    }
}


async function addEmployee(emp){
    
    try {
        let pool = await sql.connect(config);
        let insertEmployee = await pool.request()
            .input('firstname',sql.varChar,emp.firstname)
            .input('lastname',sql.varChar,emp.lastname)
            .input('email',sql.varChar,emp.email)
            .input('salary',sql.bigint,emp.salary)
            .execute('InsertEmployee')
        return insertEmployee.recordsets;
            
        }
    catch (err){
        console.log(err)
    }
}



module.exports = {
    getEmployees : getEmployees,
    getEmployee : getEmployee,
    addEmployee : addEmployee

}