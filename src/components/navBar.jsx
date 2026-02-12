import { useState } from "react";
import LogoJBR from "../components/img/Logo-JBR.jpg";
import { Link } from "react-router-dom"

export default function NavBar() {
  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <nav className="z-200 relative h-20 rounded-bl-3xl rounded-br-3xl bg-white after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          {/* Botão menu mobile */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMenuMobile(!menuMobile)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-none"
            >
              {!menuMobile ? (
                <svg className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo + Menu desktop */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link to={"/"}>
                <img src={LogoJBR} alt="Logo JBR" className="h-12 w-auto sm:mt-2"/>
              </Link>
              
            </div>

            <div className="hidden sm:block absolute right-6 top-1/2 -translate-y-1/2">
              <div className="flex space-x-4 mt-5">
                <Link to="/sobre" className="rounded-md px-3 py-2 font-bold text-blue-900">SOBRE A EMPRESA</Link>
                <Link to="/servicos" className="rounded-md px-3 py-2 font-bold text-blue-900">SERVIÇOS</Link>
                <Link to="/clientes" className="rounded-md px-3 py-2 font-bold text-blue-900">CLIENTES</Link>
                <Link to="/portfolio" className="rounded-md px-3 py-2 font-bold text-blue-900">PORTFÓLIO</Link>
                <Link to="/instituto" className="rounded-md px-3 py-2 font-bold text-blue-900">INSTITUTO</Link>
                <Link to="/contato" className="rounded-md px-3 py-2 font-bold text-blue-900">CONTATO</Link>
              </div>
            </div>
          </div>

        
        </div>
      </div>

      {/* Menu mobile */}
      {menuMobile && (
        <div className="z-100 mt-10 sm:hidden px-4 pt-4 pb-6 space-y-2 bg-white/50 rounded-4xl">
          <a href="#" className="block rounded-md px-4 py-3 text-base font-bold text-blue-900 bg-white/90 hover:bg-gray-100">SOBRE A EMPRESA</a>
          <a href="#" className="block rounded-md px-4 py-3 text-base font-bold text-blue-900 bg-white/90 hover:bg-gray-100">SERVIÇOS</a>
          <a href="#" className="block rounded-md px-4 py-3 text-base font-bold text-blue-900 bg-white/90 hover:bg-gray-100">CLIENTES</a>
          <a href="#" className="block rounded-md px-4 py-3 text-base font-bold text-blue-900 bg-white/90 hover:bg-gray-100">PORTFÓLIO</a>
          <a href="#" className="block rounded-md px-4 py-3 text-base font-bold text-blue-900 bg-white/90 hover:bg-gray-100">INSTITUTO</a>
          <a href="#" className="block rounded-md px-4 py-3 text-base font-bold text-blue-900 bg-white/90 hover:bg-gray-100">CONTATO</a>
        </div>
      )}

    </nav>
  );
}
