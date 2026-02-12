import { useState } from "react";
import NavBar from "../../components/navBar";

export default function Contato() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Obrigado por sua mensagem! Entraremos em contato em breve.");
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <NavBar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
            Entre em Contato
          </h1>
          <p className="text-lg sm:text-xl opacity-90">
            Estamos aqui para ouvir você e responder suas dúvidas
          </p>
        </div>
      </section>

      {/* CONTATO */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          {/* INFORMAÇÕES */}
          <div className="bg-gray-100 p-10 rounded-xl border-l-4 border-amber-400">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">
              Informações de Contato
            </h2>

            <div className="space-y-8">

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-900 text-amber-400 rounded-full flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">Endereço</h3>
                  <p className="text-gray-700 text-sm">
                    Rua Irmã Maria David, 297 – Casa Forte<br />
                    Recife/PE – CEP: 52.061-070
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-900 text-amber-400 rounded-full flex items-center justify-center text-xl">
                  📞
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">Telefone</h3>
                  <a
                    href="tel:+558132418508"
                    className="text-blue-900 font-semibold hover:text-amber-500"
                  >
                    (81) 3241-8508
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-900 text-amber-400 rounded-full flex items-center justify-center text-xl">
                  ✉️
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">Email</h3>
                  <a
                    href="mailto:contato@jbr.eng.br"
                    className="text-blue-900 font-semibold hover:text-amber-500"
                  >
                    contato@jbr.eng.br
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-900 text-amber-400 rounded-full flex items-center justify-center text-xl">
                  🕐
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-sm text-gray-700">
                    Segunda a Quinta: 08:00 – 18:00<br />
                    Sexta: 08:00 – 17:00
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* FORMULÁRIO */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-xl border shadow-md"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-8">
              Envie uma Mensagem
            </h2>

            <div className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Nome Completo *"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:border-amber-400 focus:outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:border-amber-400 focus:outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Telefone"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:border-amber-400 focus:outline-none"
              />

              <input
                type="text"
                name="subject"
                placeholder="Assunto *"
                required
                value={form.subject}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:border-amber-400 focus:outline-none"
              />

              <textarea
                name="message"
                placeholder="Mensagem *"
                required
                rows="5"
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:border-amber-400 focus:outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-3 rounded-lg font-bold hover:scale-[1.02] transition shadow-lg"
              >
                Enviar Mensagem
              </button>

            </div>
          </form>

        </div>
      </section>

      {/* MAPA */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-10">
            Localização
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px]">
            <iframe
              title="Mapa JBR Engenharia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2959547824997!2d-34.9240995!3d-8.031375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19a6c3075867%3A0x2908fddabea98a39!2sR.%20Irm%C3%A3%20Maria%20David%2C%20297%20-%20Casa%20Forte%2C%20Recife%20-%20PE%2C%2052061-070!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>


      {/* HORÁRIOS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-12">
            Horário de Atendimento
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ["Seg a Qui", "08:00 - 18:00"],
              ["Sexta", "08:00 - 17:00"],
              ["Sábado", "09:00 - 13:00"],
              ["Domingo", "Fechado"],
            ].map(([dia, hora], i) => (
              <div
                key={i}
                className="bg-gray-100 p-6 rounded-xl border-l-4 border-amber-400 text-center"
              >
                <h3 className="font-bold text-blue-900 mb-2">{dia}</h3>
                <p className="text-amber-500 font-semibold">{hora}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white text-center py-6">
        © 2026 JBR Engenharia. Todos os direitos reservados.
      </footer>
    </>
  );
}
