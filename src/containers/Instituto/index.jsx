import NavBar from "../../components/navBar";

export default function Instituto() {
  return (
    <>
      <NavBar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">
            Instituto <span className="text-amber-400">IMMOC</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Transformando vidas através da educação, capacitação e oportunidades
          </p>
          <a
            href="#contato"
            className="inline-block bg-amber-400 text-blue-900 px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg"
          >
            Entre em Contato
          </a>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 text-center mb-12">
            Sobre o Instituto
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                O Instituto Maria Madalena Oliveira Cavalcante (IMMOC) é uma
                entidade sem fins lucrativos que promove capacitação e
                desenvolvimento de jovens em Olinda e Recife.
              </p>

              <p>
                Fundado em 2002 e mantido pela JBR Engenharia, o instituto
                reflete nosso compromisso com o desenvolvimento social.
              </p>

              <p>
                Possui laboratório de informática, auditório, biblioteca,
                refeitório e sala administrativa, oferecendo cursos de inclusão
                digital, reforço escolar, educação ambiental e atendimento
                psicológico.
              </p>

              <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-amber-400">
                <strong className="text-blue-900">
                  📅 Calendário Acadêmico:
                </strong>{" "}
                Ano letivo com dez meses de atividades semanais.
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-700 h-80 rounded-xl flex items-center justify-center text-white text-xl font-semibold shadow-xl">
              🏫 Instituto IMMOC – Recife/PE
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTARIADO */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-12">
            Voluntariado e Impacto
          </h2>

          <div className="bg-white p-10 rounded-xl shadow-md border-l-4 border-amber-400">
            <p className="text-gray-700 mb-8 leading-relaxed">
              Todo o trabalho do IMMOC é desenvolvido por voluntários:
              psicólogos, engenheiros, professores e diversos profissionais que
              colaboram para a transformação social.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl font-extrabold text-amber-400">
                  20%
                </div>
                <p className="font-semibold mt-2 text-gray-700">
                  Funcionários JBR Voluntários
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl font-extrabold text-amber-400">
                  2002
                </div>
                <p className="font-semibold mt-2 text-gray-700">
                  Fundação do Instituto
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl font-extrabold text-amber-400">
                  100%
                </div>
                <p className="font-semibold mt-2 text-gray-700">
                  Inserção no Mercado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRETORIA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-12">
            Diretoria Executiva
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["Pedro Pereira", "Diretor Presidente"],
              ["Fabiano Cavalcante", "Presidente do Conselho"],
              ["Rute Oliveira", "Diretora Administrativa"],
              ["Anderson Cavalcante", "Diretor Desenvolvimento"],
              ["Julliana Cavalcante", "Diretora Operações"],
            ].map(([nome, cargo], i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-xl text-center shadow hover:-translate-y-2 transition"
              >
                <div className="w-20 h-20 bg-blue-900 text-amber-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-4">
                  {nome.charAt(0)}
                </div>
                <h3 className="font-bold text-blue-900">{nome}</h3>
                <p className="text-sm text-amber-500 font-semibold mt-1">
                  {cargo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATIVIDADES */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-12">
            Nossas Atividades
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["💻", "Futuro Digital"],
              ["📚", "Tô Ligado"],
              ["🌱", "Educação Ambiental"],
              ["📖", "Leitura"],
              ["💭", "Atendimento Psicológico"],
              ["🚀", "Outras Atividades"],
            ].map(([icon, title], i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow hover:-translate-y-2 transition"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bold text-blue-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">
                  Projetos voltados para capacitação, educação e transformação
                  social.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTRIBUIR */}
      <section
        id="contato"
        className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-800 text-white"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Como Contribuir
            </h2>
            <ul className="space-y-4">
              {[
                "Realizando trabalho voluntário",
                "Contribuindo financeiramente",
                "Doando equipamentos",
                "Oferecendo vagas de estágio",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 p-8 rounded-xl border-l-4 border-amber-400">
            <h3 className="text-amber-400 font-bold mb-4">
              Instituto IMMOC
            </h3>
            <p>Rua Irmã Maria David, 297 – Recife/PE</p>
            <p className="mt-2">(81) 3241-8508</p>
            <p className="mt-2 text-amber-400">
              immoc@jbr.eng.br
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white text-center py-6">
        © 2026 Instituto IMMOC – Mantido pela JBR Engenharia
      </footer>
    </>
  );
}
