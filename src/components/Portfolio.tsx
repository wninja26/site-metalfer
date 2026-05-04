"use client";

import Image from "next/image";
import { useState } from "react";
import { WHATSAPP_FULL_URL } from "@/lib/constants";

const photos = [
  { src: "/portfolio/corte-serie.jpg", alt: "Peças cortadas em série por plasma CNC" },
  { src: "/portfolio/pecas-dobradas.jpg", alt: "Peças dobradas — braçadeiras e suportes metálicos" },
  { src: "/portfolio/galpao-plasma.jpg", alt: "Galpão da Metalfer com máquina plasma e empilhadeira" },
  { src: "/portfolio/perfis-dobrados.jpg", alt: "Perfis metálicos dobrados em calha" },
  { src: "/portfolio/maquina-cnc.jpg", alt: "Máquina de corte CNC de grande porte" },
  { src: "/portfolio/chapas-brutas.jpg", alt: "Chapas de aço brutas prontas para corte" },
  { src: "/portfolio/dono-galpao.jpg", alt: "Estrutura e equipe da Metalfer Corte & Dobra" },
];

export default function Portfolio() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#CC1100] text-sm font-bold uppercase tracking-widest mb-4 block">
            Nossos Trabalhos
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Portfólio</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cada peça é produzida com precisão e cuidado. Clique nas fotos para ampliar.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {photos.map((photo) => (
            <button
              key={photo.src}
              onClick={() => setLightbox(photo.src)}
              className="group relative aspect-square overflow-hidden rounded-xl border border-gray-800 hover:border-[#CC1100]/60 transition-all duration-300"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </button>
          ))}

        </div>

        <div className="text-center bg-black border border-gray-800 rounded-xl p-8">
          <p className="text-white font-bold text-xl mb-2">
            Quer ver mais trabalhos?
          </p>
          <p className="text-gray-400 mb-6">
            Entre em contato pelo WhatsApp e peça nosso portfólio completo.
          </p>
          <a
            href={WHATSAPP_FULL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#CC1100] hover:bg-[#aa0e00] text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#CC1100] transition-colors"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={lightbox}
              alt="Foto ampliada"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
