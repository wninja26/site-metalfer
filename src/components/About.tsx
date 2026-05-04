import Image from "next/image";
import { COMPANY } from "@/lib/constants";

const stats = [
  { value: "Sob Medida", label: "Todo projeto é personalizado" },
  { value: "Uberlândia", label: "Base em MG, atendimento regional" },
  { value: "Carretas", label: "Especialistas em implementos" },
  { value: "Qualidade", label: "Compromisso em cada peça" },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-[#CC1100] text-sm font-bold uppercase tracking-widest mb-4 block">
              Sobre a Empresa
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
              Especialistas em metal,{" "}
              <span className="text-[#CC1100]">compromisso</span> com cada peça
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              A <strong className="text-white">Metalfer Corte & Dobra</strong> é uma empresa
              metalúrgica sediada em Uberlândia-MG, especializada em corte e dobra de chapas
              metálicas sob medida. Nosso foco é atender projetos personalizados com precisão,
              qualidade e agilidade.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Somos especialistas na fabricação de peças para carretas e implementos rodoviários,
              contando com equipamentos modernos como plasma CNC, oxicorte, calandra e prensa
              dobradeira. Cada projeto é único e recebe atenção total da nossa equipe.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Plasma CNC", "Oxicorte", "Calandra", "Dobra", "Montagem", "Peças para Carretas"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-black text-gray-300 border border-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Foto do dono + stats */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-800">
              <Image
                src="/portfolio/dono-galpao.jpg"
                alt="Dono da Metalfer no galpão industrial"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">
                Estrutura própria em Uberlândia-MG
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-black border border-gray-800 rounded-xl p-5 hover:border-[#CC1100]/50 transition-colors duration-300"
                >
                  <div className="text-[#CC1100] font-black text-lg mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
