/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s4.anilist.co",
        port: "",
      },
    ],
  },
  cacheComponents: true,
  reactStrictMode: true,
};

export default config;
