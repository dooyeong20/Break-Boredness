import axios from 'axios';

export const getRandomActivity = async (type = 'random') => {
  try {
    const { data } = await axios(
      `${process.env.END_POINT}${type !== 'random' ? `?type=${type}` : ''}`
    );

    return data;
  } catch (error) {
    throw new Error('Network error:' + error.message);
  }
};
