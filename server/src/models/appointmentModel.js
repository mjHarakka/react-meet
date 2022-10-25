const mongoose = require('mongoose')

const appointmentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    appointmentDate: {
      type: Date,
    },
    startingTime: {
      type: String,
      required: [true, 'Please add starting time'],
    },
    endingTime: {
      type: String,
      required: [true, 'Please add ending time'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Appointment', appointmentSchema)
