const express = require("express");
const db = require("./config/connection");
const { userThought, Thoughts, User, Reaction } = require("./models");


const app = express()
const PORT = 3001;

// need this middleware else doesn't render body during update
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post("/", (req, res) => {
  const newThought = new userThought(
    { 
      user: req.params.user, 
      thoughts: req.params.thoughts 
   });
   newThought.save();
  if (newThought) {
    res.status(200).json(newThought);
  } else {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});

app.post("/:_id", (req, res) => {
  console.log(req.body)
  userThought.findOneAndUpdate(
    //targeting the desired id
    {_id:req.params._id},
    //items just disappear and nothing rendering
    //req.body targets the body inside insomnia
    req.body,
    //needs this to render updated record
    {new:true},
    (err, result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ message: 'something went wrong' });
      }
    }
  )
})


app.get("/Thoughts", (req, res)=>{
  Thoughts.find({})
  .then(data=>res.status(200).json(data))
  .catch(err=>res.status(500).json(err))
})


app.get("/User", (req, res)=>{
  User.find({})
  .then(data=>res.status(200).json(data))
  .catch(err=>res.status(500).json(err))
})


app.delete("/:_id", (req, res) => {
  userThought.findOneAndDelete({ _id: req.params._id}, (err, result) => {
    if (result) {
      res.status(200).json(result);
      console.log(`Deleted: ${result}`);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });
});

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });