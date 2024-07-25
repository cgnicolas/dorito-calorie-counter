const CALORIES_PER_DORITO = 150 / 12;
export const countCalories = (numberOfDoritos) => {
  return numberOfDoritos * CALORIES_PER_DORITO;
};
