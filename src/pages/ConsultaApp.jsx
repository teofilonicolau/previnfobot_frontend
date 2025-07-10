import { useState } from "react";
import ConsultaForm from "../components/ConsultaForm";
import RespostaBox from "../components/RespostaBox";
import SidebarLayout from "../components/SidebarLayout"; // layout opcional

export default function ConsultaApp() {
  const [resposta, setResposta] = useState("");
  const [emConsulta, setEmConsulta] = useState(false);

  // separa as funções pra evitar conflito de nomes
  const tratarResposta = (texto) => {
    setResposta(texto);
    setEmConsulta(false);
  };

  return (
    <SidebarLayout>
      <div className="p-4 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">🔎 Consulta Jurídica</h2>

        <ConsultaForm
          setResposta={tratarResposta}     // ✅ função garantida
          emConsulta={emConsulta}          // ✅ booleano de loading
          setEmConsulta={setEmConsulta}    // ✅ setter enviado
        />

        <RespostaBox resposta={resposta} />
      </div>
    </SidebarLayout>
  );
}
