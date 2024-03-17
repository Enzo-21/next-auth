'use server'

import bcrypt from "bcryptjs";
import { z } from "zod";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { UserService } from "@/services/user-service";
import { TokensService } from "@/services/tokens-service";
import { sendVerificationEmail } from "@/lib/mailing";

const register = async (values: z.infer<typeof RegisterSchema>) => {
    
    // Client side validation can easily be bypassed by some attacker. So we validate this on the server
    const validatedFields = RegisterSchema.safeParse(values)

    if (!validatedFields.success) {
        return {error: "Invalid fields"}
    }

    try {
        
    } catch (error) {
        
    }
    const {email, password, name } = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10)

    const existingUser = await UserService.getUserByEmail(email)

    if (existingUser) {
        return {error: "Email already in use"}
    }

    await db.user.create({
        data: {
            name, 
            email,
            password: hashedPassword
        }
    })


    const verificationToken = await TokensService.generateVerificationToken(email)
    
    if (verificationToken) {     
        await sendVerificationEmail(name, verificationToken.email, verificationToken.token)
    } else {
    return {error: "We could not send an email. Please try again"}
    }

    return {success: "We've sent you an email. Please check your inbox"}
}

export {
    register
}