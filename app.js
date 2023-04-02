const express = require ("express");
const path = require ("path");

const app = express();

app.use(express.static("public"));
app.get("/",(req, res, next)=>{
    const filePath = path.join(__dirname, "views", "index.html");
    console.log(`Sending file: ${filePath}`)
    res.sendFile(filePath)
});

app.get("/about",(req, res, next)=>{
    res.sendFile(path.join(__dirname, "views", "about.html"))
})

app.get("/works",(req, res, next)=>{
    res.sendFile(path.join(__dirname, "views", "works.html"))
})

const port = 3000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});