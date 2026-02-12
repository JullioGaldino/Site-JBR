import NavBar from "../../components/navBar";

// 🔹 IMPORTAR AS IMAGENS (ajuste os caminhos conforme sua estrutura)
import Cone from "../../components/img/Clientes/CONE - PE.jpg";
import Andrade from "../../components/img/Clientes/Construtora Andrade Gutierrez.jpg";
import Camargo from "../../components/img/Clientes/Construtora Camargo Corrêa.jpg";
import Odebrecht from "../../components/img/Clientes/Construtora Norberto Odebrecht.jpg";
import OAS from "../../components/img/Clientes/Construtora OAS.jpg";
// (adicione as outras depois no mesmo padrão)

function Clientes() {
  const clientes = [
    { nome: "Condomínio de Negócios (CONE-PE)", img: Cone },
    { nome: "Construtora Andrade Gutierrez S/A", img: Andrade },
    { nome: "Construtora Camargo Corrêa", img: Camargo },
    { nome: "Construtora Norberto Odebrecht S/A", img: Odebrecht },
    { nome: "Construtora OAS", img: OAS },
    // continue adicionando os outros no mesmo formato
  ];

  return (
    <>
      <NavBar />

      <section className="relative bg-white py-24 px-6 overflow-hidden">

        {/* Decorações de fundo */}
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] 
                        bg-blue-900/5 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-40 -right-40 w-[350px] h-[350px] 
                        bg-amber-400/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-900">
              Nossos Clientes
            </h2>

            <p className="mt-6 text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
              Atuamos ao lado de organizações de diferentes segmentos,
              oferecendo soluções em engenharia com qualidade,
              confiabilidade e alto padrão técnico.
            </p>
          </div>

          {/* GRID */}
          <div className="grid gap-8 
                          sm:grid-cols-2 
                          md:grid-cols-3 
                          lg:grid-cols-4">

            {clientes.map((cliente, index) => (
              <div
                key={index}
                className="group bg-gray-50 border-2 border-gray-200 
                           rounded-2xl p-6 flex flex-col items-center text-center
                           shadow-sm hover:shadow-xl hover:border-amber-400
                           transition-all duration-300 hover:-translate-y-2"
              >
                {/* Logo */}
                <div className="w-24 h-24 flex items-center justify-center mb-6">
                  <img
                    src={cliente.img}
                    alt={cliente.nome}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>

                {/* Nome */}
                <h3 className="text-sm font-semibold text-gray-800 leading-relaxed">
                  {cliente.nome}
                </h3>
              </div>
            ))}
          </div>

          {/* FOOTER TEXTO */}
          <div className="mt-20 pt-10 border-t border-gray-200 text-center">
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Cada parceria representa nosso compromisso com a excelência,
              a inovação e a entrega de resultados que superam expectativas.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Clientes;
