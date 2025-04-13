const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minlength: 8
    },
    profileImage: {
        type: String,
        default: ""
    },
    userid: {
        type: String
    },
    isverified: {
        type: String,
    },
    progress: {
        mentalhealth: {
            type: String,
            default: ''
        }
    },
    appointment: [
        {
            doctor: {
                type: String
            },
            time: {
                type: String
            },
            date: {
                type: String
            },
            personalinfo: {
                name: { type: String },
                email: { type: String },
                phone: {type : String},
                emergencyContact: {type : String}, 
                language: {type : String}, 
                mode: {type : String}, 
                duration: {type : String}, 
                symptoms: {type : String}, 
                description: {type : String}
            }
        }
    ]


}, { timestamps: true });


module.exports = mongoose.model("User", UserSchema)