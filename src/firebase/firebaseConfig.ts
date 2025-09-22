// src/firebase/firebaseConfig.ts
import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";


const firebaseConfig = {
 apiKey: "AIzaSyAfs0NfldTY66rApu4ZaHnZkkm9oez2yeI",
  authDomain: "ilaw-58695.firebaseapp.com",
  projectId: "ilaw-58695",
  storageBucket: "ilaw-58695.firebasestorage.app",
  messagingSenderId: "992433393234",
  appId: "1:992433393234:web:260cde1a6170f71c79998b",
  measurementId: "G-1K3Z6RM8HN"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);

// ------------------ Registro Advogado ------------------
export async function registerLawyer(
  email: string,
  password: string,
  name: string,
  oab: string,
  telephone: string,
  address: string,
  specialty: string
) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const uid = res.user.uid;

    const payload = {
      uid,
      email,
      name,
      oab,
      telephone,
      address,
      specialty,
      role: "lawyer", 
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    await setDoc(doc(db, "users", uid), payload);
    return { user: res.user, data: payload };
  } catch (err) {
    console.error("registerLawyer error:", err);
    throw err;
  }
}

// ------------------ Registro Cliente ------------------
export async function registerClient(
  email: string,
  password: string,
  name: string,
  telephone: string,
  city: string
) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const uid = res.user.uid;

    const payload = {
      uid,
      email,
      name,
      telephone,
      city,
      role: "client", // importante: usamos `role`
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    await setDoc(doc(db, "users", uid), payload);
    return { user: res.user, data: payload };
  } catch (err) {
    console.error("registerClient error:", err);
    throw err;
  }
}

// ------------------ Login (autentica + busca doc no Firestore) ------------------
export async function loginUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    const userSnap = await getDoc(doc(db, "users", uid));
    if (!userSnap.exists()) {
      // garante logout se não encontrou doc
      await signOut(auth);
      throw new Error("Usuário não encontrado no banco de dados.");
    }

    const data = userSnap.data() as Record<string, any>;

    // aceitar tanto 'role' quanto 'type' por segurança (migracões antigas)
    const role = data.role ?? data.type ?? null;
    if (!role) {
      await signOut(auth);
      throw new Error("Usuário sem role definido no Firestore.");
    }

    // retorna objeto consistente (sempre terá .role)
    return { uid, role, ...data };
  } catch (err) {
    console.error("loginUser error:", err);
    throw err;
  }
}

// ------------------ Logout ------------------
export async function logout() {
  try {
    await signOut(auth);
  } catch (err) {
    console.error("logout error:", err);
    throw err;
  }
}
