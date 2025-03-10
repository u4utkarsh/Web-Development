import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    const d = new Date(" November 19,2023 19:47:00");
    let day = d.getDay();

    let type = " weekday, ";
    let adv = "it's time to work hard!";

    if ( day===0 || day===1 ){
        type = " weekend, ";
        adv = "it's time to have some fun!";
    }

    res.render("index.ejs", {
        dayType : type,
        advice: adv
    } );
});
app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});