import mongoose from "mongoose";

const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", UserSchema);

export default User;