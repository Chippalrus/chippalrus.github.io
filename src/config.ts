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
      name: 'Posts',
      icon: 'material-symbols:menu-rounded',
      url: '/posts/',
    },
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',
      url: 'https://twitter.com/Chippalrus',
    },
    {
      name: 'Youtube',
      icon: 'fa6-brands:youtube',
      url: 'https://www.youtube.com/user/chippalrus',
    },
    {
      name: 'Itch-io',
      icon: 'fa6-brands:itch-io',
      url: 'https://chippalrus.itch.io/',
    },
    {
      name: 'Unity',
      icon: 'fa6-brands:unity',
      url: 'https://assetstore.unity.com/publishers/53124',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/Chippalrus',
    },
    {
      name: 'Instagram',
      icon: 'fa6-brands:instagram',
      url: 'https://instagram.com/chippalrus',
    },
    {
      name: 'Bluesky',
      icon: 'fa6-brands:twitter',
      url: 'https://chippalrus.bsky.social/',
    },
  ],
  page_links: [
    {
      name: 'Unity Assets',
      icon: 'fa6-brands:unity',
      url: '/unity/assets/',
    },
    {
      name: 'Logo Design',
      icon: 'chippalrus_w',
      url: '/gd/logos/',
    },
    {
      name: 'Work in progress',
      icon: 'material-symbols:construction',
      url: '/wip/',
    },
    {
      name: 'All Posts',
      icon: 'material-symbols:menu-rounded',
      url: '/posts/',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
