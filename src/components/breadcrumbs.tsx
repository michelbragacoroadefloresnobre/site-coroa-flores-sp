import Link from "next/link"
import { ChevronRight } from "lucide-react"

type BreadcrumbItem = {
  label: string
  href?: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto max-w-[1200px] px-4 pt-24 pb-2 md:pt-28"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-[#6B6B6B]">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            {index > 0 && (
              <ChevronRight className="size-3.5 text-[#C0B8AD]" />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-[#2D5A3D]"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-[#1A1A1A]">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
