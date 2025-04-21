import { db } from '../firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";

export const addPortfolioItem = async (data: any) => {
  const docRef = await addDoc(collection(db, "portfolio"), data);
  return docRef.id;
};

export const getPortfolioItems = async () => {
  const querySnapshot = await getDocs(collection(db, "portfolio"));
  return querySnapshot.docs.map(doc => ({ ...doc.data() }));
};

// Add update and delete functions as needed
