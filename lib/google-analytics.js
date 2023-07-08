import siteMetadata from '@/data/siteMetadata'
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || []
  // eslint-disable-next-line no-inner-declarations
  function gtag() {
    window.dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', siteMetadata.googleAnalyticsId)
}
