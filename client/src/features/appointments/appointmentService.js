import axios from 'axios'

const API_URL = '/api/appointments/'

const createAppointment = async (appointmentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, appointmentData, config)

  return response.data
}
const appointmentService = {
  createAppointment
}
export default appointmentService
