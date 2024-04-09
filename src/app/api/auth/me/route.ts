import { TokensService } from "@/services/tokens-service";
import { UserService } from "@/services/user-service";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {

    const headersList = headers()
    const bearerToken = headersList.get('authorization')
    const decoded = await TokensService.verifyAuthToken(bearerToken)

    if (!decoded) {
        return new NextResponse(null, { status: 404 })
    }

    const user = await UserService.getUserById(decoded.userId as string)
    
    return new NextResponse(JSON.stringify(user), { status: 200 })
}