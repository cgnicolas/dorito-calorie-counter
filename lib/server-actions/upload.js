'use server';
import axios from 'axios';
/**
 * Server Action for uploading the image form data to the /api/cc/upload endpoint
 * @param {FormData} base64
 */
export const uploadImage = async (base64Image) => {
  const response = await axios({
    method: 'POST',
    url: process.env.NEXT_JS_PUBLIC_LOCALHOST + '/api/cc/upload',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      image: base64Image,
    },
  });
  if (response.status === 200) {
    return response.data;
  } else {
    return null;
  }
};
