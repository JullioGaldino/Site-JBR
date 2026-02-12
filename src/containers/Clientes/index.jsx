import NavBar from "../../components/navBar";

// IMPORTAÇÃO DAS IMAGENS
import Cone from "../../components/img/Clientes/CONE - PE.jpg";
import Andrade from "../../components/img/Clientes/Construtora Andrade Gutierrez.jpg";
import Camargo from "../../components/img/Clientes/Construtora Camargo Corrêa.jpg";
import Odebrecht from "../../components/img/Clientes/Construtora Norberto Odebrecht.jpg";
import OAS from "../../components/img/Clientes/Construtora OAS.jpg";
import Queiroz from "../../components/img/Clientes/Construtora Queiroz Galvão.jpg";
import OdebrechtTransport from "../../components/img/Clientes/Odebrecht Transport. Participações S-A.jpg";
import Paulista from "../../components/img/Clientes/S.A. Paulista de Construções e Comércio.jpg";
import Transnordestina from "../../components/img/Clientes/Transnordestina Logística S-A.jpg";
import InfraRN from "../../components/img/Clientes/Sec. De Infraestrutura do RN.jpg";
import SecidPE from "../../components/img/Clientes/SECRETARIA DAS CIDADES (SECID-PE).jpg";
import GrupoFCA from "../../components/img/Clientes/Grupo FCA.jpg";
import DerPB from "../../components/img/Clientes/Departamento de Estradas de Rodagem (DER-PB).jpg";
import CBTU from "../../components/img/Clientes/Companhia Brasileira de Trens Urbanos (CBTU0-PE).jpg";
import Compesa from "../../components/img/Clientes/Compesa-PE.jpg";
import Suape from "../../components/img/Clientes/Complexo Industrial de Suape.jpg";
import Correios from "../../components/img/Clientes/Correios.jpg";
import SOP from "../../components/img/Clientes/SUPERINTENDÊNCIA DE OBRAS PÚBLICAS - SOP-CE.jpg";
import DerPE from "../../components/img/Clientes/Departamento de Estradas de Rodagem (DER-PE).jpg";
import Derba from "../../components/img/Clientes/Departamento de Infraestrutura de Transporte da Bahia (DERBA).jpg";
import DNIT from "../../components/img/Clientes/Departamento de Infraestrutura de Transportes (DNIT).jpg";
import URB from "../../components/img/Clientes/Empresa de Urbanização do Recife (URB-RECIFE).jpg";
import Galvao from "../../components/img/Clientes/Galvão Engenharia.jpg";
import NGTM from "../../components/img/Clientes/Núcleo de Gerenciamento de Transportes Metropolitano (NGTM).jpg";
import Petrobras from "../../components/img/Clientes/Petrobras Distribuidora. S-A.jpg";
import Campina from "../../components/img/Clientes/Prefeitura de Campina Grande (PB).jpg";
import Petrolina from "../../components/img/Clientes/Prefeitura de Petrolina (PE).jpg";
import Recife from "../../components/img/Clientes/Prefeitura do Recife (PE).jpg";
import EducacaoPE from "../../components/img/Clientes/Secretaria de Educação de Pernambuco.jpg";
import SETRA from "../../components/img/Clientes/Secretaria de Transportes de Pernambuco (SETRA-PE).jpg";
import CasaMilitar from "../../components/img/Clientes/Secretaria Especial da Casa Militar do Governo de Pernambuco.jpg";

function Clientes() {

  const clientes = [
    { nome: "Condomínio de Negócios (CONE-PE)", img: Cone },
    { nome: "Construtora Andrade Gutierrez S/A", img: Andrade },
    { nome: "Construtora Camargo Corrêa", img: Camargo },
    { nome: "Construtora Norberto Odebrecht S/A", img: Odebrecht },
    { nome: "Construtora OAS", img: OAS },
    { nome: "Construtora Queiroz Galvão", img: Queiroz },
    { nome: "Odebrecht Transport Participações S/A", img: OdebrechtTransport },
    { nome: "S.A. Paulista de Construções e Comércio", img: Paulista },
    { nome: "Transnordestina Logística S/A", img: Transnordestina },
    { nome: "Secretaria de Infraestrutura do RN", img: InfraRN },
    { nome: "Secretaria das Cidades (SECID/PE)", img: SecidPE },
    { nome: "Grupo FCA", img: GrupoFCA },
    { nome: "Departamento de Estradas de Rodagem (DER/PB)", img: DerPB },
    { nome: "Companhia Brasileira de Trens Urbanos (CBTU/PE)", img: CBTU },
    { nome: "Compesa/PE", img: Compesa },
    { nome: "Complexo Industrial de Suape", img: Suape },
    { nome: "Correios/PE", img: Correios },
    { nome: "Superintendência de Obras Públicas – SOP/CE", img: SOP },
    { nome: "Departamento de Estradas de Rodagem (DER/PE)", img: DerPE },
    { nome: "Departamento de Infraestrutura de Transporte da Bahia (DERBA)", img: Derba },
    { nome: "Departamento de Infraestrutura de Transportes (DNIT)", img: DNIT },
    { nome: "Empresa de Urbanização do Recife (URB/Recife)", img: URB },
    { nome: "Galvão Engenharia", img: Galvao },
    { nome: "Núcleo de Gerenciamento de Transportes Metropolitano (NGTM)", img: NGTM },
    { nome: "Petrobras Distribuidora S/A", img: Petrobras },
    { nome: "Prefeitura de Campina Grande (PB)", img: Campina },
    { nome: "Prefeitura de Petrolina (PE)", img: Petrolina },
    { nome: "Prefeitura do Recife (PE)", img: Recife },
    { nome: "Secretaria de Educação de Pernambuco", img: EducacaoPE },
    { nome: "Secretaria de Transportes de Pernambuco (SETRA/PE)", img: SETRA },
    { nome: "Secretaria Especial da Casa Militar do Governo de Pernambuco", img: CasaMilitar },
  ];

  return (
    <>
      <NavBar />

      <section className="relative bg-white py-24 px-6 overflow-hidden">

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
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {clientes.map((cliente, index) => (
              <div
                key={index}
                className="group bg-gray-50 border-2 border-gray-200 
                           rounded-2xl p-6 flex flex-col items-center text-center
                           shadow-sm hover:shadow-xl hover:border-amber-400
                           transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-24 h-24 flex items-center justify-center mb-6">
                  <img
                    src={cliente.img}
                    alt={cliente.nome}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <h3 className="text-sm font-semibold text-gray-800 leading-relaxed">
                  {cliente.nome}
                </h3>
              </div>
            ))}

          </div>

          {/* FOOTER */}
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