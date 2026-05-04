import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://metalfer.com.br"),
  title: `${COMPANY.fullName} | ${COMPANY.location}`,
  description: `${COMPANY.fullName} — ${COMPANY.description}`,
  keywords: [
    "corte de chapas",
    "dobra de chapas",
    "plasma",
    "oxicorte",
    "calandra",
    "peças para carretas",
    "metalúrgica",
    "Uberlândia",
    "MG",
    "Metalfer",
  ],
  openGraph: {
    title: COMPANY.fullName,
    description: COMPANY.description,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Metalfer Logo" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
