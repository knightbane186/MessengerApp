const mongoose =  require('mongoose');

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        recepientId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        messageType: {
            type:
        },
    }
)