import type { Location } from "@/types/location"
import contact from "@/data/contact.json"

const BASE_URL = "https://coroadefloresnobre.com.br"

export function buildLocalBusinessSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Coroa de Flores Nobre — ${location.name}`,
    description: location.introduction.slice(0, 200),
    url: `${BASE_URL}/locais/${location.slug}`,
    telephone: contact.phoneFormatted,
    email: contact.email,
    areaServed: {
      "@type": "City",
      name: location.city,
      containedInPlace: {
        "@type": "State",
        name: "São Paulo",
      },
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "R$315 - R$3.500",
  }
}

export function buildBreadcrumbSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locais de Entrega",
        item: `${BASE_URL}/locais`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.name,
        item: `${BASE_URL}/locais/${location.slug}`,
      },
    ],
  }
}

export function buildServiceSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Entrega de Coroa de Flores",
    provider: {
      "@type": "LocalBusiness",
      name: "Coroa de Flores Nobre",
      telephone: contact.phoneFormatted,
    },
    areaServed: {
      "@type": "City",
      name: location.city,
    },
    description: `Entrega de coroa de flores em ${location.name}, ${location.city} em até 1 hora.`,
  }
}
