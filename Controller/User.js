const addUser = require("../Database/InsertUser");
exports.addUser = async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const result = await addUser.insertuser(req.body);

        if(result){
            return res.json({"success":'true','message':"User cretaed successfully"})
        }else{
            console.log("errrrr")
        }
    }catch(err){
        res.status(400).json({"success":false,err})
    }
    
}