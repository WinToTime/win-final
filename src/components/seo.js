import * as React from "react"
import { Helmet } from "react-helmet"

function Seo({ description, title, canonicalLink, children }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <!-- Разрешить запуск веб-приложения в полноэкранном режиме — iOS. --> */}
      <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      {/* <!-- Разрешить запуск веб-приложения в полноэкранном режиме — Android. --> */}
      <meta name="mobile-web-app-capable" content="yes"></meta>
      <link rel="canonical" href={canonicalLink} />
      {children}
    </Helmet>
  )
}

export default Seo
