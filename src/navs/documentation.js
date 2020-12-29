import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  'Getting started': [
    pages['installation'],
    {
      title: 'Release Notes',
      href: 'https://github.com/hex-digital/captaincss/blob/main/CHANGELOG.md',
    },
    pages['browser-support'],
  ],
  'Core Concepts': [
    pages['what-is-captain'],
    pages['common-language'],
    pages['itcss-bem'],
  ],
  Customization: [
    pages['configuration'],
    pages['theme'],
    pages['prefixes'],
  ],
  Layout: [
    pages['cluster'],
    pages['stack'],
    pages['frame'],
    pages['wrapper'],
  ],
  Utilities: [
    // pages['blend-mode']
  ],
  Accessibility: [
    pages['skip-link'],
  ],
  Development: [
    pages['active-breakpoint'],
    pages['px-rem-functions']
  ],
  'Tailwind + Plugins': [
    {
      title: 'Tailwind Docs',
      href: 'https://tailwindcss.com/docs',
    },
    {
      title: 'Tailwind Typography',
      href: 'https://tailwindcss.com/docs/typography-plugin',
    },
    {
      title: 'Tailwind UI',
      href: 'https://tailwindui.com/',
    },
  ],
}
