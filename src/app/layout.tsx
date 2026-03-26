import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import { getBaseUrl } from "@/lib/base-url";
import "./globals.css";

const GTM_ID = "GTM-T257GJJB";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Coroa de Flores Nobre | Entrega em São Paulo e Região",
    template: "%s | Coroa de Flores Nobre",
  },
  description:
    "Entrega de coroa de flores em São Paulo e região metropolitana. Atendimento 24h, entrega em até 1 hora com foto antes da entrega.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Coroa de Flores Nobre | Entrega em São Paulo e Região",
    description:
      "Entrega de coroa de flores em São Paulo e região metropolitana. Atendimento 24h, entrega em até 1 hora com foto antes da entrega.",
    url: "/",
    siteName: "Coroa de Flores Nobre",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coroa de Flores Nobre — Entrega em São Paulo e Região",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coroa de Flores Nobre | Entrega em São Paulo e Região",
    description:
      "Entrega de coroa de flores em São Paulo e região metropolitana. Atendimento 24h, entrega em até 1 hora com foto antes da entrega.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
          <Header />
          {children}
          <Footer />
          <FloatingWhatsapp />
        </body>
    </html>
  );
}
