const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: { 
    type: String, 
    required: true 
},
  description: { 
    type: String, 
    required: true 
},
  image: { 
    type: String, 
    required: true 
},
});

module.exports = mongoose.model("Todo", todoSchema);
