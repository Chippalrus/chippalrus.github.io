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
    enable: true,
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
    /*{
      name: 'About',
      icon: 'fa6-regular:address-card',
      url: '/about/',
    },*/
    {
      name: 'Youtube',
      icon: 'fa6-brands:youtube',
      url: 'https://www.youtube.com/user/chippalrus',
    },
    {
      name: 'Bluesky',
      icon: 'bluesky',
      url: 'https://chippalrus.bsky.social',
    },
    {
      name: 'Instagram',
      icon: 'fa6-brands:instagram',
      url: 'https://instagram.com/chippalrus',
    },
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',
      url:  'https://twitter.com/chippalrus_',
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
      url: '/unity/assets/',
    },
    {
      name: 'Illustrations',
      icon: 'chippalrus_b',
      url: '/illu/',
    },
    {
      name: 'Work in progress',
      icon: 'material-symbols:construction',
      url: '/wip/',
    },
    {
      name: 'All Posts',
      icon: 'material-symbols:menu-rounded',
      url: '/archive/',
    },
  ],
  card_info: [
    {
      name: '@chippalrus',
      url:  'https://chippalrus.bsky.social',
      social:true,
    },
    {
      name: 'https://chippalrus.dev',
      icon: 'material-symbols:language',
      url:  'https://chippalrus.dev',
      social:false,
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
      icon: 'fa6-brands:instagram',
      url:  'https://instagram.com/chippalrus',
    },
    {
      icon: 'bluesky',
      url:  'https://chippalrus.bsky.social/',
    },
  ]
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
