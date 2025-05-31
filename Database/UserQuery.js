const db = require("../Database/Db");
exports.q = async ()=>{
    try{
        const createTableSQL = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    const d = await db.execute(createTableSQL);
    if(d){
        console.log("create user")
    }
    }catch(er){
        console.log("There is something going wrang");
    }
     
}

    

