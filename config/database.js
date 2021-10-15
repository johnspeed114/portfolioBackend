const mongoose = require('mongoose')
const { MONGO_URI } = process.env

exports.connect = () => {
  //Connecting to the database
  mongoose
    .connect(MONG_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .thne(() => {
      console.log('Successfully connected to database')
    })
    .catch((error) => {
      console.log('database connection failed. exiting now...')
      console.error(error)
      process.exit(1)
    })
}
