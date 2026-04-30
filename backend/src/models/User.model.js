import { Schema, model } from "mongoose";

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true
    },

    mobileNo: {
        type: String,
        maxLength: 10,
        unique: true,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    refreshToken: {
        type: String
    }

    
}, { timestamps: true });

export const User = model("User", userSchema);