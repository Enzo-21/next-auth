export const UserRoles = {
    ADMIN: 'ADMIN',
    USER: 'USER'
}

export const APP_DOMAIN = process.env.NEXT_PUBLIC_APP_URL
export const MAILING_DOMAIN = process.env.MAILING_DOMAIN
export const JWT_SECRET = process.env.NEXT_PUBLIC_MOBILE_AUTH_SECRET
export const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY as string


export const APP_LOGO = 'https://www.vectrals.com/_next/image?url=%2Ficon-192x192.png&w=48&q=75'