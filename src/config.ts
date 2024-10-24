import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Chippalrus',
  subtitle: 'Zero discipline, all-purpose flour.',
  lang: 'en',
  themeHue: 250,
  banner: {
    enable: false,
    src: 'assets/images/1080.png',
  },
  url: 'https://chippalrus.dev/',
}

export const navBarConfig: NavBarConfig = {
  links: [LinkPreset.Archive],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/profile/baselog.png',
  name: 'Chippalrus',
  bio: 'Zero discipline, all-purpose flour.',
  links: [
    {
      name: 'Youtube',
      icon: 'fa6-brands:youtube',
      url: 'https://www.youtube.com/@chippalrus_dev',
    },
    {
      name: 'Bluesky',
      icon: 'bluesky',
      url: 'https://bsky.app/profile/chippalrus.dev',
    },
    {
      name: 'Instagram',
      icon: 'fa6-brands:instagram',
      url: 'https://instagram.com/chippalrus.dev',
    },
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',
      url:  'https://twitter.com/chippalrus_dev',
    },
    {
      name: 'Unity',
      icon: 'fa6-brands:unity',
      url: 'https://assetstore.unity.com/publishers/53124',
    },
    {
      name: 'Itch-io',
      icon: 'fa6-brands:itch-io',
      url: 'https://chippalrus.itch.io',
    },
    {
      name: 'Ko-fi',
      icon: 'kofi',
      url: 'https://ko-fi.com/chippalrus',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/Chippalrus',
    },
  ],
  page_links: [
    {
      name: 'Unity Assets',
      icon: 'fa6-brands:unity',
      url: '/unity',
    }
  ],
  card_info: [
    {
      name: '@chippalrus_dev',
      icon: 'fa6-brands:youtube',
      url:  'https://www.youtube.com/@chippalrus_dev',
      social:false,
      sub:true
    },
    {
      name: 'chippalrus.dev',
      url:  'https://chippalrus.dev',
      social:true,
      sub:false
    },
    {
      name: 'contact@chippalrus.dev',
      icon: 'material-symbols:mail',
      url:  'mailto:contact@chippalrus.dev',
      social:false,
    },
  ],
  card_info_social: [
    {
      icon: 'bluesky',
      url:  'https://bsky.app/profile/chippalrus.dev',
    },
    {
      icon: 'fa6-brands:instagram',
      url:  'https://instagram.com/chippalrus.dev',
    },
    {
      icon: 'material-symbols:language',
      url:  'https://chippalrus.dev',
    }
  ],
  card_info_sub: [
    {
      icon: 'fa6-brands:twitter',
      url:  'https://twitter.com/chippalrus_dev',
    },
    {
      icon: 'fa6-brands:youtube',
      url:  'https://www.youtube.com/@chippalrus_dev',
    }
  ]
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
