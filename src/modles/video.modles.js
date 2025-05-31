import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema({
    videoFile:{
        type:String, //cloudnary url
        requiered:true
    },
      thumbnail:{
        type:String,
        requiered:true
    },
      title:{
        type:String,
        requiered:true
    },    
    description:{
        type:String,
        requiered:true
    }, 
    duration:{
        type:Number,//clodnary 
        requiered:true
    },       
    views:{
        type:Number,
        default:0
    },
    isPublish:{
        type:Boolean,
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
    


}, {timestamps:true})
videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)