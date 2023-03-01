/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   compiler:{
//     styledComponents:true
//   },
//   contentSecurityPolicy: {
//     directives: {
//       'frame-src': ['self', 'https://www.youtube.com']
//     }
//   }
// }

// module.exports = nextConfig

// module.exports = {
//   // other config options...
//   contentSecurityPolicy: {
//     directives: {
//       // other directives...
//       'frame-src': ['self', 'https://www.youtube.com']
//     }
//   }
// };

module.exports = {
  reactStrictMode: true,
  compiler:{
    styledComponents:true
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://www.youtube.com"
          }
        ]
      }
    ]
  }
}

