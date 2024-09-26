import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: true,
        maxlenght:60
    },
    adress: {
        type: String,
        required: true,
        maxlenght:200
    },
    total: {
        type:Number,
        required: true
    },
    status:{
        type: Number,
        default: 0,
    },
    status:{
        type: Number,
       required: true
    },
    
},
    {
    timestamps: true,
});


export default mongoose.models.Order || mongoose.model("Product", OrderSchema);