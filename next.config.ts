import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Limit Pages Router to .ts/.tsx so old .jsx files in src/pages/ are ignored
  pageExtensions: ['tsx', 'ts'],
  webpack: (config) => {
    config.resolve.alias.canvas = false
    // pdfjs-dist v5 modern build breaks under webpack — import legacy path directly in component
    return config
  },
}

export default nextConfig
