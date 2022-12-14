import axios from 'axios'
import { toast } from 'react-toastify'

const API_URL = '/api/appointments/'

const createAppointment = async (appointmentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios
    .post(API_URL, appointmentData, config)
    .catch((error) => {
      console.log(error)
      toast(error.response.data.error)
    })

  return response.data
}

const getAppointments = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config).catch((error) => {
    toast(error.response.data.error)
  })

  return response.data
}

const appointmentService = {
  createAppointment,
  getAppointments,
}

export default appointmentService
