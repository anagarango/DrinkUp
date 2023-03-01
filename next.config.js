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

// module.exports = {
//   // reactStrictMode: true,
//   // compiler:{
//   //   styledComponents:true
//   // },
//   async headers() {
//     return [
//       {
//         // Allow loading of resources from googleads.g.doubleclick.net
//         source: 'https://googleads.g.doubleclick.net/:path*',
//         headers: [
//           {
//             key: 'Content-Security-Policy',
//             value: 'frame-ancestors https://www.youtube.com',
//           },
//         ],
//       },
//       {
//         // Allow loading of resources from static.doubleclick.net
//         source: 'https://static.doubleclick.net/:path*',
//         headers: [
//           {
//             key: 'Content-Security-Policy',
//             value: 'frame-ancestors https://www.youtube.com',
//           },
//         ],
//       },
//     ];
//   },
// }

module.exports = {
  reactStrictMode: true,
  compiler:{
    styledComponents:true
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors https://www.youtube.com",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};

