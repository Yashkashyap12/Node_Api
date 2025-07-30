const express = require("express");
const {connectMongodb} = require('./connection')

const {logReqRes} = require('./middlewares')


// Routes...
const userRouter = require('./routes/user')

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

// Connection...
connectMongodb("mongodb://localhost:27017/testing-app")
.then(() => console.log('Mongodb Connection Succefull...'))

// Middlewares
app.use(logReqRes('log.txt'));

// Routes...
app.use('/api/user',userRouter);

app.listen(PORT, () => {
  console.log(`Server running... at PORT:${PORT}`);
});
