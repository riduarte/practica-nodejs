import mongoose, {Schema} from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    url: String,
    owner:{type:Schema.Types.ObjectId, ref:'Agent'}
},
{
    collection:'product'
})

const Product = mongoose.model('Product', productSchema)

export default Product