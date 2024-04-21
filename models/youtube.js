const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  id: String,
  title: String,
  duration: String,
  channelName: String,
  channelUrl: String,
  date: Date,
  url: String,
  viewCount: Number,
  fromYTUrl: String,
  type: String,
  thumbnailUrl: String,
  order: Number,
  channelDescription: String,
  channelJoinedDate: Date,
  channelDescriptionLinks: [{
    text: String,
    url: String
  }],
  channelLocation: String,
  channelAvatarUrl: String,
  channelBannerUrl: String,
  channelTotalVideos: Number,
  channelTotalViews: Number,
  numberOfSubscribers: Number,
  isChannelVerified: Boolean,
  channelId: String,
  inputChannelUrl: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  likes: Number,
  commentsCount: Number,
  descriptionLinks: [{
    text: String,
    url: String
  }],
  isMonetized: Boolean,
  subtitles: [{ language: String, url: String }],
  text: String
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Video', videoSchema);
