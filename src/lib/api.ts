const API_URLS = {
  AUTH: process.env.NEXT_PUBLIC_AUTH_SERVICE_URL,
  AI_PLANNER: process.env.NEXT_PUBLIC_AI_PLANNER_URL,
  STUDY_PLAN: process.env.NEXT_PUBLIC_STUDY_PLAN_URL,
  PROGRESS: process.env.NEXT_PUBLIC_PROGRESS_URL,
};

export const getAuthToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

export const setAuthToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
  }
};

export const removeAuthToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
  }
};

export { API_URLS };