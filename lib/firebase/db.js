import app from './config';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const db = getFirestore(app);

export const addData = async (colllection, id, data) => {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, colllection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export const readData = async () => {};
