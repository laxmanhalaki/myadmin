import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
	},
	password: {
		required: true,
		type: String,
	},
	mobile_no: {
		type: String,
	},
	profile_pic: {
		type: String,
	},
}); 
const User= new mongoose.model('USer',userSchema);
export default User;