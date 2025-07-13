import SidebarLayout from "../components/SidebarLayout";
import DocumentosList from "../components/DocumentosList";

export default function Historico() {
  return (
    <SidebarLayout>
      <div className="p-6 animate-fadeIn">
        <DocumentosList />
      </div>
    </SidebarLayout>
  );
}
