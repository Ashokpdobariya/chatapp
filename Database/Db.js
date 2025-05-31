const mysql = require('mysql2');


    const con =  mysql.createConnection({
      host: 'localhost',
      user: 'magento2',
      password: 'Ashok@1978',
      database: 'chatapp'
    });
    
    module.exports = con.promise();


