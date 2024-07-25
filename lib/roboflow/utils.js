export const convertImageBufferToBase64 = (imageBuffer) => {
  return Buffer.from(imageBuffer).toString('base64');
};

export const getCountFromRoboflowResponse = (roboflowData) => {
  const { predictions } = roboflowData;
  let sum = 0;
  predictions.forEach((prediction) => {
    const { class: doritoSize } = prediction;
    switch (doritoSize) {
      case 'FullDorito':
        sum += 1;
        break;
      case 'HalfDorito':
        sum += 0.5;
        break;
      default:
        sum += 0.25;
        break;
    }
  });
  return sum;
};
