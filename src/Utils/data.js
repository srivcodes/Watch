import axios from 'axios';

export const categories = [
  {
    label: 'All Videos',
    id: 'all_videos'
  },
  {
    label: 'Basics',
    id: 'basics'
  },
  {
    label: 'Indian Textiles',
    id: 'indian_textiles'
  },
  {
    label: 'Styling',
    id: 'styling'
  },
  {
    label: 'Handloom',
    id: 'handloom'
  },
  {
    label: 'Brands',
    id: 'brands'
  },
  {
    label: 'Others',
    id: 'others'
  },
  {
    label: 'Popular',
    id: 'popular'
  }
];


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

export const WATCH_API = 'https://backend-watch.herokuapp.com';
// export const WATCH_API = 'http://localhost:8000';
