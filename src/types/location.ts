export type LocationSection = {
  title: string
  paragraphs: string[]
}

export type Location = {
  slug: string
  name: string
  city: string
  uf: string
  title: string
  introduction: string
  infoSections: LocationSection[]
  tributeSections: LocationSection[]
}
