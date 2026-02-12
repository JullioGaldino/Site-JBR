import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "../../components/navBar";

/* ================= IMAGENS ================= */
import BR232 from "../../components/img/Projetos/Duplicação-BR-232-PE.jpg";
import BR101 from "../../components/img/Projetos/Supervisão-BR-101.jpg";
import BR104 from "../../components/img/Projetos/Restauração-BR-104-PE.jpg";
import BR135 from "../../components/img/Projetos/Pavimentação-BR-135-PI.jpg";
import PE015 from "../../components/img/Projetos/Triplicacao-PE.jpg";
import ViaMangue from "../../components/img/Projetos/Projeto-Via-Mangue.jpg";
import ProjetoConvida from "../../components/img/Projetos/Projeto-Convida.jpg";
import MetroExpansao from "../../components/img/Projetos/Expansão-do-Metrô-de-Recife.jpg";
import MetroSupervisao from "../../components/img/Projetos/Supervisão-Metrô-de-Recife.jpg";
import Transnordestina from "../../components/img/Projetos/Ferrovia-Transnordestina.jpg";
import AbreuLima from "../../components/img/Projetos/Refinaria-Abreu-e-Lima.jpg";
import Honda from "../../components/img/Projetos/Moto-Honda-da-Amazônia.jpg";
import Usina from "../../components/img/Projetos/usina-termoeletrica.jpg";
import BaseCombustivel from "../../components/img/Projetos/Base de Distribuição de Combustíveis.jpg";
import PonteSF from "../../components/img/Projetos/Ponte-sobre-rio-sao-francisco.jpg";
import Promata from "../../components/img/Projetos/triagem-compostagem.jpg";

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchParams] = useSearchParams();

  const projetos = [
    { id: "br-232", titulo: "BR-232 – Duplicação", tipo: "Rodoviária", categoria: "rodoviaria", local: "Pernambuco", descricao: "Extensão aproximada de 124 km.", img: BR232 },
    { id: "br-101", titulo: "BR-101", tipo: "Rodoviária", categoria: "rodoviaria", local: "Eixo Nacional", descricao: "Implantação e adequação.", img: BR101 },
    { id: "br-104", titulo: "BR-104", tipo: "Rodoviária", categoria: "rodoviaria", local: "Nordeste", descricao: "Modernização da malha viária.", img: BR104 },
    { id: "br-135", titulo: "BR-135", tipo: "Rodoviária", categoria: "rodoviaria", local: "Logística", descricao: "Trecho estratégico logístico.", img: BR135 },
    { id: "pe-015", titulo: "PE-015 – Triplicação", tipo: "Rodoviária", categoria: "rodoviaria", local: "Pernambuco", descricao: "Ampliação viária.", img: PE015 },
    { id: "via-mangue", titulo: "Via Mangue", tipo: "Mobilidade", categoria: "mobilidade", local: "Recife", descricao: "Mobilidade urbana de grande porte.", img: ViaMangue },
    { id: "projeto-convida", titulo: "Projeto Convida", tipo: "Mobilidade", categoria: "mobilidade", local: "Requalificação Urbana", descricao: "Infraestrutura urbana.", img: ProjetoConvida },
    { id: "metro-expansao", titulo: "Metrô – Expansão", tipo: "Ferroviária", categoria: "ferroviaria", local: "Recife", descricao: "Ampliação metroviária.", img: MetroExpansao },
    { id: "metro-supervisao", titulo: "Metrô – Supervisão", tipo: "Ferroviária", categoria: "ferroviaria", local: "Recife", descricao: "Supervisão técnica.", img: MetroSupervisao },
    { id: "transnordestina", titulo: "Transnordestina", tipo: "Ferroviária", categoria: "ferroviaria", local: "Nordeste", descricao: "Transporte ferroviário de cargas.", img: Transnordestina },
    { id: "abreu-lima", titulo: "Refinaria Abreu e Lima", tipo: "Industrial", categoria: "industrial", local: "Pernambuco", descricao: "Empreendimento industrial.", img: AbreuLima },
    { id: "honda", titulo: "Moto Honda", tipo: "Industrial", categoria: "industrial", local: "Amazonas", descricao: "Infraestrutura fabril.", img: Honda },
    { id: "usina", titulo: "Usina Termoelétrica", tipo: "Industrial", categoria: "industrial", local: "Energia", descricao: "Geração energética.", img: Usina },
    { id: "base-combustivel", titulo: "Base Combustíveis", tipo: "Industrial", categoria: "industrial", local: "Distribuição", descricao: "Armazenamento estratégico.", img: BaseCombustivel },
    { id: "ponte-sf", titulo: "Ponte Rio São Francisco", tipo: "Especial", categoria: "especiais", local: "Rio São Francisco", descricao: "Obra de arte especial.", img: PonteSF },
    { id: "promata", titulo: "PROMATA", tipo: "Saneamento", categoria: "saneamento", local: "Gestão Ambiental", descricao: "Tratamento ambiental.", img: Promata },
  ];

  const categorias = [
    { label: "Todos", value: "all" },
    { label: "Rodoviária", value: "rodoviaria" },
    { label: "Mobilidade", value: "mobilidade" },
    { label: "Ferroviária", value: "ferroviaria" },
    { label: "Industrial", value: "industrial" },
    { label: "Especiais", value: "especiais" },
    { label: "Saneamento", value: "saneamento" },
  ];

  useEffect(() => {
    const projectId = searchParams.get("project");
    if (projectId) {
      const found = projetos.find((p) => p.id === projectId);
      if (found) setSelectedProject(found);
    }
  }, [searchParams]);

  const projetosFiltrados =
    filter === "all"
      ? projetos
      : projetos.filter((p) => p.categoria === filter);

  return (
    <>
      <NavBar />

      {/* ================= SEÇÃO ================= */}
      <section className="bg-gradient-to-b from-blue-950 to-blue-900 px-6 py-24">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
              Portfólio de Projetos
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-6 rounded"></div>
          </div>

          {/* FILTROS */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categorias.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-6 py-2 rounded-full font-semibold transition duration-300
                ${
                  filter === cat.value
                    ? "bg-amber-400 text-blue-950"
                    : "bg-blue-800 text-white hover:bg-blue-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {projetosFiltrados.map((projeto) => (
              <div
                key={projeto.id}
                className="group relative bg-blue-800/70 backdrop-blur-sm border border-blue-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
              >
                {/* IMAGEM */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={projeto.img}
                    alt={projeto.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent"></div>
                </div>

                {/* CONTEÚDO */}
                <div className="p-6 relative">
                  {/* Linha estrutural */}
                  <div className="absolute left-0 top-6 bottom-6 w-1 bg-amber-400 rounded"></div>

                  <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold ml-4">
                    {projeto.tipo}
                  </span>

                  <h3 className="text-lg font-bold text-white mt-2 ml-4">
                    {projeto.titulo}
                  </h3>

                  <p className="text-sm text-blue-200 mt-2 ml-4">
                    📍 {projeto.local}
                  </p>

                  <p className="text-sm text-blue-100 mt-4 ml-4 leading-relaxed">
                    {projeto.descricao}
                  </p>

                  <button
                    onClick={() => setSelectedProject(projeto)}
                    className="mt-6 ml-4 bg-amber-400 text-blue-950 px-5 py-2 rounded-full font-bold text-sm hover:scale-105 transition"
                  >
                    Ver Projeto
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {selectedProject && (
        <div className="fixed inset-0 bg-blue-950/90 flex items-center justify-center z-50">
          <div className="bg-blue-900 border border-blue-700 rounded-2xl p-8 w-[90%] max-w-2xl relative shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-2xl text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-extrabold text-white mb-4">
              {selectedProject.titulo}
            </h2>

            <img
              src={selectedProject.img}
              alt={selectedProject.titulo}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />

            <p className="text-blue-200">
              {selectedProject.descricao}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
