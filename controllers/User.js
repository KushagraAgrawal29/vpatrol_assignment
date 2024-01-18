const UserModel = require("../models/User");
const getBankDetails = require("../controllers/Details")
const getWeatherDetails = require("../controllers/Details");

const createUserOrUpdate = async (req, res) => {
  try {
    const userData = req.body.data;
    const { user_id, user_name, bank_accounts, id, name, accounts } = userData;

    // Fetch bank details using IFSC code
    const bankCode = accounts.bank_code;
    const bankDetails = await getBankDetails(bankCode);

    // Fetch weather details using city name
    const cityName = accounts.city;
    const weatherDetails = await getWeatherDetails(cityName);

    const user = new UserModel({
      user_id,
      user_name,
      bank_accounts,
      id,
      name,
      accounts: {
        ...accounts,
        weather: {
          temp: weatherDetails.main.temp,
          humidity: weatherDetails.main.humidity,
        },
      },
    });

    await user.save();
    res.status(201).json({ message: "User created/updated successfully", user });
  } 
  catch (error) 
  {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createUserOrUpdate };
