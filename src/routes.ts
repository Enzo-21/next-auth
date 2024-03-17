// ================================================================== //
// ======================== 🟨 IMPORTANT 🟨 ========================= //
// IN THIS FILE PRIVATE ROUTES ARE NOT DEFINED
// ALL ROUTES CREATED ARE PRIVATE BY DEFAULT
// IF YOU NEED A ROUTE TO BE PUBLIC YOU NEED TO ADD IT TO THE PUBLICROUTES ARRAY
// AUTH ROUTES ARE ACCESSIBLE ONLY BY LOGGED OUT USERS
// ================================================================== //
// ================================================================== //

/**  
 * An array of routes that are available to the public.
 * These routes do not require the user to be authenticated
 * @type {string[]} 
**/
const publicRoutes: string[] = [
    '/',
    '/auth/email-verification'
]


/**  
 * An array of routes used to authenticate users.
 * These routes are only available for logged out users.
 * @type {string[]} 
**/
const authRoutes: string[] = [
    '/auth/login',
    '/auth/register',
    '/auth/error',
    '/auth/password/forgot',
    '/auth/password/reset'
]

/**  
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication prefix
 * @type {string} 
**/
const apiAuthPrefix: string = '/api/auth'

/**  
 * The default redirect path after loggng in the app
 * @type {string} 
**/
const defaultLoginRedirect: string = '/settings'

export {
    publicRoutes,
    authRoutes,
    apiAuthPrefix,
    defaultLoginRedirect
}