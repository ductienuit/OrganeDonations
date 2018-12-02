const mongoose = require('mongoose');

const OrganSchema = new mongoose.Schema({
    donatorId: { type: String, required: true },
    creationDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    additionalInfo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Organ', OrganSchema);
