import { useState } from "react";
import ConsultaForm from "../components/ConsultaForm";
import RespostaBox from "../components/RespostaBox";
import SidebarLayout from "../components/SidebarLayout";

export default function ConsultaApp() {
  const [resposta, setResposta] = useState("");
  const [emConsulta, setEmConsulta] = useState(false);
  const [pergunta, setPergunta] = useState("");
  const [area, setArea] = useState("previdenciario");

  // Função para resetar o formulário
  const resetForm = () => {
    setResposta("");
    setPergunta("");
    setArea("previdenciario");
    setEmConsulta(false);
  };

  return (
    <SidebarLayout>
      <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md animate-fadeIn">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">🔎 Consulta Jurídica</h2>
        <ConsultaForm
          setResposta={setResposta}
          emConsulta={emConsulta}
          setEmConsulta={setEmConsulta}
          setPergunta={setPergunta}
          setArea={setArea}
          resetForm={resetForm}
        />
        <RespostaBox
          resposta={resposta}
          pergunta={pergunta}
          area={area}
          resetForm={resetForm}
        />
      </div>
    </SidebarLayout>
  );
}