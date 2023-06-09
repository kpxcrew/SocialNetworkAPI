const { Thought, User } = require("../models");

module.exports = {

  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "That ID has no thought" })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
  },

  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
       return User.findOneAndUpdate(
          { username: thought.username },
          {
            $push: {
              thoughts: thought._id,
            },
          },
          {
            new: true,
          }
        );

    
      }).then(user => {
        !user 
        ?res.status(404).json("That ID has no user.")
        :res.json(user)
      }) 

      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  deleteThought(req, res) {
    Thought.findOneAndDelete({_id:req.params.thoughtId})
      .then((thought) => {
       return User.findOneAndUpdate(
          { username: thought.username },
          {
            $pull: {
              thoughts: thought._id,
            },
          },
          {
            new: true,
          }
        );

    
      }).then(user => {
        !user 
        ?res.status(404).json("That ID has no user.")
        :res.json(user)
      }) 

      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "That thought has no ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: {reactionId: req.params.reactionId} } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'That user has no ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $push: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'That user has no ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};

