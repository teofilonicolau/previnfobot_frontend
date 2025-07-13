import { useState } from "react";
import ConsultaForm from "../components/ConsultaForm";
import RespostaBox from "../components/RespostaBox";
import SidebarLayout from "../components/SidebarLayout";

export default function ConsultaApp() {
  const [resposta, setResposta] = useState("");
  const [emConsulta, setEmConsulta] = useState(false);

  const tratarResposta = (texto) => {
    setResposta(texto);
    setEmConsulta(false);
  };

  return (
    <SidebarLayout>
      <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md animate-fadeIn">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">🔎 Consulta Jurídica</h2>

        <ConsultaForm
          setResposta={tratarResposta}
          emConsulta={emConsulta}
          setEmConsulta={setEmConsulta}
        />

        <RespostaBox resposta={resposta} />
      </div>
    </SidebarLayout>
  );
}
