import { db } from "@/lib/db"

const getAccountByUserId = async (userId: string) => {
    try {
        const account = await db.account.findFirst({ where: { userId } })
        return account
    } catch (error) {
        return null
    }
}

export const AccountsService = {
    getAccountByUserId
}