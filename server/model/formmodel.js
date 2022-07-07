const mongo=require('mongoose')


const formModel=mongo.Schema({
    sender:{type:mongo.Schema.Types.ObjectId,ref:"Student"},
    content:{type:String,trim:true},
   date:{type:String}
},
    {
        timestamps:true,
    }

);

const Message=mongo.model("Message",messageModel)

module.exports=Message;