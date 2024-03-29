const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  bank_accounts: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  accounts: {
    bank: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    district: {
      type: String,
    },
    state: {
      type: String,
      required: true,
    },
    bank_code: {
      type: String,
      required: true,
    },
    weather: {
      temp: {
        type: Number,
        required: true,
      },
      humidity: {
        type: Number,
        required: true,
      },
    },
  },
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;