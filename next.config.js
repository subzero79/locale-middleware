/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		defaultLocale: "en",
		locales: ["en", "es", "pt"],
	},
};

module.exports = nextConfig;
