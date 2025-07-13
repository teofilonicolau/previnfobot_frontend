import LoginForm from "../components/LoginForm";
import Layout from "../components/Layout";

export default function LoginPage() {
  return (
    <Layout hideLogout>
      <div className="max-w-md mx-auto mt-24 animate-fadeIn">
        <LoginForm onLogin={() => (window.location.href = "/dashboard")} />
        <div className="text-center mt-4 text-sm text-gray-700">
          Ainda não tem conta?{" "}
          <a href="/register" className="text-blue-600 underline">
            Cadastre-se aqui
          </a>
        </div>
      </div>
    </Layout>
  );
}
