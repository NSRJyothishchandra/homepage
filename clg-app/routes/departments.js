var express = require("express");
var depRouter = express.Router();
var fs = require("fs")


depRouter.use(express.static(__dirname + "/college"))
depRouter.get("/CSE",(req,res,next)=>{
     fs.createReadStream(__dirname + "/college/cse.html").pipe(res)
})

module.exports = depRouter