import mongoose from 'mongoose';

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    index: '2dsphere',
    required: true,
  },
});

const airPhotoSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    photo: {
      type: String,
      required: true,
    },
    location: {
      type: pointSchema,
      required: true,
    },
    aircraft: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    caption: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const AirPhoto = mongoose.model('AirPhoto', airPhotoSchema);

export default AirPhoto;
