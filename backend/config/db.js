import mongoose from "mongoose"; 
export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://nirmalyadash21:019627@cluster0.ganwt.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}