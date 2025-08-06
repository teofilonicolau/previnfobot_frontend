// src/components/GoogleLoginButton.jsx
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function GoogleLoginButton({ onLogin }) {
  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();

      localStorage.setItem("token", token);
      if (onLogin) onLogin(token);
    } catch (error) {
      console.error("Erro no login com Google:", error);
      alert("Falha ao autenticar com Google.");
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="mt-4 w-full py-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
    >
      🟢 Entrar com Google
    </button>
  );
}
