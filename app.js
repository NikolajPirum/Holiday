const express = require("express");
const app = express();



app.get("/holiday",(req,res) => {
    res.sendFile(__dirname + "/static/index.html");
});
       
    const currentTime = new Date().toLocaleTimeString("un-ek")
    console.log(currentTime)  
    const nodeJsObj = { name: "Braingymnastics with with Anders", date : new Date("2025-09-25")};
    console.log(nodeJsObj.date.getTime())
    const now = new Date().getTime();
    console.log(now)


const PORT = 8080;
app.listen(PORT,() =>
console.log('Server is running on port',PORT)
)