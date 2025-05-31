const connection = require("../Database/Db");
exports.AddColumn = async (table,column,datatype)=>{
    const alterSQL = `ALTER TABLE ${table} ADD COLUMN ${column} ${datatype}`;
    const added = await connection.execute(alterSQL);
    await connection.end();
    if(added)return true;
};
