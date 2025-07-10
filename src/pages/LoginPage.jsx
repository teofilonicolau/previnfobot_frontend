import LoginForm from "../components/LoginForm";
import Layout from "../components/Layout";

export default function LoginPage() {
  return (
    <Layout hideLogout>
      <div className="max-w-md mx-auto mt-24 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold text-primario text-center mb-4">
          Acesse o PrevInfoBot
        </h2>
        <LoginForm onLogin={() => (window.location.href = "/dashboard")} />
        <div className="text-center mt-4 text-sm">
          Ainda não tem conta?{" "}
          <a href="/register" className="text-blue-600 underline">
            Cadastre-se aqui
          </a>
        </div>
      </div>
    </Layout>
  );
}
