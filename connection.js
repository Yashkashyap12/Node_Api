const mongoose = require("mongoose");

// Connection
async function connectMongodb(url) {
  mongoose;
  return mongoose.connect(url);
}

module.exports = {connectMongodb};