const express = require('express')
const router = express.Router()
const {
  getAppointments,
  setAppointment,
  deleteAppointment,
} = require('../controllers/appointmentController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getAppointments).post(protect, setAppointment)
router.route('/:id').delete(protect, deleteAppointment)

module.exports = router
