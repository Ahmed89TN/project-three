const router = require("express").Router();
const User = require("../models/User.js");

// creates new user document
router.post("/api/User", function(req, res) {
  // as long as req.body matches what the model expects, this should insert into the database
  
  User.create(req.body)
  .then((user) => {
    if (user) {
      var token = "t" + Math.random();
      user.token = token;

      res.cookie("token", token, { expires: new Date(Date.now() + 999999999) });
      req.session.user = user;
      
     
      res.json(req.session);
    }
    else {
      res.send(null);
    }
  });
});

// populates followers for documents
router.get("/api/Users", function(req, res) {
  User.find({}).populate("followers")
  .then((docs) => {
    res.json(docs);
  });
});


// find users with specific country 
router.get("/Country/:name", function(req, res) {
  User.find({country: req.params.name}).populate("followers")
  .then((docs) => {
    res.json(docs);
  });
});

// find user with id
router.get("/api/User/:id", function(req, res) {
  console.log("working");
  User.findOne({_id: req.params.id}).populate("followers")
  .then((docs) => {
    res.json(docs);
  });
});

// find one profile by id
router.get("/fprofile/:id", function(req, res) {
  User.findOne({
    _id: req.params.id
  })
  .then((docs) => {
    res.json(docs)
  });
});


// to follow user 
router.put("/api/User/:id/:following", function(req, res) {
  // as long as req.body matches what the model expects, this should insert into the database
  User.findByIdAndUpdate(
    {_id: req.params.id},
    {$push: { following: req.params.following}})
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {
    // if not, we can at least catch the errr
    res.json(err);
  });
});
// to unfollow user 
router.put("/api/UserUnfollow/:id/:following", function(req, res) {

  User.findByIdAndUpdate(
    {_id: req.params.id},
    {$pull: { following: req.params.following}})
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {
    // if not, we can at least catch the errr
    res.json(err);
  });
});

// for finding all docs in following array 
router.get("/Feed/:id", function(req, res) {
  User.find({
    _id: req.params.id
  }).populate("following")
  .then((docs) => {
    res.json(docs);
  });
});

var loggedIn = false;
router.get("/auth", function (req, res) {
  // send back "session" status
  console.log(req.session.user);
  res.json(req.session.user);
});

router.get("/profile", function (req, res) {
  // only users with set session can see this route
  if (req.session.user) {
     
      
    res.json(req.session.user);
  }
  else {
    res.redirect("/");
  }
});
router.get("/current", function (req, res) {
  // only users with set session can see this route
  if (req.session.user) {
     
    res.json(req.session.user);
  }

});
router.get("/logout", function (req, res) {
  console.log(req.session);// clear cookie and session
  res.clearCookie("token");
  req.session.destroy();
  res.json(loggedIn);
   
});

router.post("/login", function (req, res) {
 
  // look for user that matches the posted email and password
  User.findOne(req.body).then((user) => {
    if (user) {
      var token = "t" + Math.random();
      user.token = token;

      res.cookie("token", token, { expires: new Date(Date.now() + 999999999) });
      req.session.user = user;
     
      res.json(req.session.user);
    }
    else {
      res.send(null);
    }
  });
});






module.exports = router;