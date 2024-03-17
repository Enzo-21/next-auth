import * as React from 'react';

interface twoFactorAuthTemplateProps {
  userName: string;
  twoFactorAuthenticationCode: string;
}

export const twoFactorAuthTemplate: React.FC<Readonly<twoFactorAuthTemplateProps>> = ({
  userName,
  twoFactorAuthenticationCode
}) => (
  <div className='font-semibold'>
    <h1>Glad to see you again, {userName}!</h1>
    <p>This is your 2FA code</p>
   <p><strong>{twoFactorAuthenticationCode}</strong></p>
  </div>
);
