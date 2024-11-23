import { Schema, model, models } from "mongoose";

const ChatbotSchema = new Schema({
    agent: {
        required: true,
        type: String,
        unique: true
    },
    text: {
        required: true,
        type: String
    },

    time: {
        required: true,
        type: String
    }
}, {
    timestamps: true
});

export const ChatBot = models?.ChatBot || model("ChatBot", ChatbotSchema);