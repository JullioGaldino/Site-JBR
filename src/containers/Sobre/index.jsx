import NavBar from "../../components/navBar";

function Sobre() {
  return (
    <>
      <NavBar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold">
            JBR <span className="text-amber-400">Engenharia</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200">
            Consultoria dedicada à elaboração de projetos multidisciplinares
            com mais de 30 anos de experiência.
          </p>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* BLOCO IMAGEM (exemplo) */}
          <div className="rounded-2xl border-4 border-amber-400 overflow-hidden shadow-xl h-64 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">Imagem da Sede aqui</span>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              Sobre a JBR Engenharia
            </h2>

            <p className="mb-4 text-gray-700">
              Fundada em <strong>16 de março de 1994</strong>, a JBR Engenharia
              foi montada com base no acervo técnico acumulado ao longo de mais
              de 20 anos.
            </p>

            <p className="mb-6 text-gray-700">
              Atua em engenharia rodoviária, metroviária, industrial,
              infraestrutura urbana, saneamento e obras especiais.
            </p>

            <div className="flex gap-4">
              <span className="bg-amber-400 text-blue-900 px-4 py-2 rounded-full font-semibold text-sm">
                Desde 1994
              </span>
              <span className="bg-amber-400 text-blue-900 px-4 py-2 rounded-full font-semibold text-sm">
                30+ anos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS DE EXPERTISE */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Áreas de Expertise
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {[
              "Engenharia Rodoviária",
              "Engenharia Metroviária",
              "Infraestrutura Urbana",
              "Saneamento",
              "Hidráulica",
              "Obras de Arte Especiais",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 p-6 rounded-2xl hover:border-amber-400 hover:shadow-xl transition"
              >
                <h3 className="text-blue-800 font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSÃO & VISÃO */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* BLOCO IMAGEM (exemplo) */}
          <div className="rounded-2xl border-4 border-amber-400 overflow-hidden shadow-xl h-64 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">Imagem da Equipe aqui</span>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Missão</h3>
            <p className="mb-8 text-gray-700">
              Prestar serviços de arquitetura e engenharia consultiva com
              excelência e foco no desenvolvimento sustentável.
            </p>

            <h3 className="text-2xl font-bold text-blue-800 mb-4">Visão</h3>
            <p className="text-gray-700">
              Ser reconhecida pela excelência dos serviços e qualidade de vida
              de seus colaboradores.
            </p>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-20 px-6 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Nossos Valores</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Ética",
              "Transparência",
              "Gestão Compartilhada",
              "Excelência dos Serviços",
              "Satisfação dos Clientes",
              "Valorização do Ser Humano",
              "Responsabilidade Socioambiental",
              "Criatividade e Inovação",
              "Competitividade",
            ].map((valor, index) => (
              <div
                key={index}
                className="bg-blue-700 hover:scale-105 transition p-6 rounded-xl border-l-4 border-amber-400"
              >
                ✓ {valor}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-24 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Pronto para transformar seu projeto?
        </h2>

        <button className="bg-amber-400 text-blue-900 px-8 py-3 rounded-full font-bold hover:-translate-y-1 transition shadow-lg">
          Solicitar Orçamento
        </button>
      </section>
    </>
  );
}

export default Sobre;
