import axios from 'axios';
import {
  convertImageBufferToBase64,
  getCountFromRoboflowResponse,
} from './utils';

/**
 * Sends a Base64 encoded image to roboflow
 * @param {String} dImageBase64
 */
const _sendBase64ToRoboflow = async (dImageBase64) => {
  // Send request to Roboflow
  try {
    const { data } = await axios({
      method: 'POST',
      url: process.env.ROBOFLOW_MODEL_URL,
      params: {
        api_key: process.env.ROBOFLOW_API_KEY,
      },
      data: dImageBase64,
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

export const getDoritoCount = async (base64Image) => {
  const roboflowResponse = await _sendBase64ToRoboflow(base64Image);
  const doritoCount = getCountFromRoboflowResponse(roboflowResponse);
  return doritoCount;
};
