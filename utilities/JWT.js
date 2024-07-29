import jwt from 'jsonwebtoken';
const CreateToken = async (result) => {
	console.log(this);
	try {
		return jwt.sign(
			{
				username: result.username,
				email: result.email,
				password: result.password,
			},
			'mysectretkey',
			{ expiresIn: '30d' }
		);
	} catch (error) {
		console.log(error);
	}
};
const VerifyToken= async(token)=>{
	try {
		return jwt.verify(token, 'mysectretkey');
	} catch (error) {
		return null
	}
	
}
export { CreateToken, VerifyToken };
