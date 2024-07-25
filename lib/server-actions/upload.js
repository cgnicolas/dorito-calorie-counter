'use server';
/**
 * Server Action for uploading the image form data to the /api/cc/upload endpoint
 * @param {FormData} formData
 */
export const uploadImage = async (formData) => {
  const file = formData.get('dImage');
  const arrayBuffer = await file.arrayBuffer();
  const response = await fetch(
    process.env.NEXT_JS_PUBLIC_LOCALHOST + '/api/cc/upload',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/octet-stream',
      },
      body: arrayBuffer,
    }
  );
  if (response.ok) {
    console.log('File uploaded successfully');
  } else {
    console.log('not successful');
  }
};
