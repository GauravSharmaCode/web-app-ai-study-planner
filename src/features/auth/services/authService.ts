import { API_URLS } from '@/src/lib/api';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface AuthResponse {
  userId: string;
  token: string;
}

export const authService = {
  async login(data: LoginRequest): Promise<AuthResponse> {
    // Mock login for frontend development
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (data.email === 'test@example.com' && data.password === 'password') {
      return {
        userId: 'mock-user-id',
        token: 'mock-jwt-token'
      };
    }
    
    throw new Error('Invalid credentials');
  },

  async register(data: RegisterRequest): Promise<AuthResponse> {
    // Mock registration for frontend development
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      userId: 'mock-user-id',
      token: 'mock-jwt-token'
    };
  }
};