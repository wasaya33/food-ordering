import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlenght:60
    },
    desc: {
        type: String,
        required: true,
        maxlenght:200
    },
    image: {
        type: String,
        required: true
    },
    prices:{
        type: [Number],
        required: true
    },
    extraOptions: {
        type: [
            {
                text:{type: String, required:true},
                price:{type: String, required:true}
            }
        ],
    },
    
},
    {
    timestamps: true,
});


export default mongoose.models.Product || mongoose.model("Product", ProductSchema);

// export default function handler(req, res) {
//     res.status(200).json({ name: 'John Doe' })
//   }
  