import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    id: {
        type: String,
        unique: true,
    },
    // TODO: Replace _id with id
    name: {
        type: String,
        required: true,
        min: 5,
        max: 32,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: String,
});
