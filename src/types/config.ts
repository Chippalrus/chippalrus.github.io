export type SiteConfig = {
  title: string
  subtitle: string

  lang: string

  themeHue: number
  banner: {
    enable: boolean
    src: string
  }
  url: string
}

export enum LinkPreset {
  Home = 0,
  Archive = 1,
  About = 2,
}

export type NavBarLink = {
  name: string
  url: string
  external?: boolean
}

export type NavBarConfig = {
  links: (NavBarLink | LinkPreset)[]
}

export type ProfileConfig = {
  avatar?: string
  name: string
  bio?: string
  links: {
    name: string
    url: string
    icon: string
  }[]
  page_links?: {
    name: string
    url: string
    icon: string
  }[]
  card_info?:{
    name: string
    icon?: string
    url?: string
    social?:boolean
  }[]
  card_info_social?:{
    icon?: string
    url?: string
  }[]
}

export type LicenseConfig = {
  enable: boolean
  name: string
  url: string
}
