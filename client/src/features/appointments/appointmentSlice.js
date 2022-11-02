import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import appointmentService from './appointmentService'

const initialState = {
  appointments: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const createAppointment = createAsyncThunk(
  'appointments/create',
  async (appointmentData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await appointmentService.createAppointment(appointmentData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const appointmentSlice  = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAppointment.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.appointments.push(action.payload)
      })
      .addCase(createAppointment.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = appointmentSlice.actions
export default appointmentSlice.reducer