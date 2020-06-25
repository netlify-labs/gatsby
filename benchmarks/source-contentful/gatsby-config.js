console.log('before process.env', process.env)
if (process.env.GATSBY_CLOUD !== 'true') {
  console.log('LOAD dotenv')
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}
console.log('after process.env', process.env)
console.log('────────────────────────────────────────────────')

console.log('process.env.CONTENTFUL_SPACE_ID', process.env.CONTENTFUL_SPACE_ID)
console.log('process.env.CONTENTFUL_ACCESS_TOKEN', process.env.CONTENTFUL_ACCESS_TOKEN)
const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
}

// BENCHMARK_REPORTING_URL is Endpoint to send metrics to

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    siteTitle: "Gatsby Contentful Benchmark",
  },
  plugins: [
    `gatsby-plugin-benchmark-reporting`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
  ],
}
