import NavBar from "../../components/navBar"

// Imagens CLientes
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

// Imagens Projetos

import ViaMangue from "../../components/img/Projetos/Via-mangue.jpg"
import TriplicacaoPE015 from "../../components/img/Projetos/Triplicação-PE.jpg"
import DuplicacaoBR232 from "../../components/img/Projetos/Duplicação-BR-232-PE.jpg"
import PavimentacaoBR135 from "../../components/img/Projetos/Pavimentação-BR-135-PI.jpg"
import PonteRioSaoFrancisco from "../../components/img/Projetos/Ponte-sobre-rio-sao-francisco.jpg"
import MetroRecife from "../../components/img/Projetos/Expansão-do-Metrô-de-Recife.jpg"
import HondaAmazonas from "../../components/img/Projetos/Moto-Honda-da-Amazônia.jpg"
import Transnordestina from "../../components/img/Projetos/Ferrovia-Transnordestina.jpg"
import AbreuELima from "../../components/img/Projetos/Refinaria-Abreu-e-Lima.jpg"





function Home() {

    const projetos = [
    { id: "via-mangue", titulo: "Via Mangue", img: ViaMangue },
    { id: "triplicacao-pe-015", titulo: "Triplicação PE-015", img: TriplicacaoPE015 },
    { id: "duplicacao-br-232", titulo: "Duplicação BR-232", img: DuplicacaoBR232 },
    { id: "pavimentacao-br-135", titulo: "Pavimentação BR-135 PI", img: PavimentacaoBR135 },
    { id: "ponte-rio-sao-francisco", titulo: "Ponte Rio São Francisco", img: PonteRioSaoFrancisco },
    { id: "metro-recife", titulo: "Expansão do Metrô Recife", img: MetroRecife },
    { id: "honda-amazonas", titulo: "Honda – Amazonas", img: HondaAmazonas },
    { id: "transnordestina", titulo: "Ferrovia Transnordestina", img: Transnordestina },
    { id: "abreu-e-lima", titulo: "Refinaria Abreu e Lima", img: AbreuELima },
    ]

    const clientes = [
            { nome: "Sec. de Infraestrutura do RN", img: ClienteRN },
            { nome: "Secretaria das Cidades (SECID/PE)", img: ClienteSECID },
            { nome: "Grupo FCA", img: ClienteFCA },
            { nome: "Departamento de Estradas de Rodagem (DER/PB)", img: ClienteDERPB },
            { nome: "Companhia Brasileira de Trens Urbanos (CBTU/PE)", img: ClienteCBTU },
            { nome: "Compesa/PE", img: ClienteCompesa },
            { nome: "Complexo Industrial de Suape", img: ClienteSuape },
            { nome: "Departamento de Estradas de Rodagem (DER/PE)", img: ClienteDERPE },
            { nome: "Superintendência de Obras Públicas - SOP/CE", img: ClienteSOP },
            { nome: "Departamento de Infraestrutura de Transportes (DNIT)", img: ClienteDNIT },
            ]
            
  return (
    <>
      <NavBar />

        {/* HERO */}
        <section className="relative min-h-screen w-full">
            {/* BACKGROUND IMAGE */}
            <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${ViaMangue})` }}
            />

            {/* GRADIENTE DO HERO */}
            <div className="absolute inset-0 bg-linear-to-t from-blue-800/100 via-bluefrom-blue-800/70 to-transparent" />

            {/* CONTEÚDO DO HERO */}
            <div className="relative z-10 flex min-h-screen items-center px-8">
            <div className="flex flex-col gap-4">            
                <h1 className="text-white text-8xl font-bold leading-none">JBR</h1>
                <h2 className="text-white text-8xl font-bold leading-none">Engenharia</h2>
                <p className="mt-5 text-white text-4xl">Criando soluções  <span className="text-amber-300">inteligentes</span></p>
            </div>
            </div>
        </section>

        {/* SEÇÃO EXPERIÊNCIA */}
        <section className="relative px-8 py-24 bg-blue-800">
        <h2 className="mb-16 text-4xl font-bold text-white">
            Experiência em{" "}
            <span className="text-amber-300">projetos de grande porte</span>
        </h2>

        {/* GRID DE PROJETOS */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projetos.map((projeto) => (
            <div
                key={projeto.id}
                className="relative group h-72 rounded-xl overflow-hidden"
                style={{ backgroundImage: `url(${projeto.img})` }}
            >
                {/* IMAGEM */}
                <div className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110" />

                {/* GRADIENTE */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

                {/* TEXTO */}
                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white">
                    {projeto.titulo}
                </h3>

                <button
                    className="mt-4 w-max rounded-md bg-amber-400 px-4 py-2 
                            text-sm font-semibold text-black opacity-0 
                            transition group-hover:opacity-100"
                >
                    Ver detalhes
                </button>
                </div>
            </div>
            ))}
        </div>

        {/* BOTÃO MAIS PROJETOS */}
        <div className="mt-20 flex justify-center">
            <a
            href="/portfolio"
            className="rounded-full bg-white px-8 py-4 
                        font-semibold text-blue-800 transition hover:bg-amber-300"
            >
            Mais projetos
            </a>
        </div>
        </section>

        {/* SEÇÃO CLIENTES */}
        <section className="relative bg-blue-800 px-8 py-24">
        <h2 className="mb-16 text-left text-4xl font-bold text-white">
            Nossos clientes
        </h2>

        <div className="mx-auto grid max-w-7xl gap-10 
                        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {clientes.map((cliente, index) => (
            <div
                key={index}
                className="group flex flex-col items-center gap-4 text-center"
            >
                <div
                className="flex h-28 w-full items-center justify-center 
                            rounded-xl bg-white p-4 shadow-md 
                            transition group-hover:scale-105"
                >
                <img
                    src={cliente.img}
                    alt={cliente.nome}
                    className="max-h-16 object-contain"
                />
                </div>

                <span className="text-sm font-medium text-white/90">
                {cliente.nome}
                </span>
            </div>
            ))}
        </div>
        </section>

        {/* RODAPÉ */}
        <footer className="relative bg-blue-800 pt-32">

        {/* ONDA */}
        <svg
            className="absolute top-0 left-0 w-full h-36"
            viewBox="0 0 1440 140"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            <path
            d="M0,80 C240,140 480,140 720,80 C960,20 1200,20 1440,80 L1440,140 L0,140 Z"
            fill="#ffffff"
            />
        </svg>

        {/* CONTEÚDO DO FOOTER */}
        <div className="relative z-10 flex justify-center px-8 pb-24">
            <div className="flex flex-wrap justify-center gap-6">

            <a
                href="#"
                className="rounded-full bg-white px-8 py-4 
                        font-semibold text-blue-800 
                        transition hover:bg-amber-300"
            >
                Solicite uma proposta
            </a>

            <a
                href="#"
                className="rounded-full bg-white px-8 py-4 
                        font-semibold text-blue-800 
                        transition hover:bg-amber-300"
            >
                Fornecedores
            </a>

            <a
                href="#"
                className="rounded-full bg-white px-8 py-4 
                        font-semibold text-blue-800 
                        transition hover:bg-amber-300"
            >
                Trabalhe conosco
            </a>

            <a
                href="#"
                className="rounded-full bg-white px-8 py-4 
                        font-semibold text-blue-800 
                        transition hover:bg-amber-300"
            >
                Denúncias
            </a>

            </div>
        </div>
        </footer>


    </>
  )
}

export default Home
