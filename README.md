# Next Auth Example

#### This is an open source repo for starting an app with authentication flow already set up. 

`Typescript, React.js, Next.js 15, Prisma, MongoDB, Shadcn, Tailwind, Next-auth, Resend, Zod and more.`

## Getting Started

1 - install all dependencies:

```bash
npm run dev

```

2 - Set environment variables: 
    
    Create a .env file with the variables defined in .env-example and complete them with your own values.

3 - Configure your OAuth providers:

    Make sure you use 'YOUR_APP_DOMAIN/api/auth/callback/YOUR_PROVIDER' for callback urls. Eg: http://localhost:3000/api/auth/callback/google

4 - Set up prisma by running:

```bash
npx prisma generate && npx prisma db push

```

5 - Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

## Contributing

Contributions are always welcome! 

## Authors

- [@Enzo-21](https://github.com/Enzo-21)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)