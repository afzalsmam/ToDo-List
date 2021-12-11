const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+ "/date.js");

const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


var items = ["exercise", "shower", "eat breakfast"];
var workItems = [];

app.get("/", function(req, res){
  let day = date.getDate();
  res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res){
  var item = req.body.newItem;

  if(req.body.button === "work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }

});

app.post('/del', function(req,res){
  if (req.body.item){
  items.push(req.body.item);
}
else if(req.body.remove) {

  items.splice(req.body.remove,1);

}
  res.redirect('/');
});


app.get("/work", function(req, res){
  res.render("list", {listTitle: "work", newListItems: workItems})
});


app.get("/about", function(req, res){
  res.render("about")
});

app.listen(process.env.PORT || 3000, function(){
  console.log("The server has started running on port 3000.");
});
