import { Link } from "react-router-dom";
import NavBar from "../../components/navBar";

// Imagens Projetos
import ViaMangue from "../../components/img/Projetos/Via-mangue.jpg";
import TriplicacaoPE015 from "../../components/img/Projetos/Triplicação-PE.jpg";
import DuplicacaoBR232 from "../../components/img/Projetos/Duplicação-BR-232-PE.jpg";
import PavimentacaoBR135 from "../../components/img/Projetos/Pavimentação-BR-135-PI.jpg";
import PonteRioSaoFrancisco from "../../components/img/Projetos/Ponte-sobre-rio-sao-francisco.jpg";
import MetroRecife from "../../components/img/Projetos/Expansão-do-Metrô-de-Recife.jpg";
import HondaAmazonas from "../../components/img/Projetos/Moto-Honda-da-Amazônia.jpg";
import Transnordestina from "../../components/img/Projetos/Ferrovia-Transnordestina.jpg";
import AbreuELima from "../../components/img/Projetos/Refinaria-Abreu-e-Lima.jpg";
// Imagens Clientes
import ClienteRN from "../../components/img/Clientes/Sec. De Infraestrutura do RN.jpg"
import ClienteSECID from "../../components/img/Clientes/SECRETARIA DAS CIDADES (SECID-PE).jpg"
import ClienteFCA from "../../components/img/Clientes/Grupo FCA.jpg"
import ClienteDERPB from "../../components/img/Clientes/Departamento de Estradas de Rodagem (DER-PB).jpg"
import ClienteCBTU from "../../components/img/Clientes/Companhia Brasileira de Trens Urbanos (CBTU0-PE).jpg"
import ClienteCompesa from "../../components/img/Clientes/Compesa-PE.jpg"
import ClienteSuape from "../../components/img/Clientes/Complexo Industrial de Suape.jpg"
import ClienteDERPE from "../../components/img/Clientes/Departamento de Estradas de Rodagem (DER-PE).jpg"
import ClienteSOP from "../../components/img/Clientes/SUPERINTENDÊNCIA DE OBRAS PÚBLICAS - SOP-CE.jpg"
import ClienteDNIT from "../../components/img/Clientes/Departamento de Infraestrutura de Transportes (DNIT).jpg"


function Home() {
  const projetos = [
    { id: "via-mangue", titulo: "Via Mangue", img: ViaMangue },
    { id: "pe-015", titulo: "Triplicação PE-015", img: TriplicacaoPE015 },
    { id: "br-232", titulo: "Duplicação BR-232", img: DuplicacaoBR232 },
    { id: "br-135", titulo: "Pavimentação BR-135 PI", img: PavimentacaoBR135 },
    { id: "ponte-sf", titulo: "Ponte Rio São Francisco", img: PonteRioSaoFrancisco },
    { id: "metro-expansao", titulo: "Expansão do Metrô Recife", img: MetroRecife },
    { id: "honda-am", titulo: "Honda – Amazonas", img: HondaAmazonas },
    { id: "transnordestina", titulo: "Ferrovia Transnordestina", img: Transnordestina },
    { id: "abreu-lima", titulo: "Refinaria Abreu e Lima", img: AbreuELima },
  ];

  const clientes = [
    { nome: "Sec. de Infraestrutura do RN", img: ClienteRN },
    { nome: "Secretaria das Cidades (SECID/PE)", img: ClienteSECID },
    { nome: "Grupo FCA", img: ClienteFCA },
    { nome: "DER/PB", img: ClienteDERPB },
    { nome: "CBTU/PE", img: ClienteCBTU },
    { nome: "Compesa/PE", img: ClienteCompesa },
    { nome: "Complexo de Suape", img: ClienteSuape },
    { nome: "DER/PE", img: ClienteDERPE },
    { nome: "SOP/CE", img: ClienteSOP },
    { nome: "DNIT", img: ClienteDNIT },
  ]

  return (
    <>
      <NavBar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 md:px-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ViaMangue})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-blue-900/70 to-blue-900" />

        <div className="relative z-10 text-white">
          <h1 className="text-5xl sm:text-7xl font-bold leading-none">
            JBR
          </h1>
          <h2 className="text-5xl sm:text-7xl font-bold leading-none">
            Engenharia
          </h2>
          <p className="mt-6 text-xl sm:text-3xl">
            Criando soluções{" "}
            <span className="text-amber-400 font-semibold">
              inteligentes
            </span>
          </p>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="bg-blue-900 px-6 md:px-16 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Experiência em{" "}
          <span className="text-amber-400">
            projetos de grande porte
          </span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projetos.map((p) => (
            <div
              key={p.id}
              className="relative h-56 rounded-2xl overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${p.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              <div className="relative z-10 flex flex-col justify-end h-full p-6">
                <h3 className="text-white text-xl font-semibold">
                  {p.titulo}
                </h3>

                <Link
                  to={`/portfolio?project=${p.id}`}
                  className="mt-4 w-max bg-amber-400 text-black px-5 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/portfolio"
            className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold hover:bg-amber-400 transition"
          >
            Mais projetos
          </Link>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="bg-blue-900 px-6 md:px-16 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
          Nossos Clientes
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {clientes.map((cliente, i) => (
            <div
              key={i}
              className="relative bg-white h-32 rounded-2xl 
                        flex items-center justify-center 
                        overflow-hidden group shadow-lg 
                        hover:-translate-y-2 transition-all duration-300"
            >
              {/* IMAGEM */}
              <img
                src={cliente.img}
                alt={cliente.nome}
                className="max-h-20 object-contain transition duration-300 
                          group-hover:scale-105"
              />

              {/* OVERLAY NO HOVER */}
              <div className="absolute inset-0 bg-blue-900/90 
                              flex items-center justify-center 
                              opacity-0 group-hover:opacity-100 
                              transition duration-300 px-4 text-center">
                <span className="text-white font-semibold text-sm">
                  {cliente.nome}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* FOOTER CORPORATIVO */}
      <footer className="bg-white py-16 px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between gap-10 text-gray-600 text-sm">
          <div>
            <h4 className="font-bold text-blue-900 mb-4">
              JBR Engenharia
            </h4>
            <p>
              Criando soluções inteligentes com excelência
              técnica e responsabilidade.
            </p>
          </div>

          <div className="space-y-2">
            <Link to="/" className="block hover:text-blue-900">
              Home
            </Link>
            <Link to="/sobre" className="block hover:text-blue-900">
              Sobre
            </Link>
            <Link to="/portfolio" className="block hover:text-blue-900">
              Portfólio
            </Link>
            <Link to="/contato" className="block hover:text-blue-900">
              Contato
            </Link>
          </div>
        </div>

        <p className="text-center mt-12 text-xs text-gray-400">
          © 2026 JBR Engenharia. Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}

export default Home;
