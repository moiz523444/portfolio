/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  // reactStrictMode: true,
  env: {
    RESEND_API_KEY: "re_adfPG5sP_7YTkzEL65ns4kzrQDKFecVQ3",
  },
};

export default nextConfig;
