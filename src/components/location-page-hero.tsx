import { MapPin } from "lucide-react"
import { SectionOrnament } from "@/components/section-ornament"
import type { Location } from "@/types/location"

export function LocationPageHero({ location }: { location: Location }) {
  return (
    <section className="flex w-full items-center justify-center bg-[#F5F0EB] pt-6 pb-12 md:pt-8 md:pb-14">
      <div className="px-4 text-center">
        <div className="mx-auto mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/80 px-4 py-1.5 text-[13px] font-medium text-[#2D5A3D]">
          <MapPin className="size-3.5" />
          {location.city}, {location.uf}
        </div>

        <h1 className="mx-auto max-w-[700px] font-serif text-[30px] leading-tight font-extrabold text-[#1A1A1A] sm:text-[38px] md:text-[42px]">
          {location.title}
        </h1>

        <SectionOrnament className="mt-4" />

        <p className="mx-auto mt-4 max-w-[620px] text-[16px] leading-relaxed text-[#555555] md:text-[17px]">
          {location.introduction}
        </p>
      </div>
    </section>
  )
}
