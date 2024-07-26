import { addData, readData } from '@/lib/firebase/db';
const CALORIES_PER_DORITO = 150 / 12;
export const countCalories = (numberOfDoritos) => {
  return Math.round(numberOfDoritos * CALORIES_PER_DORITO);
};

export const addServingToDb = (serving, userId) => {
  const currentTime = Date.now();
  addData('servings', userId, {
    [currentTime]: serving,
  });
};

export const getUserServings = async (userId) => {
  const servings = await readData('servings', userId);
  return servings;
};

export const generateServingTableData = (userServings) => {
  if (!userServings) {
    return [];
  }
  return Object.keys(userServings).map((key) => {
    const date = new Date(parseInt(key));
    return {
      date: date.toDateString() + ' ' + date.toTimeString().split(' ')[0],
      calories: userServings[key].calories,
      doritoCount: userServings[key].doritoCount,
    };
  });
};
