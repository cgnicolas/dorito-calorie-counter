import { addData } from '@/lib/firebase/db';
const CALORIES_PER_DORITO = 150 / 12;
export const countCalories = (numberOfDoritos) => {
  return numberOfDoritos * CALORIES_PER_DORITO;
};

export const addServingToDb = (serving, userId) => {
  const currentTime = Date.now();
  addData('servings', userId, {
    [currentTime]: serving,
  });
};
