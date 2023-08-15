const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoute = require ('./routes/auth');
const userRoute = require('./routes/users');
const placeRoute = require('./routes/places');
const bookings = require('./routes/bookings');
const cookieParser = require('cookie-parser');


require('dotenv').config({path: './config/config.env'});
const app = express();


PORT = process.env.PORT;

//connect database
connectDB();

app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
  }));
  
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


//mount routers
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/places', placeRoute)
app.use('/api/v1/bookings', bookings)

app.get('/test', (req,res)=>{
    res.status(200).json({success:true})
})


app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT} ....`);

})