import { Link } from "react-router-dom";
import NavBar from "../../components/navBar";
import { useEffect, useState } from "react";

/* ================= IMAGENS PROJETOS ================= */
import ViaMangue from "../../components/img/Projetos/Via-mangue.jpg";
import TriplicacaoPE015 from "../../components/img/Projetos/Triplicacao-PE.jpg";
import DuplicacaoBR232 from "../../components/img/Projetos/Duplicação-BR-232-PE.jpg";
import PavimentacaoBR135 from "../../components/img/Projetos/Pavimentação-BR-135-PI.jpg";
import PonteRioSaoFrancisco from "../../components/img/Projetos/Ponte-sobre-rio-sao-francisco.jpg";
import MetroRecife from "../../components/img/Projetos/Expansão-do-Metrô-de-Recife.jpg";
import HondaAmazonas from "../../components/img/Projetos/Moto-Honda-da-Amazônia.jpg";
import Transnordestina from "../../components/img/Projetos/Ferrovia-Transnordestina.jpg";
import AbreuELima from "../../components/img/Projetos/Refinaria-Abreu-e-Lima.jpg";

/* ================= IMAGENS CLIENTES ================= */
import ClienteRN from "../../components/img/Clientes/Sec. De Infraestrutura do RN.jpg";
import ClienteSECID from "../../components/img/Clientes/SECRETARIA DAS CIDADES (SECID-PE).jpg";
import ClienteFCA from "../../components/img/Clientes/Grupo FCA.jpg";
import ClienteDERPB from "../../components/img/Clientes/Departamento de Estradas de Rodagem (DER-PB).jpg";
import ClienteCBTU from "../../components/img/Clientes/Companhia Brasileira de Trens Urbanos (CBTU0-PE).jpg";
import ClienteCompesa from "../../components/img/Clientes/Compesa-PE.jpg";
import ClienteSuape from "../../components/img/Clientes/Complexo Industrial de Suape.jpg";
import ClienteDERPE from "../../components/img/Clientes/Departamento de Estradas de Rodagem (DER-PE).jpg";
import ClienteSOP from "../../components/img/Clientes/SUPERINTENDÊNCIA DE OBRAS PÚBLICAS - SOP-CE.jpg";
import ClienteDNIT from "../../components/img/Clientes/Departamento de Infraestrutura de Transportes (DNIT).jpg";

/* ================= HOOK CONTADOR SUAVE ================= */
function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);

      const eased = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(eased * target));

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [target, duration]);

  return count;
}

function Stat({ target, label, suffix = "" }) {
  const value = useCounter(target);
  return (
    <div>
      <h3 className="text-4xl font-extrabold text-amber-400">
        {value}
        {suffix}
      </h3>
      <p className="text-white/80 mt-2">{label}</p>
    </div>
  );
}

