import express from "express";

const server = express();

server.use(express.static("dist"));
server.use("/", (req,res) =>{
    res.render("index",{
        content: "EJS is real"
    });
});
server.set("view engine", "ejs")


server.listen("3000","localhost",()=>{
    console.info("Express server is listening at http://localhost:3000");
});