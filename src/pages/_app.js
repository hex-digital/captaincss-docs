import '../css/main.css'
import 'focus-visible'
import { useState, useEffect, Fragment } from 'react'
import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'
import Head from 'next/head'
import twitterLargeCard from '@/img/twitter-large-card.jpg'
import { ResizeObserver } from '@juggle/resize-observer'
import 'intersection-observer'

if (typeof window !== 'undefined' && !('ResizeObserver' in window)) {
  window.ResizeObserver = ResizeObserver
}

const progress = new ProgressBar({
  size: 2,
  color: '#22D3EE',
  className: 'bar-of-progress',
  delay: 100,
})

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== 'undefined') {
  progress.start()
  progress.finish()
}

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', () => {
  progress.finish()
  window.scrollTo(0, 0)
})
Router.events.on('routeChangeError', progress.finish)

export default function App({ Component, pageProps, router }) {
  let [navIsOpen, setNavIsOpen] = useState(false)

  useEffect(() => {
    if (!navIsOpen) return
    function handleRouteChange() {
      setNavIsOpen(false)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [navIsOpen])

  const Layout = Component.layoutProps?.Layout || Fragment
  const layoutProps = Component.layoutProps?.Layout
    ? { layoutProps: Component.layoutProps, navIsOpen, setNavIsOpen }
    : {}
  const meta = Component.layoutProps?.meta || {}
  const description =
    meta.metaDescription || meta.description || 'Documentation for the CaptainCSS framework.'

  if (router.pathname.startsWith('/examples/')) {
    return <Component {...pageProps} />
  }

  return (
    <>
      <Title suffix="CaptainCSS">{meta.metaTitle || meta.title}</Title>
      <Head>
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:site" name="twitter:site" content="@captaincss" />
        <meta key="twitter:description" name="twitter:description" content={description} />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`https://captaincss.hexdigital.com${twitterLargeCard}`}
        />
        <meta key="twitter:creator" name="twitter:creator" content="@captaincss" />
        <meta
          key="og:url"
          property="og:url"
          content={`https://captaincss.hexdigital.com${router.pathname}`}
        />
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="description" property="description" content={description} />
        <meta
          key="og:image"
          property="og:image"
          content={`https://captaincss.hexdigital.com${twitterLargeCard}`}
        />
      </Head>
      <a className="skip-link" href="#content-wrapper">Skip to content</a>
      {router.pathname.startsWith('/docs/active-breakpoint') && (
        <div className="c-active-breakpoint absolute"></div>
      )}
      {router.pathname !== '/' && (
        <Header navIsOpen={navIsOpen} onNavToggle={(isOpen) => setNavIsOpen(isOpen)} />
      )}
      <Layout {...layoutProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
