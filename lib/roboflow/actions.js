import axios from 'axios';

/**
 * Uses the roboflow API to determine how many doritos are in an image
 * @param {ArrayBuffer} dImageBuffer
 */
export const getDoritoCount = async (dImageBuffer) => {
  const buffer = Buffer.from(dImageBuffer);
  const base64 = buffer.toString('base64');
  // Send request to Roboflow
  try {
    const { data } = await axios({
      method: 'POST',
      url: process.env.NEXT_JS_PUBLIC_API_ROBOFLOW_MODEL_URL,
      params: {
        api_key: process.env.ROBOFLOW_API_KEY,
      },
      data: base64,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return data;
  } catch (error) {
    console.log('Error communicating with Roboflow', error);
    return {};
  }
};
