import siteMetadata from '@/data/siteMetadata'

window.dataLayer = window.dataLayer || []
function gtag() {
  window.dataLayer.push(arguments)
}
gtag('js', new Date())
gtag('config', siteMetadata.googleAnalyticsId)
