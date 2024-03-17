import { db } from "@/lib/db";
import { v4 as uuidv4 } from "uuid";
import bcrypt from 'bcryptjs'

// ====================================================================== //
// EMAIL VERIFICATION TOKENS: 
// ====================================================================== //

const generateVerificationToken = async (email: string) => {
    try {
        const token = uuidv4()
        const expires = new Date(new Date().getTime() + 3600 * 1000) // The token will expire in 1 hour

        // Check if there's already a token that has been sent to this email:
        const existingToken = await getVerificationTokenByEmail(email)

        // If a token exists delete it
        if (existingToken) {
            await db.verificationToken.delete({ where: { id: existingToken.id } })
        }

        // Save the token in the db
        const verificationToken = await db.verificationToken.create({
            data: { email, token, expires }
        })
        
        return verificationToken

    } catch (error) {
        
        return null
    }
}

const getVerificationTokenByEmail = async (email: string) => {
    try {
        const verificationToken = await db.verificationToken.findFirst({ where: { email } })
        return verificationToken
    } catch (error) {
        return null
    }
}

const getVerificationToken = async (token: string) => {
    try {
        const verificationToken = await db.verificationToken.findUnique({ where: { token } })
        return verificationToken
    } catch (error) {
        return null
    }
}


// ====================================================================== //
// PASSWORD RESET TOKENS:
// ====================================================================== //

const generatePasswordResetToken = async (email: string) => {
    try {
        const token = uuidv4()
        const expires = new Date(new Date().getTime() + 3600 * 1000) // The token will expire in 1 hour

        // Check if there's already a token that has been sent to this email:
        const existingToken = await getPasswordResetTokenByEmail(email)

        // If a token exists delete it
        if (existingToken) {
            await db.passwordResetToken.delete({ where: { id: existingToken.id } })
        }

        // Save the token in the db
        const passwordResetToken = await db.passwordResetToken.create({
            data: { email, token, expires }
        })
        
        return passwordResetToken

    } catch (error) {
        
        return null
    }
}

const getPasswordResetTokenByEmail = async (email: string) => {
    try {
        const passwordResetToken = await db.passwordResetToken.findFirst({ where: { email } })
        return passwordResetToken
    } catch (error) {
        return null
    }
}

const getPasswordResetToken = async (token: string) => {
    try {
        const passwordResetToken = await db.passwordResetToken.findUnique({ where: { token } })
        return passwordResetToken
    } catch (error) {
        return null
    }
}

// ====================================================================== //
// 2FA TOKENS:
// ====================================================================== //

const generate2FAToken = async (email: string) => {
    try {
        
        const token = `${Math.floor(100000 + Math.random() * 900000)}`
        const expires = new Date(new Date().getTime() + 3600 * 1000) // The token will expire in 1 hour

        // Check if there's already a token that has been sent to this email:
        const existingToken = await get2FATokenByEmail(email)

        // If a token exists delete it
        if (existingToken) {
            await db.twoFactorAuthenticationToken.delete({ where: { id: existingToken.id } })
        }

        // Save the token in the db
        const twoFactorAuthenticationToken = await db.twoFactorAuthenticationToken.create({
            data: { email, token , expires }
        })
        
        return twoFactorAuthenticationToken

    } catch (error) {
        
        return null
    }
}

const get2FATokenByEmail = async (email: string) => {
    try {
        const twoFactorAuthenticationToken = await db.twoFactorAuthenticationToken.findFirst({ where: { email } })
        return twoFactorAuthenticationToken
    } catch (error) {
        return null
    }
}

const get2FAToken = async (token: string) => {
    try {
        const twoFactorAuthenticationToken = await db.twoFactorAuthenticationToken.findUnique({ where: { token } })
        return twoFactorAuthenticationToken
    } catch (error) {
        return null
    }
}

const get2FAConfrimation = async (userId: string) => {
    try {
        const twoFactorAuthenticationConfirmation = await db.twoFAConfirmation.findUnique({ where: { userId } })
        return twoFactorAuthenticationConfirmation
    } catch (error) {
        return null
    }
}



export const TokensService = {
    getVerificationTokenByEmail,
    getVerificationToken,
    generateVerificationToken,
    getPasswordResetTokenByEmail,
    getPasswordResetToken,
    generatePasswordResetToken,
    TwoFactorAuthentication: {
        generate2FAToken,
        get2FAToken,
        get2FATokenByEmail,
        get2FAConfrimation
    }
}