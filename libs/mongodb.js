import mongoose from 'mongoose'
const connectMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGOOSE_URL)
        console.log("connect success")
    } catch (error) {
        console.log(error)
    }
}
export default connectMongoDB;