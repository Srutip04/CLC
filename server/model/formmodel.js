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

const Form=mongo.model("Form",formModel)

module.exports=Form;