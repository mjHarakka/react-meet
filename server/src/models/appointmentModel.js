const mongoose = require('mongoose')

const appointmentSchema = mongoose.Schema(
  {
    startingTime: {
      type: Date,
      required: [true, 'Please add starting time'],
    },
    endingTime: {
      type: Date,
      required: [true, 'Please add ending time'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Appointment', appointmentSchema)
