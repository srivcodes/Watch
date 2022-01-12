import axios from 'axios/index';

export function setupAuthExceptionHandler(logoutUser, navigate) {
  const UNAUTHORIZED = 401;
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === UNAUTHORIZED) {
        logoutUser();
        navigate('login');
      }
      return Promise.reject(error);
    }
  );
}
