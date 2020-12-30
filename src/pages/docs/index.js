import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import Link from 'next/link'
import { Link as TextLink } from '@/components/home/common'
import clsx from 'clsx'
import tinytime from 'tinytime'
import { Community } from '@/components/Community'

const whatsNew = [
  {
    title: 'Stack Object',
    image: require('@/img/docs/stack-object.svg').ReactComponent,
    href: '/docs/stack',
  },
  {
    title: 'Cluster Object',
    image: require('@/img/docs/cluster-object.svg').ReactComponent,
    href: '/docs/cluster',
  },
  {
    title: 'Frame Object',
    image: require('@/img/docs/frame-object.svg').ReactComponent,
    href: '/docs/frame',
  },
  {
    title: 'Wrapper Object',
    image: require('@/img/docs/wrapper-object.svg').ReactComponent,
    href: '/docs/wrapper',
  },
  {
    title: 'Skip Link',
    image: require('@/img/docs/skip-link.svg').ReactComponent,
    href: '/docs/skip-link',
  },
  {
    title: 'Intrinsic Center Utility',
    image: require('@/img/docs/intrinsic-center.svg').ReactComponent,
    href: '#',
  },
  {
    title: 'Active Breakpoint',
    version: 'Dev',
    image: require('@/img/docs/active-breakpoint.svg').ReactComponent,
    href: '/docs/active-breakpoint',
  },
  {
    title: 'PX/REM helpers',
    version: 'Dev',
    image: require('@/img/docs/config-styleguide.svg').ReactComponent,
    href: '/docs/px-rem-helpers',
  },
]

const latestUpdates = [
  {
    title: 'CaptainCSS documentation is released',
    date: '2020-12-23T09:00:00.000Z',
    url: 'https://captaincss.hexdigital.com',
    description:
      `We just released the first iteration of the CaptainCSS documentation, as a fork of Tailwind's docs repo for maximum familiarity when using them both.`,
  },
  {
    title: 'CaptainCSS v2 released',
    date: '2020-12-22T09:00:00.000Z',
    url: 'https://github.com/hex-digital/captaincss/releases',
    description:
      "CaptainCSS is rewritten as a plugin for Tailwind, to coincide with the release of Tailwind v2. SCSS was removed, and it became fully PostCSS.",
  },
  {
    title: 'CaptainCSS v1 released',
    date: '2020-11-11T08:55:00.000Z',
    url: 'https://github.com/hex-digital/captaincss/releases',
    description:
      `CaptainCSS launched as a SCSS framework, packaging up the CSS objects and utilities we've been using for over 6 years. The layouts and utilities are tried and tested in hundreds of production websites.`,
  },
]

const formatDate = tinytime('{MM} {DD}, {YYYY}').render

export default function DocsLandingPage() {
  return (
    <div className="px-4 sm:px-6 xl:px-8 pt-10 pb-16">
      <h1 className="text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-4">
        Getting started with CaptainCSS
      </h1>
      <p className="text-2xl tracking-tight mb-10">
        An extensible, scalable set of CSS objects and utilities that harness Tailwind to provide structure to teams and large or long-lasting projects.
      </p>
      <TextLink href="/docs/installation" className="text-purple-600 hover:text-purple-800">
        Get Started ->
      </TextLink>

      <section>
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 mt-16 mb-8">
          What’s new in CaptainCSS
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-8 font-semibold text-gray-900 text-center">
          {whatsNew.map((item) => (
            <li key={item.title} className="flex">
              <Link href={item.href}>
                <a className="relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                  {item.image && <item.image className="h-auto max-w-full mx-auto mb-3" />}
                  {item.title}
                  {item.version && (
                    <span className="absolute top-2 right-2 bg-fuchsia-100 text-fuchsia-600 rounded-full text-xs py-0.5 px-2">
                      {item.version}
                    </span>
                  )}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <header className="flex items-center justify-between mt-16 mb-8">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900">Latest Updates</h2>
          {/*<a href="https://twitter.com/jamiew_tv" className="font-medium text-gray-900">
            View all the latest updates
          </a>*/}
        </header>
        <ul className="bg-gray-50 rounded-3xl p-2 sm:p-5 xl:p-6">
          {latestUpdates.map((item, i) => (
            <li key={item.title}>
              <article>
                <a
                  href={item.url}
                  className="grid md:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden hover:bg-white"
                >
                  <h3 className="font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0">
                    {item.title}
                  </h3>
                  <time
                    dateTime={item.date}
                    className="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0"
                  >
                    <svg
                      viewBox="0 0 12 12"
                      className={clsx('w-3 h-3 mr-6 overflow-visible', {
                        'text-gray-300': i !== 0,
                        'text-cyan-400': i === 0,
                      })}
                    >
                      <circle cx="6" cy="6" r="6" fill="currentColor" />
                      {i === 0 && (
                        <circle
                          cx="6"
                          cy="6"
                          r="11"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      )}
                      {i !== 0 && (
                        <path
                          d="M 6 -6 V -30"
                          fill="none"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="text-gray-200"
                        />
                      )}
                      {i !== latestUpdates.length - 1 && (
                        <path
                          d="M 6 18 V 500"
                          fill="none"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="text-gray-200"
                        />
                      )}
                    </svg>
                    {formatDate(new Date(item.date))}
                  </time>
                  <p className="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0">
                    {item.description}
                  </p>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 mt-16 mb-8">
          Get involved
        </h2>
        <Community />
      </section>
    </div>
  )
}

DocsLandingPage.layoutProps = {
  meta: {
    title: 'Documentation',
  },
  Layout: DocumentationLayout,
}
