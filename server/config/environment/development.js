/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {
    // MongoDB connection options
    mongo: {
        uri: process.env.MONGODB_URI || 'mongodb://localhost/parkchat	'
    },

    // Seed database on startup
    seedDB: false,
};
