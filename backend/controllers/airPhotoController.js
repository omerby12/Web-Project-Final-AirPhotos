import asyncHandler from 'express-async-handler';
import AirPhoto from '../models/airPhotoModel.js';

// @desc Fetch air-photos by keyword and page
// @route GET /api/airphotos
// @access Public
const getAirPhotos = asyncHandler(async (req, res) => {
  const pageSize = 15;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
        aircraft: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};
  const count = await AirPhoto.countDocuments({ ...keyword });
  const airPhotos = await AirPhoto.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ airPhotos, page, pages: Math.ceil(count / pageSize) });
});

// @desc Fetch single air-photo
// @route GET /api/airphotos/:id
// @access Public
const getAirPhotoById = asyncHandler(async (req, res) => {
  const airPhoto = await AirPhoto.findById(req.params.id);
  if (airPhoto) {
    res.json(airPhoto);
  } else {
    res.status(404);
    throw new Error('Air Photo not found');
  }
});

// @desc    Get logged in user air photos
// @route   GET /api/airphotos/myairphotos
// @access  Private
const getMyAirPhotos = asyncHandler(async (req, res) => {
  const airPhotos = await AirPhoto.find({ user: req.user._id });
  res.json(airPhotos);
});

// @desc    Create an air-photo
// @route   POST /api/airphotos
// @access  Private
const createAirPhoto = asyncHandler(async (req, res) => {
  const { location, photo, aircraft, date, caption } = req.body;
  try {
    const airPhoto = await AirPhoto.create({
      user: req.user._id,
      photo,
      location,
      aircraft,
      date,
      caption,
    });
    res.status(201).json(airPhoto);
  } catch (err) {
    throw new Error(
      'All fields are required except caption, you need to enter location - click on the map for setting location'
    );
  }
});

export { getAirPhotos, getAirPhotoById, getMyAirPhotos, createAirPhoto };
