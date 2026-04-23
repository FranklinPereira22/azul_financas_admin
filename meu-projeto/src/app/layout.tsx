import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azul Finanças - Admin",
  description: "Controle financeiro inteligente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      /* 1. Adicione suppressHydrationWarning para evitar erros de 
            atribuição de classe (dark/light) entre servidor e cliente */
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* 2. O body deve ocupar a altura total e permitir que o 
            fundo definido no globals.css preencha tudo */}
      <body className="min-h-full bg-[var(--color-app-bg)] transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}