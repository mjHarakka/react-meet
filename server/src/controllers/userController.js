const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async')
const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Register user' })
})

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Login user' })
})

const getMe = asyncHandler(async (req, res) => {
  res.json({ message: 'Get user' })
})

module.exports = {
  registerUser,
  loginUser,
  getMe,
}
