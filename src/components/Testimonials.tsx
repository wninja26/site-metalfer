const reviews = [
  {
    name: "Jhon Neves",
    text: "Pessoal muito atencioso.. serviços e peças entregue antes do prazo tudo para sua carreta e caminhão os meninos lá são feras....",
  },
  {
    name: "Camila Alves De Andrade",
    text: "Pessoal muito educado, com agilidade e profissionalismo excelente!! Parceria de sucesso com eles! Só elogios! Muito sucesso e bênçãos de Deus para esse local!!",
  },
  {
    name: "Anderson da Silva Sousa",
    text: "ME GANHOU COMO CLIENTE , OTIMO PREÇO , E O QUE EU MAS PREZO QUE E O ATENDIMENTO EXCEPCIONAL .",
  },
  {
    name: "Larissa Camargos Fernandes",
    text: "Oferecendo o melhor aos colaboradores e clientes. Parabéns Samuel e Flávia e equipe!",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div className="w-10 h-10 rounded-full bg-[#CC1100] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
      {initials}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-400 text-lg">Avaliações reais do Google</p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="text-yellow-400 font-bold text-xl">5,0</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-400 text-sm">no Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-5 flex flex-col gap-3 hover:border-[#CC1100]/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <Avatar name={review.name} />
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">{review.name}</p>
                  <p className="text-gray-500 text-xs">Google</p>
                </div>
              </div>
              <Stars />
              <p className="text-gray-300 text-sm leading-relaxed flex-1">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