function Home() {
  const projetos = [
    {
      id: "via-mangue",
      titulo: "Via Mangue",
      descricao:
        "Obra de mobilidade urbana com pontes e soluções viárias estratégicas.",
      img: ViaMangue,
    },
    {
      id: "pe-015",
      titulo: "Triplicação PE-015",
      descricao:
        "Ampliação da capacidade viária com foco em mobilidade e segurança.",
      img: TriplicacaoPE015,
    },
    {
      id: "br-232",
      titulo: "Duplicação BR-232",
      descricao:
        "124 km de duplicação e modernização rodoviária em Pernambuco.",
      img: DuplicacaoBR232,
    },
    {
      id: "br-135",
      titulo: "Pavimentação BR-135",
      descricao:
        "Trecho estratégico para escoamento logístico no Nordeste.",
      img: PavimentacaoBR135,
    },
    {
      id: "ponte-sf",
      titulo: "Ponte Rio São Francisco",
      descricao:
        "Estrutura especial de grande porte com alta complexidade técnica.",
      img: PonteRioSaoFrancisco,
    },
    {
      id: "metro-expansao",
      titulo: "Expansão do Metrô Recife",
      descricao:
        "Ampliação do sistema metroviário com obras civis estruturais.",
      img: MetroRecife,
    },
    {
      id: "honda-am",
      titulo: "Honda – Amazonas",
      descricao:
        "Obras industriais para unidade fabril de grande escala.",
      img: HondaAmazonas,
    },
    {
      id: "transnordestina",
      titulo: "Ferrovia Transnordestina",
      descricao:
        "Projeto ferroviário estratégico para transporte de cargas.",
      img: Transnordestina,
    },
    {
      id: "abreu-lima",
      titulo: "Refinaria Abreu e Lima",
      descricao:
        "Empreendimento industrial no setor de petróleo e energia.",
      img: AbreuELima,
    },
  ];

  const clientes = [
    { nome: "Sec. Infraestrutura RN", img: ClienteRN },
    { nome: "SECID/PE", img: ClienteSECID },
    { nome: "Grupo FCA", img: ClienteFCA },
    { nome: "DER/PB", img: ClienteDERPB },
    { nome: "CBTU/PE", img: ClienteCBTU },
    { nome: "Compesa/PE", img: ClienteCompesa },
    { nome: "Complexo Suape", img: ClienteSuape },
    { nome: "DER/PE", img: ClienteDERPE },
    { nome: "SOP/CE", img: ClienteSOP },
    { nome: "DNIT", img: ClienteDNIT },
  ];

  function StatCard({ value, suffix, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="bg-blue-800 border border-white/10 rounded-xl p-8 
                    shadow-lg hover:shadow-xl transition">

      <h3 className="text-4xl font-extrabold text-amber-400">
        {count}{suffix}
      </h3>

      <p className="text-white/80 mt-3 text-sm tracking-wide">
        {label}
      </p>

      {/* BARRA DINÂMICA */}
      <div className="mt-4 h-1 w-full bg-white/10 rounded">
        <div
          className="h-1 bg-amber-400 rounded transition-all duration-2000"
          style={{ width: `${(count / value) * 100}%` }}
        />
      </div>
    </div>
  );
}


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
          <h1 className="text-6xl font-bold">JBR Engenharia</h1>
          <p className="mt-6 text-xl">
            Criando soluções{" "}
            <span className="text-amber-400 font-semibold">
              inteligentes
            </span>
          </p>
        </div>
      </section>

      {/* EXPERIÊNCIA CORPORATIVA DINÂMICA */}
      <section className="relative bg-blue-900 px-6 md:px-16 py-32 overflow-hidden">

        {/* GRID TÉCNICO DE FUNDO */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full 
            bg-[linear-gradient(#ffffff22_1px,transparent_1px),
            linear-gradient(90deg,#ffffff22_1px,transparent_1px)] 
            bg-[size:70px_70px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">

          {/* TÍTULO */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">Experiência em grandes projetos</h2>
            <div className="w-28 h-1 bg-amber-400 mx-auto mt-6 rounded-full" />
          </div>

          {/* INDICADORES ANIMADOS */}
          <div className="grid md:grid-cols-4 gap-10 mb-28 text-center">

            <StatCard value={120} suffix="+" label="Projetos Executados" />
            <StatCard value={30} suffix="+" label="Anos de Experiência" />
            <StatCard value={98} suffix="%" label="Satisfação" />
            <StatCard value={15} suffix="" label="Estados Atendidos" />

          </div>

          {/* GRID DE PROJETOS DINÂMICO */}
          <div className="grid md:grid-cols-3 gap-10 auto-rows-[260px]">

            {projetos.map((p, index) => (
              <div
                key={p.id}
                className={`
                  group relative overflow-hidden rounded-xl
                  border border-white/10
                  bg-blue-800
                  shadow-lg
                  hover:shadow-2xl
                  hover:-translate-y-3
                  transition-all duration-500
                  ${index % 3 === 0 ? "md:row-span-2" : ""}
                `}
              >

                {/* IMAGEM */}
                <div
                  className="absolute inset-0 bg-cover bg-center 
                            group-hover:scale-110 transition duration-700"
                  style={{ backgroundImage: `url(${p.img})` }}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />

                {/* CONTEÚDO */}
                <div className="relative z-10 p-6 flex flex-col justify-end h-full">

                  <span className="text-xs tracking-widest text-amber-400 uppercase">
                    Projeto Estratégico
                  </span>

                  <h3 className="text-xl font-bold text-white mt-2">
                    {p.titulo}
                  </h3>

                  <p className="text-white/70 mt-3 text-sm leading-relaxed">
                    {p.descricao}
                  </p>

                  <Link
                    to={`/portfolio?project=${p.id}`}
                    className="mt-5 inline-block text-sm font-semibold 
                              text-amber-400 hover:text-white transition"
                  >
                    Ver detalhes →
                  </Link>
                </div>

                {/* BARRA LATERAL CORPORATIVA */}
                <div className="absolute top-0 right-0 w-1 h-full bg-amber-400 opacity-70" />

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* CLIENTES */}
      <section className="bg-blue-900 px-6 md:px-16 py-24">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">
          Nossos Clientes
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {clientes.map((cliente, i) => (
            <div
              key={i}
              className="relative bg-white h-32 rounded-2xl 
                        flex items-center justify-center 
                        overflow-hidden group shadow-lg"
            >
              <img
                src={cliente.img}
                alt={cliente.nome}
                className="max-h-20 object-contain"
              />
              <div className="absolute inset-0 bg-blue-900/90 
                              flex items-center justify-center 
                              opacity-0 group-hover:opacity-100 
                              transition px-4 text-center">
                <span className="text-white text-sm">
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
