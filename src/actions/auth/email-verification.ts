'use server'

import { TokensService } from "@/services/tokens-service"
import { UserService } from "@/services/user-service"

const verifyEmail = async (token: string) => {

    // Check if the provided token exists
    const existingToken = await TokensService.getVerificationToken(token)

    if (!existingToken) {
        return {error: 'The provided token is invalid or does not exist'}
    }

    // Check if the provided token has expired
    const tokenHasExpired = new Date(existingToken.expires) < new Date()

    if (tokenHasExpired) {
        return {error: 'The provided token has expired'}
    }

    // Check if the provided token is paired with an existing user
    const existingUser = await UserService.getUserByEmail(existingToken.email)
    
    if (!existingUser) {
        return {error: 'The provided token does not belong to an active user'}
    }

    // Finally verify the user email
    await UserService.verifyUserEmail(existingUser.id, existingToken.email, existingToken.id)

    return {success: 'Email verified'}
}

export {
    verifyEmail
}