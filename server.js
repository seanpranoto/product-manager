const express =require("express");
const cors=require("cors");
const app=express();

app.use(cors(), express.json(), express.urlencoded({extended:true}));

require("./server/config/mongoose.config");

require("./server/routes/product.routes")(app);

app.listen(8000, ()=>console.log("The server is running on port 8000!"));

