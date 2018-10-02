var express = require("express"),
    app = express(),
    PORT = 5000 || process.env.PORT;

app.set("view engine","ejs");
app.use(express.static("assets"));

app.get("/", function(req, res){
       res.render("index.ejs");
});

app.listen(PORT, function(err){
    if(err)
        console.log(err);
    else
        console.log("Server started at port : "+PORT+"... ");
});

