/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL,
    },
    images: {
        domains: ['metroio.vtexassets.com', 'plataforma-virtual.s3.us-west-2.amazonaws.com'],
    }
}

module.exports = nextConfig
