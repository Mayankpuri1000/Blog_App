import mongoose from "mongoose";

type User = {
    username: string;
    fullName: string;
    email: string;
    password: string;
    avatar: string;
}

const userSchema = new mongoose.Schema<User>({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
});

export const User = mongoose.model<User>("User", userSchema);
