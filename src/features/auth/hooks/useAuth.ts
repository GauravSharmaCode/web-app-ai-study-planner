'use client';

import { useState, useEffect } from 'react';
import { getAuthToken, setAuthToken, removeAuthToken } from '@/src/lib/api';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = getAuthToken();
    setIsAuthenticated(!!token);
    setIsLoading(false);
  }, []);

  const login = (token: string) => {
    setAuthToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    removeAuthToken();
    setIsAuthenticated(false);
  };

  return { isAuthenticated, isLoading, login, logout };
};