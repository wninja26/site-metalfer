export const WHATSAPP_NUMBER = "5534999752868";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da Metalfer e gostaria de solicitar um orçamento."
);
export const WHATSAPP_FULL_URL = `${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`;

export const COMPANY = {
  name: "Metalfer",
  fullName: "Metalfer Corte & Dobra",
  slogan: "Precisão em Metal, Soluções Sob Medida",
  description:
    "Especialistas em corte e dobra de chapas metálicas, com foco em peças para carretas e implementos. Atendemos projetos personalizados com qualidade, agilidade e tecnologia.",
  location: "Uberlândia-MG",
  email: "contato@metalfer.com.br",
  instagram: "https://www.instagram.com/metalfer.udia/",
  instagramHandle: "@metalfer.udia",
  phone: "(34) 99975-2868",
};

export const SERVICES = [
  {
    title: "Corte Plasma",
    description:
      "Corte de alta precisão em chapas de aço, inox e alumínio com tecnologia plasma CNC.",
    icon: "⚡",
  },
  {
    title: "Oxicorte",
    description:
      "Corte por chama oxiacetilênica para chapas de grande espessura com acabamento de qualidade.",
    icon: "🔥",
  },
  {
    title: "Dobra de Chapas",
    description:
      "Dobramento sob medida com calandra e prensa dobradeira para perfis e peças complexas.",
    icon: "🔩",
  },
  {
    title: "Calandra",
    description:
      "Calandragem para formação de cilindros, cones e curvas em chapas metálicas de variadas espessuras.",
    icon: "⚙️",
  },
  {
    title: "Peças para Carretas",
    description:
      "Fabricação especializada de peças e componentes metálicos para carretas e implementos rodoviários.",
    icon: "🚛",
  },
  {
    title: "Montagem Geral",
    description:
      "Montagem e solda de estruturas metálicas completas, com acabamento e controle de qualidade.",
    icon: "🏗️",
  },
];

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];
