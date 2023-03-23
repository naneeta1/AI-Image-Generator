import mongoose from "mongoose";

const post = new mongoose.Schema({
    prompt:{type:String, required:true},
    photo:{type:String, required:true}
});

const PostSchema = mongoose.model('Post',post);

export default PostSchema;