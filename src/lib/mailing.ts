import { VerificationEmailTemplate } from '@/components/mailing/email-verification';
import { ResetPasswordEmailTemplate } from '@/components/mailing/reset-password-email';
import { twoFactorAuthTemplate } from '@/components/mailing/two-factor-auth';
import { Resend } from 'resend';
import { APP_DOMAIN } from './constants';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendVerificationEmail = async (email: string, token: string) => {
    const verificationLink = `${APP_DOMAIN}/auth/email-verification?token=${token}`

    const { data, error } = await resend.emails.send({
        from: 'Vectrals <onboarding@resend.dev>',
        to: [email],
        subject: 'Welcome! ',
        text: verificationLink,
        react: VerificationEmailTemplate({ userName: 'John', verificationLink }),
    });
}

const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetPasswordLink = `${APP_DOMAIN}/auth/password/reset?token=${token}`

    const { data, error } = await resend.emails.send({
        from: 'Vectrals <onboarding@resend.dev>',
        to: [email],
        subject: 'Reset your password',
        text: resetPasswordLink,
        react: ResetPasswordEmailTemplate({ userName: 'John', resetPasswordLink }),
    });
}

const send2FAEmail = async (email: string, twoFACode: string) => {
    const twoFactorAuthenticationCode = twoFACode
    
    const { data, error } = await resend.emails.send({
        from: 'Vectrals <onboarding@resend.dev>',
        to: [email],
        subject: `Your code is ${twoFACode}`,
        text: twoFactorAuthenticationCode,
        react: twoFactorAuthTemplate({ userName: 'John', twoFactorAuthenticationCode }),
    });
}

export {
    sendVerificationEmail,
    sendPasswordResetEmail,
    send2FAEmail
}