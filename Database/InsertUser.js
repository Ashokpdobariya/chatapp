const db = require('../Database/Db');

exports.insertuser = async (...args)=>{
    try{
        const {name,email,password} = args[0];
        const insertSQL = `INSERT INTO users (name, email,password) VALUES (?, ?,?)`;
        const [result] = await db.execute(insertSQL, [name, email,password]);
        const res = await db.end();
        if(res) return res;
    }catch(err){
        console.log("user not insrted",err.sqlMessage)
    }
};

