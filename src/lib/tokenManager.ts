import * as jose from 'jose'
import { JWT_SECRET } from './constants';

const secret = new TextEncoder().encode(JWT_SECRET)

export const generateToken = async (userId: string) => {
    // const expiresIn = '365 days' // Token will expire in 15 minutes (PROD)
    const expiresIn = 60; // Token will expire in 60 seconds (DEV)

    try {
        const alg = 'HS256'

        // Generate token using the secret key
        const jwt = await new jose.SignJWT({userId, exp: 60})
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime('2h')
        .sign(secret)
     
        return jwt
    } catch (error) {
        console.log(error);
        return null;
    }
};


// middleware/verifyToken.js
const verifyToken = async (bearerToken: string | null) => {
    try {
    
        // If the bearerToken is not specified in the authorization header:
        if (!bearerToken) {
            throw new Error('invalid token');
        }

        // Check if the token is not valid
        const token = bearerToken.split(' ')[1]; // Separate the token from the "Bearer" word
        const { payload, protectedHeader } = await jose.jwtVerify(token, secret)

        console.log(payload);
        
        // Call the actual API route handler
        return payload
    } catch (error) {
        console.log(error);
        return false
    }
};

export default verifyToken;
