import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema({
  videoFile: {
    type: String, //url
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  thumbnail: {
    type: String, //url
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  duration: {
    type: Number, //url
    required: true,
  },

  views: {
    type: Number,
    default: 0,
  },

  isPublished: {
    type: String,
    default: true,
  },
});

export const Video = mongoose.model("Video", videoSchema);
