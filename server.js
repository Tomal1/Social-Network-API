const express = require("express");
const db = require("./config/connection");
const { Thoughts, User, Reaction } = require("./models");

const app = express()
const PORT = 3001;

// need this middleware else doesn't render body during update
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/User",(req,res)=>{
  User.create({
    username: req.body.username,
    email: req.body.email,
  })
  .then(data=>res.status(200).json(data))
  .catch(err=>res.status(500).json(err))
})

app.put("/User/:_id", (req,res)=>{
  User.findOneAndUpdate(
    //targeting the desired id
    {_id:req.params._id},
    //items just disappear and nothing rendering
    //req.body targets the body inside insomnia
    req.body,
    //needs this to render updated record
    {new:true},
  )
  .then(data=>res.status(200).json(data))
  .catch(err=>res.status(500).json(err))
})

app.get("/User", (req, res)=>{
  User.find({})
  .then(data=>res.json(data))
  .catch(err=>res.status(500).json(err))
})

app.get("/User/:_id", (req,res)=>{
  User.findOne({
    _id:req.params._id,
  })
  .then(data=>res.status(200).json(data))
  .catch(err=>res.status(500).json(err))
})

app.delete("/User/:_id",(req,res)=>{
  User.deleteOne({
    _id:req.params._id,
  })
  .then(data=>res.status(200).json(data))
  .catch(err=>res.status(500).json(err))
})
////////////////////////


//adding a friend Id to a users record
app.post("/User/:userId/friends/:friendId", (req,res)=>{
  //go into user first and look for userId
  User.findOneAndUpdate(
  {_id: req.params.userId},
  { $addToSet: { friends: req.params.friendId } },
  {new:true})
  .then(data=>res.status(200).json(data))
  .catch(err=>res.status(500).json(err))
})


//removing that friend Id from a user record
app.delete("/User/:userId/friends/:friendId", (req,res)=>{
  User.findOneAndUpdate(
    {_id:req.params.userId},
    { $pull: { friends: req.params.friendId } },
    {new:true}
    )
    .then(data=>res.status(200).json(data))
    .catch(err=>res.status(500).json(err))
})

////////////////////////////////
app.get("/Thoughts", (req, res)=>{
  Thoughts.find({})
  .then(data=>res.status(200).json(data))
  .catch(err=>res.status(500).json(err))
})

app.post("/Thoughts", (req,res)=>{
  Thoughts.create({
    thoughtText: req.body.thoughtText,
    username: req.body.username,
  })
  .then(data=>res.status(200).json(data))
  .catch(err=>res.status(500).json(err))
})

app.put("/Thoughts/:_id", (req,res)=>{
  Thoughts.findOneAndUpdate(
    {_id: req.params._id},
    req.body,
    {new:true})
    .then(data=>res.status(200).json(data))
    .catch(err=>res.status(500).json(err))
})

app.delete("/Thoughts/:_id",(req,res)=>{
  Thoughts.findOneAndDelete({
    _id:req.params._id,
  })
  .then(data=>res.status(200).json(data))
  .catch(err=>res.status(500).json(err))
})

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });