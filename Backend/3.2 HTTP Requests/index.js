import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello, World !");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>Hey ! I am Utkarsh</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Email:- utkarsh@gmail.com</p>");
});

app.listen(port, () =>{
    console.log(`Server started on port ${port}.`);
});