import express from 'express';
const router = express.Router();
import {
  getAirPhotos,
  getAirPhotoById,
  getMyAirPhotos,
  createAirPhoto,
} from '../controllers/airPhotoController.js';

import { protect } from '../middleware/authMiddleware.js';

router.route('/').get(getAirPhotos).post(protect, createAirPhoto);
router.route('/myairphotos').get(protect, getMyAirPhotos);
router.route('/:id').get(getAirPhotoById);

export default router;
