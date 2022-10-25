const express = require('express')
const router = express.Router()
const {
  getAppointments,
  setAppointment,
  deleteAppointment,
} = require('../controllers/appointmentController')

router.route('/').get(getAppointments).post(setAppointment)
router.route('/:id').delete(deleteAppointment)

module.exports = router
