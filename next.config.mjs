/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{protocol: "https", hostname: "dragonball-api.com"}],
    },
    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/home",
            },
            {
                source: "/segunda-pagina",
                destination: "/axios-page",
            },
            {
                source: "/terceira-pagina",
                destination: "/server-side",
            },
        ]
    }
};

export default nextConfig;
