// src/services/AuthService.js
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase-config";

export const loginComGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const resultado = await signInWithPopup(auth, provider);
    const token = await resultado.user.getIdToken(); // Token do Firebase
    return { user: resultado.user, token };
  } catch (erro) {
    console.error("Erro ao logar:", erro);
    throw erro;
  }
};
