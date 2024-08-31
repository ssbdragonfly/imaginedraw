import axios from 'axios';

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;
const BASE_URL = 'https://api.pexels.com/v1';

const pexelsApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: PEXELS_API_KEY,
  },
});

export const searchImages = async (query, perPage = 10) => {
  try {
    const response = await pexelsApi.get('/search', {
      params: {
        query,
        per_page: perPage,
      },
    });
    return response.data.photos;
  } catch (error) {
    console.error('Error fetching images from Pexels:', error);
    return [];
  }
};
