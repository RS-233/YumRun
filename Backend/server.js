import express from "express"
import cors from "cors"
import foodRouter from "./routes/foodRoute.js"
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"



//app config
const app = express()
const port = process.env.PORT || 4000;
const corsOptions = {
    origin: [`https://yumrun-z9ry.onrender.com`, `https://yumrun-admin-5rfr.onrender.com`],
    optionsSuccessStatus: 200,
};
//middleware
app.use(express.json())
app.use(cors(corsOptions))

// DB Connection
connectDB();

// api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)





//mongodb+srv://rs3501194:F8RQqBZnQvwwqICr@cluster0.2ezynrf.mongodb.net/?

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
