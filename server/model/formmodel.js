const mongo=require('mongoose')


const formModel=mongo.Schema({
    sender:{type:mongo.Schema.Types.ObjectId,ref:"Student"},
    branch:{type:String,required:true},
    id:{type:String, required:true},
    content:{type:String,trim:true},
    createdAt:{type:Date},
},
    {
        timestamps:true,
    }

);

const Message=mongo.model("Message",messageModel)

module.exports=Message;