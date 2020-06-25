console.log('before BENCHMARK_CONTENTFUL_SPACE_ID', process.env.BENCHMARK_CONTENTFUL_SPACE_ID)
console.log('before BENCHMARK_CONTENTFUL_ACCESS_TOKEN', process.env.BENCHMARK_CONTENTFUL_ACCESS_TOKEN)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
console.log('process.env.BENCHMARK_CONTENTFUL_SPACE_ID', process.env.BENCHMARK_CONTENTFUL_SPACE_ID)
console.log('process.env.BENCHMARK_CONTENTFUL_ACCESS_TOKEN', process.env.BENCHMARK_CONTENTFUL_ACCESS_TOKEN)
const contentfulConfig = {
  spaceId: process.env.BENCHMARK_CONTENTFUL_SPACE_ID,
  accessToken: process.env.BENCHMARK_CONTENTFUL_ACCESS_TOKEN,
  host: process.env.BENCHMARK_CONTENTFUL_HOST,
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
