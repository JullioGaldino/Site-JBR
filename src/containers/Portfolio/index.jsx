import { useState } from "react";
import NavBar from "../../components/navBar";

// 🔹 IMPORTAR IMAGENS (ajuste caminhos conforme sua estrutura)
import BR232 from "../../components/img/Projetos/Duplicação-BR-232-PE.jpg";
import BR135 from "../../components/img/Projetos/Pavimentação-BR-135-PI.jpg";
import ViaMangue from "../../components/img/Projetos/Projeto-Via-Mangue.jpg";
import MetroExpansao from "../../components/img/Projetos/Expansão-do-Metrô-de-Recife.jpg";
import Transnordestina from "../../components/img/Projetos/Ferrovia-Transnordestina.jpg";
import AbreuLima from "../../components/img/Projetos/Refinaria-Abreu-e-Lima.jpg";

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projetos = [
    {
      id: "br-232",
      titulo: "BR-232 – Duplicação",
      tipo: "Infraestrutura Rodoviária",
      categoria: "rodoviaria",
      local: "📍 Pernambuco",
      descricao: "Obra rodoviária com extensão aproximada de 124 km.",
      tags: ["Duplicação", "124 km"],
      img: BR232,
    },
    {
      id: "br-135",
      titulo: "BR-135",
      tipo: "Infraestrutura Rodoviária",
      categoria: "rodoviaria",
      local: "📍 Logística",
      descricao: "Execução de serviços rodoviários estratégicos.",
      tags: ["Logística", "Estratégico"],
      img: BR135,
    },
    {
      id: "via-mangue",
      titulo: "Via Mangue",
      tipo: "Mobilidade Urbana",
      categoria: "mobilidade",
      local: "📍 Recife",
      descricao: "Obra de mobilidade urbana de grande porte.",
      tags: ["Mobilidade", "Pontes"],
      img: ViaMangue,
    },
    {
      id: "metro-expansao",
      titulo: "Metrô do Recife – Expansão",
      tipo: "Infraestrutura Ferroviária",
      categoria: "ferroviaria",
      local: "📍 Recife",
      descricao: "Ampliação do sistema metroviário.",
      tags: ["Metrô", "Expansão"],
      img: MetroExpansao,
    },
    {
      id: "transnordestina",
      titulo: "Ferrovia Transnordestina",
      tipo: "Infraestrutura Ferroviária",
      categoria: "ferroviaria",
      local: "📍 Nordeste",
      descricao: "Projeto ferroviário de grande porte.",
      tags: ["Ferrovia", "Cargas"],
      img: Transnordestina,
    },
    {
      id: "abreu-lima",
      titulo: "Refinaria Abreu e Lima",
      tipo: "Projetos Industriais",
      categoria: "industrial",
      local: "📍 Pernambuco",
      descricao: "Empreendimento industrial de grande escala.",
      tags: ["Petróleo", "Energia"],
      img: AbreuLima,
    },
  ];

  const categorias = [
    { label: "Todos", value: "all" },
    { label: "Rodoviária", value: "rodoviaria" },
    { label: "Mobilidade", value: "mobilidade" },
    { label: "Ferroviária", value: "ferroviaria" },
    { label: "Industrial", value: "industrial" },
  ];

  const projetosFiltrados =
    filter === "all"
      ? projetos
      : projetos.filter((p) => p.categoria === filter);

  return (
    <>
      <NavBar />

      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900">
              Portfólio de Projetos
            </h2>
            <p className="mt-4 text-gray-600">
              Experiência técnica em infraestrutura e engenharia
            </p>
            <div className="w-32 h-1 mx-auto mt-6 bg-gradient-to-r from-amber-400 to-blue-900 rounded"></div>
          </div>

          {/* FILTROS */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categorias.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-6 py-2 rounded-full border-2 font-semibold transition
                ${
                  filter === cat.value
                    ? "bg-blue-900 text-white border-blue-900"
                    : "border-gray-300 text-gray-700 hover:border-amber-400"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projetosFiltrados.map((projeto) => (
              <div
                key={projeto.id}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition hover:-translate-y-2"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={projeto.img}
                    alt={projeto.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />

                  <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <button
                      onClick={() => setSelectedProject(projeto)}
                      className="bg-amber-400 px-6 py-2 rounded-full font-semibold text-blue-900"
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-blue-900">
                    {projeto.titulo}
                  </h3>
                  <p className="text-sm text-amber-500 font-semibold mt-1">
                    {projeto.tipo}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {projeto.local}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-2xl relative">

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-2xl text-blue-900"
            >
              ✕
            </button>

            <h2 className="text-2xl font-extrabold text-blue-900 mb-2">
              {selectedProject.titulo}
            </h2>

            <p className="text-amber-500 font-semibold mb-4">
              {selectedProject.tipo}
            </p>

            <img
              src={selectedProject.img}
              alt={selectedProject.titulo}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />

            <p className="text-gray-700 mb-4">
              {selectedProject.descricao}
            </p>

            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 text-blue-900 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
