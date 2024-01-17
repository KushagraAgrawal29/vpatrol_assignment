import mongoose, { Schema, Document } from "mongoose";

interface Weather {
  temp: number;
  humidity: number;
}

interface Accounts extends Document {
  bank: string;
  branch: string;
  address: string;
  city: string;
  district: string;
  state: string;
  bank_code: string;
  weather: Weather;
}

const AccountsSchema = new Schema<Accounts>({
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
    required: true,
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
});

interface UserData extends Document {
  user_id: number;
  user_name: string;
  bank_accounts: string[];
  id: number;
  name: string;
  accounts: Accounts;
}

const UserSchema = new Schema<UserData>({
  user_id: {
    type: Number,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  bank_accounts: [
    {
      type: String,
      required: true,
    },
  ],
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  accounts: {
    type: AccountsSchema,
    required: true,
  },
});

const UserModel = mongoose.model<UserData>("User", UserSchema);

export { UserModel };
