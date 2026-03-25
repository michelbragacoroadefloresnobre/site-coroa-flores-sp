import type { Location } from "@/types/location"

const defaultSections = [
  {
    title: "Coroas Tradicionais",
    paragraphs: [
      "As coroas tradicionais são compostas por flores naturais como crisântemos, lírios e rosas brancas. São uma forma clássica e respeitosa de prestar homenagem, transmitindo sentimentos de carinho e saudade.",
      "Disponíveis em diferentes tamanhos, são indicadas para velórios, sepultamentos e celebrações de despedida.",
    ],
  },
  {
    title: "Coroas Ouro e Diamante",
    paragraphs: [
      "Para quem deseja uma homenagem mais elaborada, as coroas das categorias Ouro e Diamante contam com arranjos maiores e flores nobres como orquídeas, antúrios e rosas importadas.",
      "Essas opções são ideais para expressar um sentimento de grande admiração e respeito pela pessoa homenageada.",
    ],
  },
  {
    title: "Entrega com cuidado e pontualidade",
    paragraphs: [
      "A Coroa de Flores Nobre garante a entrega no local e horário combinados. Antes da entrega, enviamos uma foto da coroa pronta para sua aprovação, assegurando que tudo esteja perfeito para a homenagem.",
      "Nosso atendimento funciona 24 horas, incluindo feriados e finais de semana, para que você possa contar conosco sempre que precisar.",
    ],
  },
]

export function LocationTribute({ location }: { location: Location }) {
  const hasContent = location.tributeSections.length > 0

  if (hasContent) {
    const mainTitle = location.tributeSections[0]?.title
    const sections = location.tributeSections.slice(1)

    return (
      <section className="bg-[#F5F0EB] px-4 py-10 md:py-12">
        <div className="mx-auto max-w-[800px]">
          {mainTitle && (
            <h2 className="font-serif text-[26px] font-bold text-[#1A1A1A] md:text-[30px]">
              {mainTitle}
            </h2>
          )}

          {location.tributeSections[0]?.paragraphs.map((p, i) => (
            <p
              key={i}
              className="mt-4 text-[16px] leading-relaxed text-[#444444]"
            >
              {p}
            </p>
          ))}

          <div className="mt-10 space-y-8">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-[18px] font-bold text-[#1A1A1A] md:text-[20px]">
                  {section.title}
                </h3>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-[15px] leading-relaxed text-[#444444]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-[#F5F0EB] px-4 py-10 md:py-12">
      <div className="mx-auto max-w-[800px]">
        <h2 className="font-serif text-[26px] font-bold text-[#1A1A1A] md:text-[30px]">
          Como Escolher a Coroa de Flores Ideal para {location.name}
        </h2>

        <p className="mt-4 text-[16px] leading-relaxed text-[#444444]">
          Escolher a coroa de flores certa é uma forma significativa de prestar
          sua homenagem. Conheça as opções disponíveis para entrega em{" "}
          {location.name}, {location.city}.
        </p>

        <div className="mt-10 space-y-8">
          {defaultSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-[18px] font-bold text-[#1A1A1A] md:text-[20px]">
                {section.title}
              </h3>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-[15px] leading-relaxed text-[#444444]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
