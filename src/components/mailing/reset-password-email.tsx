import * as React from 'react';

interface ResetPasswordEmailTemplateProps {
  userName: string;
  resetPasswordLink: string;
}

export const ResetPasswordEmailTemplate: React.FC<Readonly<ResetPasswordEmailTemplateProps>> = ({
  userName,
  resetPasswordLink
}) => (
  <div className='font-semibold'>
    <h1>Hello, {userName}!</h1>
    <p>Please click in the button below to reset your password</p>
    <a href={resetPasswordLink}>
      <button className='btn bg-slate-200 rounded-md '>Reset password</button>
    </a>
  </div>
);
