import NavBar from "../../components/navBar"

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
      <section className="z-100 relative min-h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ViaMangue})` }}
        />

        <div className="absolute inset-0 bg-linear-to-t from-blue-800/100 via-blue-800/70 to-transparent" />

        <div className="relative flex min-h-screen items-center px-4 sm:px-8">
          <div className="flex flex-col gap-2 sm:gap-4">
            <h1 className="text-white text-5xl sm:text-7xl lg:text-8xl font-bold leading-none">
              JBR
            </h1>
            <h2 className="text-white text-5xl sm:text-7xl lg:text-8xl font-bold leading-none">
              Engenharia
            </h2>
            <p className="mt-4 text-white text-xl sm:text-3xl lg:text-4xl">
              Criando soluções <span className="text-amber-300">inteligentes</span>
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="bg-blue-800 px-4 sm:px-8 py-16 sm:py-24">
        <h2 className="mb-8 sm:mb-10 text-2xl sm:text-4xl font-bold text-white">
          Experiência em <span className="text-amber-300">projetos de grande porte</span>
        </h2>

        <div className="grid gap-6 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projetos.map((p) => (
            <div
              key={p.id}
              className="relative h-52 rounded-xl overflow-hidden group"
              style={{ backgroundImage: `url(${p.img})` }}
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

              <div className="relative z-10 flex h-full flex-col justify-end p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {p.titulo}
                </h3>

                <button className="mt-3 w-max rounded-md bg-amber-400 px-4 py-2 text-sm font-semibold text-black opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition">
                  Ver detalhes
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="/portfolio"
            className="rounded-full bg-white px-8 py-4 font-semibold text-blue-800 hover:bg-amber-300 transition"
          >
            Mais projetos
          </a>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="bg-blue-800 px-4 sm:px-8 py-16 sm:py-24">
        <h2 className="mb-10 sm:mb-16 text-2xl sm:text-4xl font-bold text-white">
          Nossos clientes
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {clientes.map((c, i) => (
            <div key={i} className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-28 w-full items-center justify-center rounded-xl bg-white p-4 shadow-md">
                <img src={c.img} alt={c.nome} className="max-h-16 object-contain" />
              </div>
              <span className="text-sm text-white/90">{c.nome}</span>
            </div>
          ))}
        </div>
      </section>

        {/* FOOTER */}
        <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-white">
                <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
                    <a href="https://prebuiltui.com">
                        <svg width="31" height="34" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m8.75 5.3 6.75 3.884 6.75-3.885M8.75 28.58v-7.755L2 16.939m27 0-6.75 3.885v7.754M2.405 9.408 15.5 16.954l13.095-7.546M15.5 32V16.939M29 22.915V10.962a2.98 2.98 0 0 0-1.5-2.585L17 2.4a3.01 3.01 0 0 0-3 0L3.5 8.377A3 3 0 0 0 2 10.962v11.953A2.98 2.98 0 0 0 3.5 25.5L14 31.477a3.01 3.01 0 0 0 3 0L27.5 25.5a3 3 0 0 0 1.5-2.585" stroke="url(#a)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <defs>
                                <linearGradient id="a" x1="15.5" y1="2" x2="15.5" y2="32" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F8FAFC"/>
                                <stop offset="1" stop-color="#383838"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </a>
                    <div>
                        <p className="text-slate-100 font-semibold">Product</p>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/" className="hover:text-indigo-600 transition">Home</a></li>
                            <li><a href="/" className="hover:text-indigo-600 transition">Support</a></li>
                            <li><a href="/" className="hover:text-indigo-600 transition">Pricing</a></li>
                            <li><a href="/" className="hover:text-indigo-600 transition">Affiliate</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-slate-100 font-semibold">Resources</p>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/" className="hover:text-indigo-600 transition">Company</a></li>
                            <li><a href="/" className="hover:text-indigo-600 transition">Blogs</a></li>
                            <li><a href="/" className="hover:text-indigo-600 transition">Community</a></li>
                            <li><a href="/" className="hover:text-indigo-600 transition">Careers<span className="text-xs text-white bg-indigo-600 rounded-md ml-2 px-2 py-1">We’re hiring!</span></a></li>
                            <li><a href="/" className="hover:text-indigo-600 transition">About</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-slate-100 font-semibold">Legal</p>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/" className="hover:text-indigo-600 transition">Privacy</a></li>
                            <li><a href="/" className="hover:text-indigo-600 transition">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
                    <p className="max-w-60">Making every customer feel valued—no matter the size of your audience.</p>
                    <div className="flex items-center gap-4 mt-3">
                        <a href="https://dribbble.com/prebuiltui" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dribbble size-5 hover:text-indigo-500" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/prebuiltui" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin size-5 hover:text-indigo-500" aria-hidden="true">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect width="4" height="12" x="2" y="9"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                        <a href="https://x.com/prebuiltui" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter size-5 hover:text-indigo-500" aria-hidden="true">
                                <path
                                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
                                </path>
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/@prebuiltui" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube size-6 hover:text-indigo-500" aria-hidden="true">
                                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17">
                                </path>
                                <path d="m10 15 5-3-5-3z"></path>
                            </svg>
                        </a>
                    </div>
                    <p className="mt-3 text-center">© 2025 <a href="https://prebuiltui.com">PrebuiltUI</a></p>
                </div>
        </footer>

    </>
  )
}

export default Home
