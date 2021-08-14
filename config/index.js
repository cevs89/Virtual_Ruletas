'use strict';

module.exports = {
    PORT: process.env.PORT || 6500,
    DB: process.env.DB || 'mongodb://localhost:27017/ruleta?ssl=true',
    SECRET_TOKEN	: '$2a$12$hii2ldaOwCktin0LNxNAO.'
};
