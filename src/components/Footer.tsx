import Image from "next/image";
import { COMPANY, NAV_LINKS, WHATSAPP_FULL_URL } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt={COMPANY.name} width={36} height={36} className="object-contain" />
              <span className="font-black text-white text-lg">{COMPANY.name}</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Especialistas em corte e dobra de chapas metálicas sob medida.
              Uberlândia-MG.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Navegação
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#CC1100] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Contato
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={WHATSAPP_FULL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#CC1100] transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-gray-500 hover:text-[#CC1100] transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#CC1100] transition-colors"
                >
                  {COMPANY.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {year} {COMPANY.fullName}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#CC1100]" />
            <span className="text-gray-600 text-sm">{COMPANY.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
