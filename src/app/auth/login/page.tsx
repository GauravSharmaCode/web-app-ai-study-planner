'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '@/src/components/forms/LoginForm';
import { authService } from '@/src/features/auth/services/authService';
import { useAuth } from '@/src/features/auth/hooks/useAuth';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (data: { email: string; password: string }) => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await authService.login(data);
      login(response.token);
      router.push('/dashboard');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Login here
          </h1>
          <p className="text-gray-500 mt-2">
            Planning your future is just a click away
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <LoginForm onSubmit={handleLogin} isLoading={isLoading} />

        <div className="flex justify-between items-center mt-6 text-sm">
          <Link href="/auth/register" className="text-blue-600 hover:underline">
            Don't have an account? Register
          </Link>
        </div>
      </div>
    </div>
  );
}