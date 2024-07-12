import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        lastname: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, default: null, required: true },
        picture: { type: String },
        isAdmin: { type: Boolean, default: false, required: true }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

export default User;