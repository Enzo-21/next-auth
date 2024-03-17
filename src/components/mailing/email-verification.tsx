import * as React from 'react';

interface VerificationEmailTemplateProps {
  userName: string;
  verificationLink: string;
}

export const VerificationEmailTemplate: React.FC<Readonly<VerificationEmailTemplateProps>> = ({
  userName,
  verificationLink
}) => (
  <div className='font-semibold'>
    <h1>Welcome on board, {userName}!</h1>
    <p>Please click in the button below to verify your account</p>
    <a href={verificationLink}>
      <button className='btn bg-slate-200 rounded-md '>Confirm email</button>
    </a>
  </div>
);
