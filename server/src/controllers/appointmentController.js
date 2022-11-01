const asyncHandler = require('express-async-handler')

const Appointment = require('../models/appointmentModel')

const getAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find({ user: req.user.id })

  res.status(200).json(appointments)
})

const setAppointment = asyncHandler(async (req, res) => {

  const appointment = await Appointment.create({
    title: req.body.title,
    date: req.body.date,
    startingTime: req.body.startingTime,
    endingTime: req.body.endingTime,
  })

  res.status(200).json({ message: 'set appointment' })
})

const deleteAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id)

  if (!appointment) {
    res.status(400)
    throw new Error('Appointment not found')
  }

  await appointment.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getAppointments,
  setAppointment,
  deleteAppointment,
}
