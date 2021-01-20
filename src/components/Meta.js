import Head from 'next/head'

export const Meta = ({ site }) => {
  const { title, url, description } = site

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta name="lang" content="en" />
      <meta name="theme-color" content="#000" />
      <meta name="description" content={description} />

      <meta name="og:url" content={url} />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <title>{title}</title>
    </Head>
  )
}
