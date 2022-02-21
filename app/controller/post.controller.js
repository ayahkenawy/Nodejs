const postModel = require("../../database/models/post.model")
class post{

    static add= async(req,res)=>{
        try{
            const post = new postModel(req.body,req.user.id)
            await post.save() 
            res.send({
                apiStatus:true, data: post, message:"data added successfuly"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error adding post"})
        }
    }
}
module.exports=post