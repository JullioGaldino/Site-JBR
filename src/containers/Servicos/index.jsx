import NavBar from "../../components/navBar";

function Servicos() {
  const servicos = [
    {
      icon: "📊",
      titulo: "Estudos de Viabilidade Técnico-Econômica",
      descricao:
        "Auxiliamos nossos clientes na tomada de decisões estratégicas, com análises precisas que garantem segurança e rentabilidade aos empreendimentos.",
      highlight: "Análise Estratégica",
    },
    {
      icon: "🗺️",
      titulo: "Estudos Topográficos e Geotécnicos",
      descricao:
        "Fornecemos informações essenciais para o correto planejamento e execução das obras, reduzindo riscos e otimizando recursos.",
      highlight: "Precisão Técnica",
    },
    {
      icon: "🏗️",
      titulo: "Estudos Arquitetônicos e de Engenharia",
      descricao:
        "Criamos soluções inteligentes, funcionais e alinhadas às normas técnicas e às necessidades específicas de cada projeto.",
      highlight: "Soluções Inovadoras",
    },
    {
      icon: "🚚",
      titulo: "Transporte de Cargas Especiais",
      descricao:
        "Oferecemos suporte técnico especializado para operações complexas, com foco em segurança, logística e viabilidade.",
      highlight: "Operações Complexas",
    },
    {
      icon: "⚙️",
      titulo: "Projetos Industriais",
      descricao:
        "Abrangemos áreas mecânica, eletromecânica, automação, instrumentação, elétrica e civil, sempre com soluções integradas.",
      highlight: "Integração Total",
    },
    {
      icon: "🏙️",
      titulo: "Infraestrutura Urbana",
      descricao:
        "Contribuímos para o crescimento das cidades com planejamento técnico, funcionalidade e sustentabilidade.",
      highlight: "Desenvolvimento Urbano",
    },
    {
      icon: "🌉",
      titulo: "Transporte e Infraestrutura de Grande Porte",
      descricao:
        "Especializados em sistemas rodoviários, ferroviários e metroviários, garantindo desempenho e alto padrão técnico.",
      highlight: "Projetos Estratégicos",
    },
    {
      icon: "💧",
      titulo: "Projetos Hidráulicos",
      descricao:
        "Sistemas de saneamento, drenagem, irrigação e soluções hidráulicas com foco em segurança e responsabilidade ambiental.",
      highlight: "Sustentabilidade",
    },
  ];

  return (
    <>
      <NavBar />

      {/* SEÇÃO SERVIÇOS */}
      <section className="relative bg-gradient-to-br from-gray-100 to-white py-24 px-6 overflow-hidden">

        {/* Título */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-900">
            Nossos Serviços
          </h2>

          <p className="mt-6 text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Oferecemos soluções completas em engenharia, desenvolvidas para
            atender projetos de diferentes portes com eficiência, segurança e qualidade.
          </p>
        </div>

        {/* GRID */}
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2">

          {servicos.map((servico, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-md border-2 border-transparent 
                         hover:border-amber-400 hover:shadow-xl transition-all duration-300 
                         hover:-translate-y-2 flex flex-col"
            >
              {/* Ícone */}
              <div className="text-5xl mb-6 animate-bounce">
                {servico.icon}
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                {servico.titulo}
              </h3>

              {/* Descrição */}
              <p className="text-gray-700 leading-relaxed flex-grow">
                {servico.descricao}
              </p>

              {/* Badge */}
              <span className="mt-6 inline-block bg-amber-400 text-blue-900 
                               px-4 py-2 rounded-full text-sm font-semibold 
                               group-hover:scale-105 transition">
                {servico.highlight}
              </span>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}

export default Servicos;
