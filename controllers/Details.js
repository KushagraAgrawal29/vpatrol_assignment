const mongoose = require('mongoose');
const axios = require('axios');

const getBankDetails = async (ifscCode) => {
    try {
      const response = await axios.get(`https://ifsc.razorpay.com/${ifscCode}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching bank details:', error.message);
      throw error;
    }
  };

  const getWeatherDetails = async (city) => {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY; // Replace with your API key
    const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}`;
  
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching weather details:', error.message);
      throw error;
    }
  };

module.exports = { getBankDetails,getWeatherDetails };
  