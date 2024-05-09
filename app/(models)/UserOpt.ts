import mongoose  ,{ Schema } from "mongoose";

if (!process.env.MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
}
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise

const userSchema = new Schema({
        name: String,
        email: String,
        text: String,
        checkbox: String,

    },
    {
        timestamps: true,
    }
);

const UserOpt = mongoose.models.UserOpt || mongoose.model("UserOpt", userSchema) 

export default UserOpt;

