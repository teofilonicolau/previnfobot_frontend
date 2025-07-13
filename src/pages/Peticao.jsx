import { useState } from "react";
import SidebarLayout from "../components/SidebarLayout";
import PeticaoForm from "../components/PeticaoForm";
import VisualizadorPeticao from "../components/VisualizadorPeticao";

export default function Peticao() {
  const [peticaoDados, setPeticaoDados] = useState(null);

  return (
    <SidebarLayout>
      <PeticaoForm setRespostaPeticao={setPeticaoDados} />
      {peticaoDados && <VisualizadorPeticao dados={peticaoDados} />}
    </SidebarLayout>
  );
}
