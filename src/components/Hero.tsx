import Image from "next/image";
import { COMPANY, WHATSAPP_FULL_URL, ap } from "@/lib/constants";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-55"
      >
        <source src={`${basePath}/corte-plasma.mp4`} type="video/mp4" />
      </video>

      {/* Dark overlay para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/80" />

      {/* Red gradient glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-[#CC1100]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <Image
            src={ap("/logo.png")}
            alt={COMPANY.name}
            width={180}
            height={180}
            className="object-contain drop-shadow-2xl mix-blend-screen"
            priority
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 tracking-tight leading-tight">
          {COMPANY.name}
        </h1>

        <p className="text-[#CC1100] font-bold text-lg sm:text-xl md:text-2xl mb-6 tracking-wider uppercase">
          Corte & Dobra
        </p>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {COMPANY.slogan}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_FULL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#CC1100] hover:bg-[#aa0e00] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-[#CC1100]/30"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Solicitar Orçamento
          </a>

          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-[#CC1100] text-gray-300 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200"
          >
            Nossos Serviços
          </a>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          📍 {COMPANY.location} — Atendimento personalizado para cada projeto
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
