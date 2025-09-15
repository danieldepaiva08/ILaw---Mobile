import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

// Configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC0BXQKdi4oTqGsFVQ7Z8zrRNCdxaMhIyo",
  authDomain: "ilawmobile.firebaseapp.com",
  projectId: "ilawmobile",
  storageBucket: "ilawmobile.firebasestorage.app",
  messagingSenderId: "399558949805",
  appId: "1:399558949805:web:2459641ab31bd0bd1bff24",
  measurementId: "G-S1CT7MNSRS"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

//
// Registro de cliente
//
export async function registerClient(
  email: string,
  password: string,
  name: string,
  telephone: string,
  city: string
) {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;

  const userRef = doc(db, "users", user.uid);
  await setDoc(userRef, {
    uid: user.uid,
    email: user.email,
    name,
    telephone,
    city,
    role: "client",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return user;
}

//
// Registro de advogado
//
export async function registerLawyer(
  email: string,
  password: string,
  name: string,
  oab: string,
  telephone: string,
  address: string,
  specialty: string
) {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;

  const userRef = doc(db, "users", user.uid);
  await setDoc(userRef, {
    uid: user.uid,
    email: user.email,
    name,
    oab,
    telephone,
    address,
    specialty,
    role: "lawyer",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return user;
}

//
// Login com validação de role
//
export async function loginUser(
  email: string,
  password: string,
  role: "client" | "lawyer"
) {
  const res = await signInWithEmailAndPassword(auth, email, password);
  const user = res.user;

  // Busca no Firestore
  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    throw new Error("Perfil não encontrado.");
  }

  const data = snap.data();
  if (data.role !== role) {
    throw new Error("Conta inválida para este tipo de login.");
  }

  return user;
}

//
// Logout
//
export async function logoutUser() {
  return await signOut(auth);
}

//
// Listener para mudanças no estado de usuário
//
export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
