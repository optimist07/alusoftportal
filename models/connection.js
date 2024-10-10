const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: "localhost",
    user : 'root',
    password: '',
    database : 'alusoft_project',
});
conn.connect((err)=>{
    if(err){
    throw err;
    }
    console.log("Database connected Succesfully");
});
module.exports = conn.promise();