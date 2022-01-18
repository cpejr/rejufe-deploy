const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    section: {
        type: String,
        require: false,
        enum: ['SITE','INTRANET'],
    },
    type: {
        type: String,
        require: false,
        enum: ['ARTIGO','NOTÍCIAS'],
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    archive_1: {
        type: String,
        require: false,
    },
    archive_2: {
        type: String,
        require: false,
    },
    photos: {
        type: String,
        require: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        require: true,
        enum: ['I','A'],
    },
    send_site: {
        type: Boolean,
        require: true,
    },
    
});

const NewsLetterSchema = mongoose.model('Noticias', DataSchema);
module.exports = NewsLetterSchema;