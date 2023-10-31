import React from 'react';
import AuthForm from './AuthForm';

const AdminAuth = () => {
  const handleAdminLogin = (data) => {
    // Handle admin login logic
    console.log('Admin login:', data);
    // Add your admin login logic here
  };

  return (
    <div>
      <AuthForm onSubmit={handleAdminLogin} isAdmin={true} allowSignup={false} />
    </div>
  );
};

export default AdminAuth;
