import type { Location } from "@/types/location"

export function LocationInfo({ location }: { location: Location }) {
  if (location.infoSections.length === 0) return null

  const mainTitle = location.infoSections[0]?.title
  const sections = location.infoSections.slice(1)

  return (
    <section className="px-4 py-10 md:py-12">
      <div className="mx-auto max-w-[800px]">
        {mainTitle && (
          <h2 className="font-serif text-[26px] font-bold text-[#1A1A1A] md:text-[30px]">
            {mainTitle}
          </h2>
        )}

        {location.infoSections[0]?.paragraphs.map((p, i) => (
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
