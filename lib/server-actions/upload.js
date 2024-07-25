'use server';
import { getSession } from '@auth0/nextjs-auth0';
/**
 * Server Action for uploading the image string to the /api/cc/upload endpoint
 * @param {FormData} base64
 */
export const uploadImage = async (base64ImageString) => {
  const session = await getSession();
  // console.log(session.accessToken);
  try {
    const response = await fetch(
      process.env.NEXT_JS_PUBLIC_LOCALHOST + '/api/cc/upload',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.accessToken}`,
        },
        body: {
          image: base64ImageString,
        },
      }
    );
    const result = await response.json();
    console.log(result);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};
