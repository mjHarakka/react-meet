const mongoose = require('mongoose')

const appointmentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    date: {
      type: Date,
      required: [true, 'Date missing'],
    },
    title: {
      type: String,
      required: [true, 'Title missing'],
    },
    startingTime: {
      type: String,
      required: [true, 'Starting time missing'],
    },
    endingTime: {
      type: String,
      required: [true, 'Ending time missing'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Appointment', appointmentSchema)
