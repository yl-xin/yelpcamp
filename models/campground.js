var mongoose = require("mongoose");
 // SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
   name: String,
   price: Number,
   image: String,
   description: String,
   createdAt: { type: Date, default: Date.now },
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
},{usePushEach: true});

 
module.exports = mongoose.model("Campground", campgroundSchema);