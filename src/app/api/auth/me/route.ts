import { currentUser } from "@/lib/auth-user";
import { TokensService } from "@/services/tokens-service";
import { UserService } from "@/services/user-service";
import { NextApiRequest } from "next";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {

    const user = await currentUser(req)

    if (!user) {
        return new NextResponse(null, { status: 404 })
    }

    return new NextResponse(JSON.stringify(user), { status: 200 })
}