import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'


//definir esquema de agent

const agentSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password:String,
    age: {type: Number, min:18, max:120},
    update:{type:Date, default:Date.now},
})
agentSchema.statics.hashPassword = (clearPassword) => {
    return bcrypt.hash(clearPassword, 7)
  }

agentSchema.methods.comparePassword = function(clearPassword) {
    // this --> user
    return bcrypt.compare(clearPassword, this.password)
  }
//crear modelos
const Agent = mongoose.model('Agent', agentSchema)


export default Agent